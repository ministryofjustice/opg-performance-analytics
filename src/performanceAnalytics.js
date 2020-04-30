import Perfume from "perfume.js";
import AnalyticsTracker from "./analyticsTracker";

function PerformanceAnalytics(debug = false) {
  const perfume = new Perfume({
    analyticsTracker: (options) => AnalyticsTracker(options, debug),
  });

  return perfume;
}

export default PerformanceAnalytics;
