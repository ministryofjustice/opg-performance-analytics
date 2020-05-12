/* eslint-disable no-console */
import { log, track } from "./analyticsReporterGaTag";

const options = { metricName: "metricOne", data: 1000 };

const original = console.log;

describe("When a metric is to be logged", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  test("it should output the metric to console.log", () => {
    log(options.metricName, options.data);
    expect(console.log).toBeCalled();
    expect(console.log).toHaveBeenCalledTimes(1);

    expect(console.log.mock.calls[0]).toEqual([
      options.metricName,
      options.data,
    ]);
  });

  afterEach(() => {
    console.log = original;
  });
});
describe("When a metric is to be tracked", () => {
  beforeEach(() => {
    global.ga = jest.fn();
    track(options.metricName, options.data);
  });

  test("it should track the metric to google analytics", () => {
    expect(global.ga).toBeCalled();
    expect(global.ga).toHaveBeenCalledTimes(1);
  });

  test("it should call the track method with the correct parameters", () => {
    expect(global.ga).toBeCalledWith("send", {
      hitType: "event",
      eventCategory: "rum",
      eventLabel: "timing_complete",
      eventAction: options.metricName,
      eventValue: options.data,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
