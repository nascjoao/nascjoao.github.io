import timeAgo from "../../lib/date/time-ago.js";

export default function formatPostDatetimeAgo() {
  document.querySelectorAll(".time-ago").forEach((element) => {
    const postDate = new Date(element.getAttribute("datetime").trim());
    element.textContent = timeAgo(postDate);
  });
}
