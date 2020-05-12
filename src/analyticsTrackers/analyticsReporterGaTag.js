function log(metricLabel, metricValue) {
  // eslint-disable-next-line no-console
  console.log(metricLabel, metricValue);
}

function track(metricAction, metricValue) {
  if (window.ga) {
    window.ga("send", {
      hitType: "event",
      eventCategory: "rum",
      eventLabel: "timing_complete",
      eventAction: metricAction,
      eventValue: metricValue,
    });
  }
}

export { log, track };
