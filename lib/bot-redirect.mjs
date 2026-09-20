export const WHATSAPP_BOT_URL =
  "https://api.whatsapp.com/send/?phone=556393049388&text=Quero+usar+o+Partidinha+no+meu+grupo";

export const BOT_START_PATH = "/bot-start";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ref",
  "cta",
];

/**
 * Retorna a URL de destino do WhatsApp.
 */
export function getWhatsAppRedirectUrl() {
  return WHATSAPP_BOT_URL;
}

/**
 * Extrai parâmetros de rastreamento (UTMs e referências) de URLSearchParams, string de query ou URL.
 * @param {URLSearchParams | string | undefined | null} input
 * @returns {Record<string, string>}
 */
export function extractTrackingParams(input) {
  if (!input) {
    return {};
  }

  let params;
  if (typeof input === "string") {
    const queryString = input.includes("?") ? input.slice(input.indexOf("?")) : input;
    params = new URLSearchParams(queryString);
  } else if (input instanceof URLSearchParams) {
    params = input;
  } else {
    return {};
  }

  const result = {};
  for (const key of TRACKING_KEYS) {
    const val = params.get(key);
    if (val && val.trim() !== "") {
      result[key] = val.trim();
    }
  }

  return result;
}
