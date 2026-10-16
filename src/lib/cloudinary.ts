/**
 * Cloudinary URL optimization utilities.
 * Automatically injects f_auto, q_auto, and c_limit to deliver lightweight
 * modern image formats (WebP/AVIF) and compressed video streams without altering the database.
 */

export function optimizeCloudinaryUrl(url: string, width: number = 1600): string {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com")) return url;

  // Don't modify if already has transformation parameters
  if (
    url.includes("/image/upload/c_") ||
    url.includes("/image/upload/f_") ||
    url.includes("/image/upload/q_") ||
    url.includes("/video/upload/ac_none")
  ) {
    return url;
  }

  // Optimize image uploads (exclude raw files like PDFs)
  if (url.includes("/image/upload/")) {
    if (url.toLowerCase().endsWith(".pdf")) return url;
    return url.replace(
      "/image/upload/",
      `/image/upload/c_limit,f_auto,q_auto,w_${width}/`
    );
  }

  // Optimize video uploads
  if (url.includes("/video/upload/")) {
    return url.replace(
      "/video/upload/",
      `/video/upload/ac_none,c_limit,q_auto,vc_h264,w_${width}/`
    );
  }

  return url;
}

/**
 * Deeply traverses an object or array and optimizes any Cloudinary URLs found.
 */
export function deepOptimizeCloudinaryUrls<T>(data: T, width: number = 1600): T {
  if (!data) return data;

  if (typeof data === "string") {
    return optimizeCloudinaryUrl(data, width) as unknown as T;
  }

  if (Array.isArray(data)) {
    return data.map((item) =>
      deepOptimizeCloudinaryUrls(item, width)
    ) as unknown as T;
  }

  if (typeof data === "object") {
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(data)) {
      result[key] = deepOptimizeCloudinaryUrls(value, width);
    }
    return result as T;
  }

  return data;
}
