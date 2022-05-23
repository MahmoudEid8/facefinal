import createActivityDetector from "activity-detector";

import { useEffect, useState } from "react";

export const useIdle = (options) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on("idle", () => setIsIdle(true));
    activityDetector.on("active", () => setIsIdle(false));
    return () => activityDetector.stop();
  }, []);
  return isIdle;
};
