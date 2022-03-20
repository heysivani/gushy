// this code snippet was taken from: https://bobbyhadz.com/blog/javascript-convert-timestamp-to-time-ago
export default function calculateRelativeDays(timestamp) {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs
  );

  return rtf.format(daysDifference, "day");
}
