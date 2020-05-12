import { log, track } from "./analyticsReporterGTag";

function AnalyticsTrackerGTag(options, debug = false) {
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

export default AnalyticsTrackerGTag;
