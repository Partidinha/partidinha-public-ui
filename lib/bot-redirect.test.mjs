import test from "node:test";
import assert from "node:assert/strict";
import {
  extractTrackingParams,
  getWhatsAppRedirectUrl,
  WHATSAPP_BOT_URL,
} from "./bot-redirect.mjs";

test("getWhatsAppRedirectUrl returns standard WHATSAPP_BOT_URL", () => {
  const url = getWhatsAppRedirectUrl();
  assert.equal(url, WHATSAPP_BOT_URL);
  assert.match(url, /phone=556393049388/);
  assert.match(url, /text=Quero\+usar\+o\+Partidinha\+no\+meu\+grupo/);
});

test("extractTrackingParams extracts UTM and campaign parameters correctly", () => {
  const searchParams = new URLSearchParams(
    "utm_source=instagram&utm_medium=bio&utm_campaign=peladas_sp&utm_content=button&utm_term=futebol&ref=ad1"
  );
  const result = extractTrackingParams(searchParams);

  assert.deepEqual(result, {
    utm_source: "instagram",
    utm_medium: "bio",
    utm_campaign: "peladas_sp",
    utm_content: "button",
    utm_term: "futebol",
    ref: "ad1",
  });
});

test("extractTrackingParams ignores non-tracking parameters and empty values", () => {
  const searchParams = new URLSearchParams("random=123&utm_source=google&utm_campaign=");
  const result = extractTrackingParams(searchParams);

  assert.deepEqual(result, {
    utm_source: "google",
  });
});

test("extractTrackingParams handles string query or undefined gracefully", () => {
  assert.deepEqual(extractTrackingParams("?utm_source=twitter"), {
    utm_source: "twitter",
  });
  assert.deepEqual(extractTrackingParams(""), {});
  assert.deepEqual(extractTrackingParams(undefined), {});
});
