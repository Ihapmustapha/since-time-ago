This fork added Typescript typing and num seconds ago.
# since-time-ago-typescript

[![npm(scooped)](https://img.shields.io/badge/npm-v1.1.1-blue)](https://www.npmjs.com/package/since-time-ago-typescript)

since-time-ago-typescript converts timestamps into readable format

Formats a timestamp to:

- just now
- 24 seconds ago
- 3 minutes ago
- 5 hours ago
- 8 days ago
- 6 months ago
- 4 years ago

## Install

```sh
$ npm i since-time-ago-typescript
```

## Use

This module exports a main function 'since()' that takes one argument 'timestamp' and returns
timestamp formated in a readable form:

```js
import since from "since-time-ago-typescript";

// Timestamps for one minute, one hour, one day, one month and one year
const minute = 60 * 1000;
const hour = 60 * minute;
const day = 24 * hour;
const month = 30 * day;
const year = 12 * month;

// simulating different inputs
const nowTimestamp = new Date().getTime(); // now
const fiveMinutesAgoTimestamp = nowTimestamp - 5 * minute; // timestamp for 5 minutes ago
const fiveHoursAgoTimestamp = nowTimestamp - 5 * hour; // timestamp for 5 hours ago
const fiveDaysAgoTimestamp = nowTimestamp - 5 * day; // timestamp for 5 days ago
const fiveMonthsAgoTimestamp = nowTimestamp - 5 * month; // timestamp for 5 months ago
const fiveYearsAgoTimestamp = nowTimestamp - 5 * year; // timestamp for 5 years ago

// using since()
since(); // returns undefined
since("hello world"); // throws an Error
since(nowTimestamp); // returns 'just now'
since(fiveMinutesAgoTimestamp); // returns '5 minutes ago'
since(fiveHoursAgoTimestamp); // returns '5 hours ago'
since(fiveDaysAgoTimestamp); // returns '5 days ago'
since(fiveMonthsAgoTimestamp); // returns '5 months ago'
since(fiveYearsAgoTimestamp); // returns '5 years ago'
```

## License

[MIT](LICENSE)
