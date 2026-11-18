import readingTimeEstimator from "reading-time";

export function formatEditorialDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function calculateReadingTime(text: string): string {
  if (!text) return "3 min read";
  const stats = readingTimeEstimator(text);
  return stats.text || `${Math.max(1, Math.ceil(stats.minutes))} min read`;
}

export function buildShareLinks(url: string, title: string, excerpt?: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(`${title}${excerpt ? ` — ${excerpt}` : ""}`);

  return {
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsApp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
  };
}
