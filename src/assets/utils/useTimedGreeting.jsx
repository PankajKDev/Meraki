import { useUser } from "@clerk/clerk-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

function useTimedGreeting() {
  const [greeting, setGreeting] = useState("");
  const { user } = useUser();
  useEffect(() => {
    const currentHour = dayjs().hour();
    let greetingText = "Hello";

    if (currentHour >= 5 && currentHour < 12) {
      greetingText = "Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingText = "Afternoon";
    } else if (currentHour >= 18 && currentHour <= 24) {
      greetingText = "Evening";
    } else {
      greetingText = "Night";
    }

    setGreeting(`${greetingText} ${user.fullName}`);
  }, [user]);

  return { greeting };
}

export default useTimedGreeting;
