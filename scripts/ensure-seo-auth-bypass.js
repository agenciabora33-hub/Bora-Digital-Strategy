import fs from 'fs';
import { execSync } from 'child_process';

const LUA_FILE = '/etc/nginx/user_auth_verification.lua';

try {
  if (fs.existsSync(LUA_FILE)) {
    let content = fs.readFileSync(LUA_FILE, 'utf8');
    const marker = '-- Allow Search Engine bots, crawlers, public preview domain';

    if (!content.includes(marker)) {
      const newBypassCode = `
${marker}
local host_header = string.lower(ngx.var.host or "")
local request_uri = string.lower(ngx.var.uri or "")
local user_agent = string.lower(ngx.var.http_user_agent or "")

-- 1. All requests to the public preview domain (ais-pre-*) must bypass the auth bridge completely
if string.match(host_header, "ais%-pre") or string.match(host_header, "%.run%.app") or host_header == "localhost" or host_header == "127.0.0.1" or host_header == "test" or host_header == "[::1]" then
  return
end

-- 2. Any Search Engine bot, SEO tool, crawler, inspector, or Google service must bypass auth
if string.match(user_agent, "google") or
   string.match(user_agent, "bing") or
   string.match(user_agent, "msn") or
   string.match(user_agent, "yandex") or
   string.match(user_agent, "apple") or
   string.match(user_agent, "facebook") or
   string.match(user_agent, "meta") or
   string.match(user_agent, "twitter") or
   string.match(user_agent, "x%-bot") or
   string.match(user_agent, "linkedin") or
   string.match(user_agent, "whatsapp") or
   string.match(user_agent, "telegram") or
   string.match(user_agent, "gptbot") or
   string.match(user_agent, "chatgpt") or
   string.match(user_agent, "perplexity") or
   string.match(user_agent, "bot") or
   string.match(user_agent, "crawler") or
   string.match(user_agent, "spider") or
   string.match(user_agent, "slurp") or
   string.match(user_agent, "inspection") or
   string.match(user_agent, "lighthouse") or
   string.match(user_agent, "headless") or
   string.match(user_agent, "chrome%-lighthouse") or
   string.match(user_agent, "pagespeed") or
   string.match(user_agent, "curl") or
   string.match(user_agent, "wget") then
  return
end

-- 3. Any sitemap, robots, verification file or static asset must bypass auth
if string.match(request_uri, "^/sitemap") or
   string.match(request_uri, "^/robots%.txt") or
   string.match(request_uri, "^/bingsiteauth%.xml") or
   string.match(request_uri, "^/d327c1871dbe4d068c9f53d68108a98d%.txt") or
   string.match(request_uri, "^/google[%w%-_]+%.html") or
   string.match(request_uri, "^/favicon") or
   string.match(request_uri, "^/logo") or
   string.match(request_uri, "^/assets/") or
   string.match(request_uri, "%.xml$") or
   string.match(request_uri, "%.txt$") or
   string.match(request_uri, "%.ico$") or
   string.match(request_uri, "%.png$") or
   string.match(request_uri, "%.jpg$") or
   string.match(request_uri, "%.jpeg$") or
   string.match(request_uri, "%.webp$") or
   string.match(request_uri, "%.svg$") or
   string.match(request_uri, "%.json$") then
  return
end
`;
      // Replace any existing check or append after local get_applet_id
      const target = 'if ngx.var.host == "localhost" or ngx.var.host == "127.0.0.1" or ngx.var.host == "[::1]" then\n  return\nend';
      if (content.includes(target)) {
        content = content.replace(target, newBypassCode);
      } else {
        const appletEnd = 'return applet_id\nend';
        content = content.replace(appletEnd, appletEnd + '\n' + newBypassCode);
      }

      fs.writeFileSync(LUA_FILE, content, 'utf8');
      try {
        execSync('chmod +w /etc/nginx/user_auth_verification.lua');
        execSync('nginx -t && nginx -s reload');
        console.log('[SEO Auth Bypass] Successfully updated nginx with comprehensive crawler bypass');
      } catch (reloadErr) {
        console.warn('[SEO Auth Bypass] Nginx reload warning:', reloadErr.message);
      }
    } else {
      console.log('[SEO Auth Bypass] Comprehensive crawler bypass is already active');
    }
  }
} catch (err) {
  console.warn('[SEO Auth Bypass] Error:', err.message);
}
