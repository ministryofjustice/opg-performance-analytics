import { log, track } from "./analyticsReporter";

function AnalyticsTracker(options, debug = false) {
  const { metricName, data } = options;
  if (debug) {
    log(metricName, data);
  } else {
    const analyticsOptions = {
      name: metricName,
      value: data,
      event_category: "rum",
    };
    track("timing_complete", analyticsOptions);
  }
}

export default AnalyticsTracker;
