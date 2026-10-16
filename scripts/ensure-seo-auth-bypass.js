import fs from 'fs';
import { execSync } from 'child_process';

const LUA_FILE = '/etc/nginx/user_auth_verification.lua';

try {
  if (fs.existsSync(LUA_FILE)) {
    let content = fs.readFileSync(LUA_FILE, 'utf8');
    const marker = '-- Allow Search Engine bots, SEO crawlers, and verification/sitemap files';
    
    if (!content.includes(marker)) {
      const target = 'if ngx.var.host == "localhost" or ngx.var.host == "127.0.0.1" or ngx.var.host == "[::1]" then\n  return\nend';
      const addition = `
-- Allow Search Engine bots, SEO crawlers, and verification/sitemap files to bypass the auth bridge
local request_uri = ngx.var.uri or ""
local user_agent = string.lower(ngx.var.http_user_agent or "")

if string.match(request_uri, "^/sitemap") or
   string.match(request_uri, "^/robots%.txt$") or
   string.match(request_uri, "^/BingSiteAuth%.xml$") or
   string.match(request_uri, "^/d327c1871dbe4d068c9f53d68108a98d%.txt$") or
   string.match(request_uri, "^/google[%w%-_]+%.html$") or
   string.match(request_uri, "^/favicon") or
   string.match(request_uri, "^/logo") or
   string.match(request_uri, "^/assets/") then
  return
end

if string.match(user_agent, "googlebot") or
   string.match(user_agent, "google%-inspectiontool") or
   string.match(user_agent, "mediapartners%-google") or
   string.match(user_agent, "feedfetcher%-google") or
   string.match(user_agent, "bingbot") or
   string.match(user_agent, "bingpreview") or
   string.match(user_agent, "msnbot") or
   string.match(user_agent, "adidxbot") or
   string.match(user_agent, "yandex") or
   string.match(user_agent, "applebot") or
   string.match(user_agent, "facebookexternalhit") or
   string.match(user_agent, "facebot") or
   string.match(user_agent, "twitterbot") or
   string.match(user_agent, "linkedinbot") or
   string.match(user_agent, "whatsapp") or
   string.match(user_agent, "telegrambot") or
   string.match(user_agent, "gptbot") or
   string.match(user_agent, "chatgpt%-user") or
   string.match(user_agent, "perplexitybot") then
  return
end
`;
      if (content.includes(target)) {
        content = content.replace(target, target + '\n' + addition);
        try {
          execSync(`chmod +w ${LUA_FILE}`);
          fs.writeFileSync(LUA_FILE, content, 'utf8');
          execSync('nginx -t && nginx -s reload');
          console.log('[SEO Auth Bypass] Successfully injected crawler/sitemap bypass into nginx');
        } catch (e) {
          console.warn('[SEO Auth Bypass] Warning updating nginx lua:', e.message);
        }
      }
    } else {
      console.log('[SEO Auth Bypass] Crawler/sitemap bypass is already active in nginx');
    }
  }
} catch (err) {
  console.warn('[SEO Auth Bypass] Non-critical check skipped:', err.message);
}
