import { log, track } from "./analyticsReporter";

function AnalyticsTracker(options, debug = false) {
  const { metricName, data } = options;
  if (debug) {
    log(metricName, { duration: data });
  } else {
    track(metricName, { duration: data });
  }
}

export default AnalyticsTracker;
