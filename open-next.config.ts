/**
 * OpenNext Cloudflare adapter config. Transforms the Next.js build output into
 * a Cloudflare Worker (with static assets) so the app — including the
 * /api/contact route — runs on Cloudflare. See https://opennext.js.org/cloudflare
 */
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
