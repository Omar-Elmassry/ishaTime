import { useState, FormEvent } from "react";

function Home() {
  const [fajrTime, setFajrTime] = useState({ hours: 0, minutes: 0 });
  const [maghribTime, setMaghribTime] = useState({ hours: 0, minutes: 0 });
  const [ishaTime, setIshaTime] = useState<string | null>(null);

  const calculateIshaTime = (e: FormEvent) => {
    e.preventDefault();

    // Convert maghrib to 24-hour format (always PM)
    const maghribHours24 = maghribTime.hours + 12;

    // Calculate total minutes (Fajr is always next day)
    let totalMinutes = 0;

    // Minutes from maghrib to midnight
    totalMinutes += (24 - maghribHours24) * 60;
    totalMinutes -= maghribTime.minutes;

    // Minutes from midnight to fajr (next day)
    totalMinutes += fajrTime.hours * 60;
    totalMinutes += fajrTime.minutes;

    // Get the midpoint in minutes
    const midpointMinutes = Math.floor(totalMinutes / 2);

    // Add to maghrib time
    let resultHours = maghribHours24;
    let resultMinutes = maghribTime.minutes + midpointMinutes;

    // Adjust for minute overflow
    if (resultMinutes >= 60) {
      resultHours += Math.floor(resultMinutes / 60);
      resultMinutes = resultMinutes % 60;
    }

    // Convert to 12-hour format
    const hours12 = resultHours > 12 ? resultHours - 12 : resultHours;
    const formattedTime = `${hours12}:${resultMinutes
      .toString()
      .padStart(2, "0")} PM`;

    setIshaTime(formattedTime);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  حساب وقت خروج العشاء
                </h2>
                <form onSubmit={calculateIshaTime} className="space-y-6">
                  <div>
                    <label className="block text-lg mb-2">وقت الفجر</label>
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className="w-20 px-3 py-2 border rounded"
                        placeholder="ساعة"
                        value={fajrTime.hours}
                        onChange={(e) =>
                          setFajrTime({
                            ...fajrTime,
                            hours: parseInt(e.target.value),
                          })
                        }
                      />
                      <input
                        type="number"
                        className="w-20 px-3 py-2 border rounded"
                        placeholder="دقيقة"
                        value={fajrTime.minutes}
                        onChange={(e) =>
                          setFajrTime({
                            ...fajrTime,
                            minutes: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg mb-2">وقت المغرب</label>
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className="w-20 px-3 py-2 border rounded"
                        placeholder="ساعة"
                        value={maghribTime.hours}
                        onChange={(e) =>
                          setMaghribTime({
                            ...maghribTime,
                            hours: parseInt(e.target.value),
                          })
                        }
                      />
                      <input
                        type="number"
                        className="w-20 px-3 py-2 border rounded"
                        placeholder="دقيقة"
                        value={maghribTime.minutes}
                        onChange={(e) =>
                          setMaghribTime({
                            ...maghribTime,
                            minutes: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded"
                  >
                    احسب
                  </button>
                </form>
                {ishaTime && (
                  <div className="mt-8 text-center">
                    <h3 className="text-xl mb-2">وقت خروج العشاء</h3>
                    <p className="text-2xl font-bold text-blue-600">
                      {ishaTime}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
