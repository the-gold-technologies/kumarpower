import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

function loadEnvFile() {
  const envFiles = [".env.production", ".env.local", ".env"];
  for (const file of envFiles) {
    const envPath = path.join(rootDir, file);
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = (match[2] || "").trim();
          if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
          if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
          if (!process.env[key]) {
            process.env[key] = value;
          }
        }
      }
    }
  }
}

loadEnvFile();

const cmsApiUrl = (
  process.env.VITE_CMS_API_URL || "https://cms.kumarpower.com"
).trim().replace(/\/+$/, "");

async function syncFile(endpoint, filename) {
  const filePath = path.join(publicDir, filename);

  try {
    const res = await fetch(`${cmsApiUrl}${endpoint}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (res.ok) {
      const content = await res.text();
      fs.writeFileSync(filePath, content, "utf-8");
      console.log(`[sync-seo] Successfully updated ${filename} from CMS (${cmsApiUrl}).`);
    } else {
      console.warn(`[sync-seo] CMS returned ${res.status} for ${endpoint}; keeping existing ${filename}`);
    }
  } catch (err) {
    console.warn(`[sync-seo] Could not reach CMS at ${cmsApiUrl}${endpoint} (${err.message}); keeping existing ${filename}`);
  }
}

async function main() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  await Promise.all([
    syncFile("/api/seo/robots", "robots.txt"),
    syncFile("/api/seo/sitemap", "sitemap.xml"),
  ]);
}

main();
