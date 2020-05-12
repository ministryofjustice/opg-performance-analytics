function AnalyticsTrackerGaTag(options, debug = false) {
  const { metricName, data } = options;
  if (debug) {
    // eslint-disable-next-line no-console
    console.log(metricName, data);
  } else {
    const analyticsOptions = {
      name: metricName,
      value: data,
      event_category: "rum",
    };
    // eslint-disable-next-line no-console
    console.log("timing_complete", analyticsOptions);
  }
}

export default AnalyticsTrackerGaTag;
