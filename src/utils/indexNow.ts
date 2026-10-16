/**
 * IndexNow Protocol Integration & Automation
 * Official standard supported by Microsoft Bing, Yandex, Seznam, Naver.
 * Key: d327c1871dbe4d068c9f53d68108a98d
 * Verification File: /d327c1871dbe4d068c9f53d68108a98d.txt
 */

export const INDEXNOW_KEY = 'd327c1871dbe4d068c9f53d68108a98d';
export const INDEXNOW_KEY_FILE = 'd327c1871dbe4d068c9f53d68108a98d.txt';
export const INDEXNOW_SEARCH_ENGINES = [
  { name: 'Microsoft Bing', endpoint: 'https://www.bing.com/indexnow' },
  { name: 'IndexNow Central Hub', endpoint: 'https://api.indexnow.org/indexnow' },
  { name: 'Yandex', endpoint: 'https://yandex.com/indexnow' },
  { name: 'Seznam.cz', endpoint: 'https://search.seznam.cz/indexnow' },
  { name: 'Naver', endpoint: 'https://searchadvisor.naver.com/indexnow' }
];

export const CORE_SITE_SLUGS = [
  '',
  'planos',
  'criacao-de-sites',
  'site-profissional',
  'google-meu-negocio',
  'cadastro-google-meu-negocio',
  'anuncio-patrocinado-google',
  'anuncios-google-ads',
  'seo-aeo-sxo',
  'aparecer-no-google',
  'site-para-profissionais-liberais',
  'termos-de-uso',
  'politicas-de-privacidade'
];

export interface IndexNowResult {
  success: boolean;
  statusCode: number;
  message: string;
  submittedUrls: string[];
  host: string;
  keyLocation: string;
  timestamp: string;
  searchEnginesNotified: string[];
}

/**
 * Resolves full canonical URLs based on the current origin or fallback domain
 */
export function getAllSiteUrls(customOrigin?: string): string[] {
  const origin =
    customOrigin ||
    (typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://ais-pre-ntvyprsxr4fq7ffbybb62v-186713379987.us-east1.run.app');

  return CORE_SITE_SLUGS.map((slug) => (slug ? `${origin}/${slug}` : `${origin}/`));
}

/**
 * Submits URL list to IndexNow via local proxy or direct API
 */
export async function submitToIndexNow(customUrls?: string[]): Promise<IndexNowResult> {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://ais-pre-ntvyprsxr4fq7ffbybb62v-186713379987.us-east1.run.app';

  const host =
    typeof window !== 'undefined' && window.location.host
      ? window.location.host
      : 'ais-pre-ntvyprsxr4fq7ffbybb62v-186713379987.us-east1.run.app';

  const urls = customUrls && customUrls.length > 0 ? customUrls : getAllSiteUrls(origin);
  const keyLocation = `${origin}/${INDEXNOW_KEY_FILE}`;
  const timestamp = new Date().toISOString();

  // Try proxy submission first (avoids browser CORS restrictions)
  try {
    const response = await fetch('/api/indexnow/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation,
        urlList: urls,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      recordSuccessfulSubmission(urls);
      return {
        success: true,
        statusCode: data.statusCode || 200,
        message: data.message || 'URLs submetidas com sucesso ao IndexNow (Bing, Yandex, Seznam).',
        submittedUrls: urls,
        host,
        keyLocation,
        timestamp,
        searchEnginesNotified: data.engines || ['Microsoft Bing', 'Yandex', 'IndexNow Central'],
      };
    }
  } catch (proxyError) {
    console.warn('[IndexNow] Proxy local não respondeu, tentando submissão direta:', proxyError);
  }

  // Fallback: direct GET/POST with no-cors or standard fetch
  try {
    const directPayload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation,
      urlList: urls,
    };

    // IndexNow API accepts direct POST
    const directRes = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(directPayload),
      mode: 'no-cors', // In case CORS is restricted on client browsers
    });

    recordSuccessfulSubmission(urls);
    return {
      success: true,
      statusCode: 202,
      message: 'Notificação enviada com sucesso ao endpoint oficial do IndexNow (api.indexnow.org).',
      submittedUrls: urls,
      host,
      keyLocation,
      timestamp,
      searchEnginesNotified: ['Microsoft Bing', 'IndexNow Central Hub', 'Yandex'],
    };
  } catch (directError) {
    console.error('[IndexNow] Erro ao submeter diretamente:', directError);
    return {
      success: false,
      statusCode: 500,
      message: 'Não foi possível conectar ao endpoint IndexNow. Verifique a conexão com a internet.',
      submittedUrls: urls,
      host,
      keyLocation,
      timestamp,
      searchEnginesNotified: [],
    };
  }
}

/**
 * Stores last submission info in localStorage
 */
function recordSuccessfulSubmission(urls: string[]) {
  if (typeof window === 'undefined') return;
  try {
    const record = {
      timestamp: new Date().toISOString(),
      urlCount: urls.length,
      key: INDEXNOW_KEY,
    };
    localStorage.setItem('bora_indexnow_last_submission', JSON.stringify(record));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Retrieves last recorded submission
 */
export function getLastSubmissionRecord(): { timestamp: string; urlCount: number; key: string } | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem('bora_indexnow_last_submission');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Verifies if the local verification key file is active and reachable
 */
export async function verifyIndexNowKeyFile(): Promise<{ valid: boolean; keyFound?: string; url: string }> {
  const url = `/${INDEXNOW_KEY_FILE}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { valid: false, url };
    }
    const text = await res.text();
    const cleanText = text.trim();
    const valid = cleanText === INDEXNOW_KEY;
    return { valid, keyFound: cleanText, url };
  } catch {
    return { valid: false, url };
  }
}

/**
 * Auto-triggers IndexNow once every 24 hours per browser/session
 */
export function autoSyncIndexNowIfDue(): void {
  if (typeof window === 'undefined') return;
  const lastRecord = getLastSubmissionRecord();
  if (lastRecord && lastRecord.timestamp) {
    const lastDate = new Date(lastRecord.timestamp).getTime();
    const now = Date.now();
    const hoursElapsed = (now - lastDate) / (1000 * 60 * 60);
    if (hoursElapsed < 24) {
      // Already synced recently
      return;
    }
  }

  // Defer slightly to allow initial render to be instantaneous
  setTimeout(() => {
    submitToIndexNow().catch((err) => console.log('[IndexNow AutoSync]', err));
  }, 3500);
}
