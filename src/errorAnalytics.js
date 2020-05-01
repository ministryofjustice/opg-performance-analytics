import { track } from "./analyticsReporter";

function ErrorAnalytics() {
  if (typeof window.onerror === "object") {
    window.onerror = (err, url, line) => {
      track("exception", {
        description: `${line}: ${err}`,
      });
    };
  }
}

export default ErrorAnalytics;
