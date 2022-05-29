import { useEffect, useState } from "react";

const formatDate = (date: any) => {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

export default function useClock() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      const newTimeString = formatDate(date);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return {timeString};
}
