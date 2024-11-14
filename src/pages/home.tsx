import { responseExample } from "@/lib/data";
import { App } from "@/react-query-example";
import { useState, FormEvent } from "react";

function Home() {
  const data = responseExample;
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
          <div className="">
            {/* <App /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
