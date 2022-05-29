import useClock from "shared/hooks/useClock";

export interface ClockProps {}

export default function Clock() {
  const {timeString} = useClock();
  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}
