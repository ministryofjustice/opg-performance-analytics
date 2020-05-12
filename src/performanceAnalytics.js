import Perfume from "perfume.js";
import { AnalyticsTrackerGTag } from "./analyticsTrackers";

function PerformanceAnalytics(analyticsTracker, debug = false) {
  const perfume = new Perfume({
    analyticsTracker: (options) =>
      analyticsTracker
        ? analyticsTracker(options, debug)
        : AnalyticsTrackerGTag(options, debug),
  });

  return perfume;
}

export default PerformanceAnalytics;
