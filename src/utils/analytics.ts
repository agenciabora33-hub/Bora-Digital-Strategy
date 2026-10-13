/**
 * Google Analytics 4 (gtag.js) utility
 * Measurement ID: G-G0VHDNNSB1
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-G0VHDNNSB1';

/**
 * Dispatches an SPA page view to Google Analytics 4
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
}

/**
 * Dispatches a custom GA4 conversion or interaction event
 */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Tracks WhatsApp lead engagement
 */
export function trackWhatsAppConversion(source: string, service?: string) {
  trackEvent('whatsapp_click', 'lead_generation', `${source}${service ? ` - ${service}` : ''}`);
}
