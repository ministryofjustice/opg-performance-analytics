function log(metricLabel, metricValue) {
  // eslint-disable-next-line no-console
  console.log(metricLabel, metricValue);
}

function track(metricAction, analyticsOptions) {
  if (window.gtag) {
    window.gtag("event", metricAction, analyticsOptions);
  }
}

export { log, track };
