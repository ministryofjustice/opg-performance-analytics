/* eslint-disable no-console */
import AnalyticsTracker from "./analyticsTrackerGaTag";
import { log, track } from "./analyticsReporterGaTag";

const options = { metricName: "metricOne", data: 1000 };

jest.mock("./analyticsReporterGaTag", () => ({
  log: jest.fn(),
  track: jest.fn(),
}));

describe("When a metric is to be reported on", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("And the library is in debug mode", () => {
    beforeEach(() => {
      AnalyticsTracker(options, true);
    });

    test("it should call the log method 1 time", () => {
      expect(log).toBeCalled();
      expect(log).toHaveBeenCalledTimes(1);
    });

    test("it should call the track method with the correct parameters", () => {
      expect(log).toBeCalledWith(options.metricName, options.data);
    });

    test("it should not call the track method", () => {
      expect(track).toHaveBeenCalledTimes(0);
    });
  });
  describe("And the library is in production mode", () => {
    beforeEach(() => {
      AnalyticsTracker(options);
    });
    test("it should call the track method", () => {
      expect(track).toBeCalled();
      expect(track).toHaveBeenCalledTimes(1);
    });

    test("it should not call the log method", () => {
      expect(log).toHaveBeenCalledTimes(0);
    });

    test("it should call the track method with the correct parameters", () => {
      expect(track).toBeCalledWith(options.metricName, options.data);
    });
  });
});
