import { log, track } from "./analyticsReporter";

function AnalyticsTracker(options, debug = false) {
  const { metricName, data } = options;
  if (debug) {
    log(metricName, data);
  } else {
    track(metricName, data);
  }
}

export default AnalyticsTracker;
