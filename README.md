# since-time-ago

[![npm(scooped)](https://img.shields.io/badge/npm-v1.1.1-blue)](https://www.npmjs.com/package/@ihapmustapha/since-time-ago)

since-time-ago converts timestamps into readable format

Formats a timestamp to:

- just now
- 3 minutes ago
- 5 hours ago
- 8 days ago
- 6 months ago
- 4 years ago

## Install

```sh
$ npm i since-time-ago
```

## Use

This module exports a main function 'since()' that takes one argument 'timestamp' and returns
timestamp formated in a readable form:

```js
import since from "since-time-ago";

let timestamp = "1573219272";
let formattedTimestamp = since(timestamp); //returns 'just now', '5 minutes, hours, days, months, years ago'
```

## License

[MIT](LICENSE)
