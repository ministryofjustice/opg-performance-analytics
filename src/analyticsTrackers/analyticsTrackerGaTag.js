import { log, track } from "./analyticsReporterGaTag";

function AnalyticsTrackerGaTag(options, debug = false) {
  const { metricName, data } = options;
  if (debug) {
    // eslint-disable-next-line no-console
    log(metricName, data);
  } else {
    track(metricName, data);
  }
}

export default AnalyticsTrackerGaTag;
