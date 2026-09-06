# PostHog Self-driving setup report

## Summary

PostHog Self-driving is configured for the Partidinha landing page. Session Replay, Error Tracking, and Support are enabled; health checks, error tracking, and support ticket signal sources are enabled; and two Replay Vision monitors will send corroborated, high-confidence findings to the inbox.

Fresh scout configurations are picked up within about 30 minutes. Findings will begin appearing in the [Self-driving inbox](https://us.posthog.com/project/596820/inbox) as data arrives.

## AI data processing

Approved by the wizard's organization-level gate.

## GitHub

GitHub was already connected before this setup. GitHub Issues was not selected for Self-driving intake, so no GitHub Issues responder was enabled.

## Products enabled

| Product | Result | Web integration check |
|---|---|---|
| Session Replay | enabled | `instrumentation-client.ts` initializes `posthog-js` and does not disable recording. |
| Error Tracking | enabled | `instrumentation-client.ts` has `capture_exceptions: true`. |
| Support | enabled | An inbound email, inbox, or Slack channel is still required before support tickets can arrive. |

## Signal sources

| Signal source | Action |
|---|---|
| `signals_scout` / `cross_source_issue` | Enabled by the server default; no opt-out row was created. |
| `health_checks` / `health_issue` | Enabled (source config `01a0786d-76a5-71ae-956d-d09f2a14b651`). |
| `error_tracking` / `issue_created` | Enabled (source config `01a0786d-77b3-7c1c-9292-757b4d959613`). |
| `error_tracking` / `issue_reopened` | Enabled (source config `01a0786d-7881-727a-b026-611eae7a426c`). |
| `error_tracking` / `issue_spiking` | Enabled (source config `01a0786d-786e-72a7-accd-7c34f17301ad`). |
| `conversations` / `ticket` | Enabled (source config `01a0786d-779f-7cf4-9e28-48e3c27fee3f`). |
| Session replay source row | Deliberately skipped; Replay Vision scanners are its inbox route. |
| Connected-tool responders | Deliberately skipped; no external tools were selected. |

## Connected tools

The connected-tools prompt was declined. GitHub Issues, Linear, Jira, Sentry, and Zendesk are **not used** for Self-driving intake in this configuration; no external warehouse source or responder was created.

## Scout troop

The troop is materialized and has **4 enabled scouts**. All run daily with their default emission posture.

| Enabled scout | Coverage |
|---|---|
| `general` | Cross-product patterns and surfaces without a specialist. |
| `web-analytics` | Landing-page traffic, attribution, bounce, and 404 regressions. |
| `product-analytics` | Conversion and behavioral regressions in saved product flows. |
| `health-checks` | Actionable PostHog setup and instrumentation health issues. |

The enforced budget is **100 runs/day**; **0** runs had been used today and **100** remained. The current banner says: “Scouts are in early access. Each project gets up to 100 scout runs a day. Contact team-self-driving@posthog.com if you need more.”

| Disabled scout(s) | Reason |
|---|---|
| `ai-observability` | No LLM observability evidence was found. |
| `anomaly-detection` | No established dashboard or insight baseline was found. |
| `apm` | No tracing or backend service observability evidence was found. |
| `conversations` | No active Support channel or ticket stream exists yet. |
| `csp-violations` | No PostHog CSP reporting configuration was found. |
| `customer-analytics` | No account/group analytics surface was found. |
| `data-pipelines`, `data-warehouse` | No pipeline or warehouse source was connected. |
| `error-tracking` | Covered by the enabled native Error Tracking signal source. |
| `experiments`, `feature-flags` | No active experiments or feature flags were found. |
| `inbox-validation` | Fresh setup; no completed fixes are available to validate. |
| `insight-alerts` | No configured insight-alert surface was found. |
| `logs` | No PostHog logs product evidence was found. |
| `mcp-tool-calls`, `skills-store`, `tasks` | These are not product-facing landing-page surfaces. |
| `observability-gaps` | Kept off to preserve a selective troop; health checks and the enabled specialists cover the current setup. |
| `replay-vision` | Kept off initially; the two new scanners have no observations yet. |
| `revenue-analytics` | No payment integration or revenue data was found in this repository. |
| `session-replay` | Covered by the two Replay Vision scanners below. |
| `surveys` | No survey usage was found. |
| `web-vitals` | No Core Web Vitals usage evidence was found. |

## Custom scouts

No custom scout was created: the proposed landing conversion and team-draw-demo checks were declined. The proposed checks were watchable because the code captures CTA, pricing, and team-draw events, but the enabled web and product analytics scouts provide the baseline coverage for this early landing-page setup.

If a future custom scout becomes noisy, set `emit: false` on its PostHog config to leave it running in dry-run mode without sending inbox findings.

## Replay Vision scanners

A scanner is an LLM that watches individual session recordings on a schedule and pushes confirmed defects to the inbox. These are the only components here that use Replay Vision quota. Each finding carries half weight and needs independent corroboration before it is promoted into a report.

| Brief | Status | Scanner | Scope and rationale | Sampling | Estimate |
|---|---|---|---|---:|---|
| Breakage monitor | Created | `Partidinha signup experience` | URL scope contains `/`, the landing page that presents the create-group journey and links to the companion app. It watches broken create-group links, missing pricing cards, failed team draws, and unresponsive page actions. | 0.5 | 0 monthly observations / 0 credits at creation. |
| Frustration monitor | Created | `Partidinha landing frustration` | `$rageclick` only, with no URL filter, so it independently watches visible struggle around create-group CTAs, pricing, navigation, and the team-draw demo. | 1.0 | 0 monthly observations / 0 credits at creation. |

No recordings were present during setup. Both scanners are armed and begin working automatically when browser recordings start arriving.

## Files

| File | Change |
|---|---|
| `posthog-self-driving-report.md` | Created this setup report. |

No application source files were modified.

## Follow-ups

- [ ] Connect an inbound Support channel (email, inbox, or Slack) in PostHog so the enabled support-ticket source can receive tickets.
- [ ] Generate real browser traffic and verify that Session Replay recordings arrive; the two scanners will then begin observing recordings automatically.
- [ ] Add a saved conversion flow or insight once enough CTA traffic exists, so the product analytics scout has a durable baseline.
- [ ] Revisit connected-tool responders if GitHub Issues, Linear, Jira, Sentry, or Zendesk should automatically open draft PRs for eligible records.

## What happens next

The scout coordinator picks up fresh configurations within roughly 30 minutes. Daily scout runs draw from the 100-run early-access budget, and findings cluster into reports in the [Self-driving inbox](https://us.posthog.com/project/596820/inbox). Immediately actionable reports can begin coding tasks.