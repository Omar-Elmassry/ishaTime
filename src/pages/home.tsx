import { useAdhanTimesQuery } from "@/lib/react-query/hooks/use-adhan-times-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function Home() {
  const today = new Date().toLocaleDateString("en-GB").split("/").join("-");
  const { data, isLoading } = useAdhanTimesQuery(today);

  const prayers = [
    { name: "Fajr", time: data?.data.timings.Fajr },
    { name: "Dhuhr", time: data?.data.timings.Dhuhr },
    { name: "Asr", time: data?.data.timings.Asr },
    { name: "Maghrib", time: data?.data.timings.Maghrib },
    { name: "Isha", time: data?.data.timings.Isha },
    { name: "Midnight", time: data?.data.timings.Midnight },
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
        <Card className="border-0 bg-gray-900/50 backdrop-blur-lg">
          <CardHeader className="space-y-1 text-center">
            {isLoading ? (
              <Skeleton className="h-8 w-48 mx-auto" />
            ) : (
              <>
                <CardTitle className="text-2xl font-bold tracking-tight text-white">
                  {data?.data.date.readable}
                </CardTitle>
                <p className="text-sm text-gray-400">
                  {data?.data.date.hijri.date} {data?.data.date.hijri.month.en}
                </p>
              </>
            )}
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {prayers.map((prayer) => (
                <div
                  key={prayer.name}
                  className="bg-gray-800/50 rounded-lg p-4 text-center transition-colors hover:bg-gray-800"
                >
                  {isLoading ? (
                    <>
                      <Skeleton className="h-5 w-20 mx-auto mb-2" />
                      <Skeleton className="h-6 w-16 mx-auto" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-gray-400 text-sm font-medium mb-1">
                        {prayer.name}
                      </h3>
                      <p className="text-white text-lg font-semibold">
                        {prayer.time}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
