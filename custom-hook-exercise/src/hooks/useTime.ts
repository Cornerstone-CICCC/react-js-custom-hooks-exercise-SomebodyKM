import { useState, useEffect } from "react";

type TimeUnit = "DAY" | "HOUR"

function useTime<T = string>(unit: TimeUnit): T {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      if (unit === 'DAY') {
        const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' })
        setTime(currentDay)
      } else {
        const currentHour = now.getHours().toString()
        setTime(currentHour)
      }
    }

    updateTime()

    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [unit])

  return time as unknown as T
}

export default useTime