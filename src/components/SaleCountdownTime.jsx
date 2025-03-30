import React from "react";

const SaleCountdownTime = ({ days, hours, minutes, seconds }) => {
  // Convert all props to total milliseconds
  const calculateEndTime = () => {
    const totalMs =
      days * 24 * 60 * 60 * 1000 +
      hours * 60 * 60 * 1000 +
      minutes * 60 * 1000 +
      seconds * 1000;
    return new Date().getTime() + totalMs;
  };

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [endTime] = React.useState(calculateEndTime());

  React.useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [endTime]);

  return (
    <>
      <div className="flex items-center justify-center gap-[20px] lg:gap-[30px]">
        <div className="flex flex-col items-center gap-[2px]">
          <h2 className="text-[28px] leading-[36px] lg:text-[56px] lg:leading-[68px] text-[var(--text-color)] font-[500]">
            {String(timeLeft.days).padStart(2, "0")}
          </h2>
          <h4 className="text-[16px] lg:leading-[26px] text-[var(--text-color-inActive)] font-[400]">
            Days
          </h4>
        </div>

        <div className="flex flex-col items-center justify-center gap-[10px]">
          <span className="bg-[var(--text-color)] p-[2px] rounded-full" />
          <span className="bg-[var(--text-color)] p-[2px] rounded-full" />
        </div>

        <div className="flex flex-col items-center gap-[2px]">
          <h2 className="text-[28px] leading-[36px] lg:text-[56px] lg:leading-[68px] text-[var(--text-color)] font-[500]">
            {String(timeLeft.hours).padStart(2, "0")}
          </h2>
          <h4 className="text-[16px] lg:leading-[26px] text-[var(--text-color-inActive)] font-[400]">
            Hours
          </h4>
        </div>

        <div className="flex flex-col items-center justify-center gap-[10px]">
          <span className="bg-[var(--text-color)] p-[2px] rounded-full" />
          <span className="bg-[var(--text-color)] p-[2px] rounded-full" />
        </div>

        <div className="flex flex-col items-center gap-[2px]">
          <h2 className="text-[28px] leading-[36px] lg:text-[56px] lg:leading-[68px] text-[var(--text-color)] font-[500]">
            {String(timeLeft.minutes).padStart(2, "0")}
          </h2>
          <h4 className="text-[16px] lg:leading-[26px] text-[var(--text-color-inActive)] font-[400]">
            Minutes
          </h4>
        </div>

        <div className="flex flex-col items-center justify-center gap-[10px]">
          <span className="bg-[var(--text-color)] p-[2px] rounded-full" />
          <span className="bg-[var(--text-color)] p-[2px] rounded-full" />
        </div>

        <div className="flex flex-col items-center gap-[2px]">
          <h2 className="text-[28px] leading-[36px] lg:text-[56px] lg:leading-[68px] text-[var(--text-color)] font-[500]">
            {String(timeLeft.seconds).padStart(2, "0")}
          </h2>
          <h4 className="text-[16px] lg:leading-[26px] text-[var(--text-color-inActive)] font-[400]">
            Seconds
          </h4>
        </div>
      </div>
    </>
  );
};

export default SaleCountdownTime;
