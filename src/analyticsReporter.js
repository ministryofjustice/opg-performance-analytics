function log(metricLabel, metricValue) {
  // eslint-disable-next-line no-console
  console.log(metricLabel, metricValue);
}

function track(metricLabel, metricValue) {
  if (window.gtag) {
    window.gtag("event", "timing_complete", {
      name: metricLabel,
      value: metricValue,
      event_category: "rum",
    });
  }
}

export { log, track };
