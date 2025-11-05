/**
 * Formats a date as a "time ago" string (e.g., "5 minutes ago").
 *
 * @param {Date} date - The date to format.
 */
export default function timeAgo(date) {
  const rtf = new Intl.RelativeTimeFormat(global.lang, { numeric: "auto" });
  try {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = [
      { unit: "year", seconds: 31536000 },
      { unit: "month", seconds: 2592000 },
      { unit: "week", seconds: 604800 },
      { unit: "day", seconds: 86400 },
      { unit: "hour", seconds: 3600 },
      { unit: "minute", seconds: 60 },
      { unit: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return rtf.format(-count, interval.unit);
      }
    }

    return rtf.format(0, "second");
  } catch (error) {
    console.error("Error in timeAgo function:", error);
  }
}
