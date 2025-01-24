import axios from "axios";

export const fetchAdhanTimes = async (date: string) => {
  // Date must be in DD-MM-YYYY format.
  const { data } = await axios.get(
    `https://api.aladhan.com/v1/timings/${date}`,
    // ?latitude=29.989618&longitude=31.336841&method=5&shafaq=general&school=0&midnightMode=1&timezonestring=Africa%2FCairo&iso8601=false
    {
      params: {
        latitude: 29.989618,
        longitude: 31.336841,
        method: 5,
        shafaq: "general",
        school: 0,
        midnightMode: 1,
        timezonestring: "Africa/Cairo",
        iso8601: false,
      },
    }
  );
  return data;
};
