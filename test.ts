// import since from "./index";

import since from './index'

const minute = 60 * 1000;
const hour = 60 * minute;
const day = 24 * hour;
const month = 30 * day;
const year = 12 * month;

const nowTimestamp = new Date().getTime();
const fiveMinutesAgoTimestamp = nowTimestamp - 5 * minute;
const fiveHoursAgoTimestamp = nowTimestamp - 5 * hour;
const fiveDaysAgoTimestamp = nowTimestamp - 5 * day;
const fiveMonthsAgoTimestamp = nowTimestamp - 5 * month;
const fiveYearsAgoTimestamp = nowTimestamp - 5 * year;

it("returns undefined if no input argument provided", () => {
  expect(since()).toBeUndefined();
});

it("returns error if input is invalid timestamp", () => {
  expect.assertions(1);
  try {
    since("randomString");
  } catch (e) {
    expect(e.message).toBe("Invalid timestamp passed to 'since()'");
  }
});

it("returns just now if time stamp is of a few seconds ago", () => {
  expect(since(nowTimestamp)).toBe("just now");
});

it("returns num minutes ago if time stamp is of a few minutes ago", () => {
  expect(since(fiveMinutesAgoTimestamp)).toBe("5 minutes ago");
});

it("returns num hours ago if time stamp is of a few hours ago", () => {
  expect(since(fiveHoursAgoTimestamp)).toBe("5 hours ago");
});

it("returns num days ago if time stamp is of a few days ago", () => {
  expect(since(fiveDaysAgoTimestamp)).toBe("5 days ago");
});

it("returns num months ago if time stamp is of a few months ago", () => {
  expect(since(fiveMonthsAgoTimestamp)).toBe("5 months ago");
});

it("returns num years ago if time stamp is of a few years ago", () => {
  expect(since(fiveYearsAgoTimestamp)).toBe("5 years ago");
});
