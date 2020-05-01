/* eslint-disable no-console */
import { log, track } from "./analyticsReporter";

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
    global.gtag = jest.fn();
    track("timing_complete", {
      name: options.metricName,
      value: options.data,
      event_category: "rum",
    });
  });

  test("it should track the metric to google analytics", () => {
    expect(global.gtag).toBeCalled();
    expect(global.gtag).toHaveBeenCalledTimes(1);
  });

  test("it should call the track method with the correct parameters", () => {
    expect(global.gtag).toBeCalledWith("event", "timing_complete", {
      name: options.metricName,
      value: options.data,
      event_category: "rum",
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
