import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Transforms a Cloudinary PDF URL to include the attachment flag `/fl_attachment/`
 * so Cloudinary forces a direct file attachment download.
 */
export function getDownloadablePdfUrl(url: string): string {
  if (!url || url === "#") return "#";
  if (url.includes("cloudinary.com")) {
    if (url.includes("/upload/") && !url.includes("/fl_attachment/")) {
      return url.replace("/upload/", "/upload/fl_attachment/");
    }
  }
  return url;
}

/**
 * Triggers a direct file download for any Cloudinary or web URL
 * directly saving it to the user's device without opening raw Cloudinary tabs.
 */
export async function downloadPdf(url: string, filename = "document.pdf") {
  if (!url || url === "#") return;

  const downloadUrl = getDownloadablePdfUrl(url);

  try {
    const res = await fetch(downloadUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch (err) {
    console.warn("Direct blob download failed, falling back to direct anchor download", err);
    const link = document.createElement("a");
    link.href = downloadUrl;
    if (filename) link.download = filename;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
