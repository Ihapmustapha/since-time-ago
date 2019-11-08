"use strict";

let since = timestamp => {
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 12 * month;

  if (!timestamp) return undefined;

  if (isNaN(new Date(timestamp).getTime())) {
    throw new Error("Invalid timestamp passed to 'since()'");
  }

  const difference = new Date().getTime() - timestamp;
  if (Math.floor(difference / year) > 1)
    return `${Math.floor(difference / year)} years ago`;
  if (Math.floor(difference / month) > 1)
    return `${Math.floor(difference / month)} months ago`;
  if (Math.floor(difference / day) > 1)
    return `${Math.floor(difference / day)} days ago`;
  if (Math.floor(difference / hour) > 1)
    return `${Math.floor(difference / hour)} hours ago`;
  if (Math.floor(difference / minute) > 1)
    return `${Math.floor(difference / minute)} minutes ago`;
  return `just now`;
};

module.exports = since;
