import { useState, useEffect } from "react";
const SCORES = { gemini: { name: "Gemini Pro 3", total: 62.5, verdict: "YES", color: "#059669", sections: { clinical: 10, safety: 9, operational: 9, regulatory: 8, integration: 9, business: 8, team: 9.5 }}, grok: { name: "Grok 4.1 Fast", total: 62, verdict: "YES", color: "#059669", sections: { clinical: 9, safety: 10, operational: 9, regulatory: 8, integration: 9, business: 8, team: 9 }}, gpt: { name: "GPT 5.2 (Thinking)", total: 47, verdict: "YES*", color: "#B45309", sections: { clinical: 8, safety: 7, operational: 7, regulatory: 6, integration: 6, business: 6, team: 7 }}, opus: { name: "Opus 4.6", total: "~56", verdict: "YES", color: "#059669", sections: { clinical: null, safety: 9.5, operational: 9, regulatory: 8, integration: null, business: null, team: null }}, };
const V1_SCORES = { gemini: 48, grok: 52, gpt: 39, opus: 49 };
const ITEMS = [
  { id: "A1", finding: "Safety flag accuracy target should be 99-100%, not 95%", models: ["gemini"], category: "safety", priority: "HIGH", status: "ADDRESSED", resolution: "Update O8 endpoint target from >95% to >99% for allergy/interaction flags. Recommendation accuracy stays >90%.", phase: "Phase 1", effort: "5 min", doc: "O8" },
  { id: "A2", finding: "Safety case document needed: known hazards, mitigations, residual risk", models: ["gpt", "opus"], category: "safety", priority: "CRITICAL", status: "ADDRESSED", resolution: "S2 Failure Mode Safety Case completed this session. 7 guardrails mapped, system-level failures, Maverick review, defense-in-depth.", phase: "Phase 1", effort: "Done", doc: "S2" },
  { id: "A3", finding: "Interaction screener not specified — which database, severity classification", models: ["gpt", "grok"], category: "safety", priority: "HIGH", status: "ADDRESSED", resolution: "S3 Interaction Severity Grading v1 completed this session. HARD STOP / WARNING / INFO tiers, QTc stacking, 21 flagship pairs.", phase: "Phase 2", effort: "Done", doc: "S3" },
  { id: "A4", finding: "Physician override logging needed", models: ["grok", "opus"], category: "safety", priority: "HIGH", status: "ADDRESSED", resolution: "S1 Physician Override Logging completed this session. Option B side-by-side, 3 new audit tables, zero-burden design.", phase: "Phase 2", effort: "Done", doc: "S1" },
  { id: "A5", finding: "Maverick model should be identified", models: ["opus", "gpt"], category: "safety", priority: "HIGH", status: "ADDRESSED", resolution: "OnePager v4 and O7 v5 now explicitly name Maverick as Opus 4.6 with adversarial prompts.", phase: "Phase 1", effort: "Done", doc: "OnePager v4" },
  { id: "A6", finding: "Primary LLM model should be identified", models: ["opus"], category: "safety", priority: "HIGH", status: "ADDRESSED", resolution: "OnePager v4 and O7 v5 name Claude Sonnet 4.5 as primary engine, architecture noted as model-agnostic.", phase: "Phase 1", effort: "Done", doc: "OnePager v4" },
  { id: "A7", finding: "Data flow diagram needed", models: ["gpt", "opus"], category: "operational", priority: "HIGH", status: "ADDRESSED", resolution: "O7 v5 completed this session. Corporate white, glassmorphism, 'No PHI by Design' framing.", phase: "Phase 1", effort: "Done", doc: "O7 v5" },
  { id: "A8", finding: "BAA / HIPAA path unclear", models: ["opus", "gpt"], category: "regulatory", priority: "HIGH", status: "ADDRESSED", resolution: "Reframed: Phase 1 = No PHI by design (no BAA needed). Phase 2+ = AWS Bedrock with signed BAA. In OnePager v4 + O7 v5.", phase: "Phase 1", effort: "Done", doc: "OnePager v4" },
  { id: "A9", finding: "Maverick independence questionable if same provider", models: ["opus"], category: "safety", priority: "MEDIUM", status: "ADDRESSED", resolution: "Cross-provider review (non-Anthropic model) documented on Phase 3 roadmap in OnePager v4. Current: different model family (Opus vs Sonnet), adversarial prompts.", phase: "Phase 3", effort: "Done", doc: "OnePager v4" },
  { id: "A10", finding: "Confidence calibration and net benefit metrics needed", models: ["grok", "gpt"], category: "business", priority: "HIGH", status: "ADDRESSED", resolution: "Validation Metrics Queue created: confidence calibration rate, net clinical benefit, temporal validation split. Queued for O8 v2 and OnePager v5.", phase: "Phase 2", effort: "Done", doc: "Metrics Queue" },
  { id: "A11", finding: "Contractual data retention unclear", models: ["opus"], category: "regulatory", priority: "HIGH", status: "ADDRESSED", resolution: "OnePager v4: 'Contractual 7-day auto-deletion, zero training on SeaScope data.' O7 v5: full data protection strip.", phase: "Phase 1", effort: "Done", doc: "OnePager v4" },
  { id: "N1", finding: "Confabulation definition too narrow — must include invented diagnoses and guideline citations, not just lab values", models: ["gpt"], category: "safety", priority: "HIGH", status: "ADDRESSED", resolution: "5-type confabulation taxonomy added to S2 v2 (full-page table) and OnePager v5 (pilot metrics + safety pipeline). Types: fabricated labs, phantom drugs, invented diagnoses, hallucinated guidelines, fabricated clinical details. Each tracked independently with detection method specified.", phase: "Phase 1", effort: "Done", doc: "S2 v2 + OnePager v5" },
  { id: "N2", finding: "Product 'Indications / Contraindications / Not For Use' section needed", models: ["gpt"], category: "regulatory", priority: "HIGH", status: "ADDRESSED", resolution: "N2 Intended Use Boundaries v1.2: 16 supported domains (added Tropical & Travel Medicine), 9 excluded domains (added mass casualty, telehealth integration), 9 safety boundaries (added home med interactions, unrecorded medications). Maritime-adapted sepsis bundle. REFUSES/LIMITS framework scored 10/10 by simulated CMO.", phase: "Phase 2", effort: "Done", doc: "N2 v1.2" },
  { id: "N3", finding: "Case vignettes showing actual outputs needed", models: ["gpt", "opus"], category: "clinical", priority: "HIGH", status: "BLOCKED", resolution: "Blocked by 100-case pipeline completion. When ready: select 3-5 flagship cases showing output, safety catches, and a trapped hallucination being blocked.", phase: "Phase 2", effort: "2 hr", doc: "Appendix / Demo Packet" },
  { id: "N4", finding: "Which clinical practice guidelines underpin protocols?", models: ["grok", "gpt"], category: "clinical", priority: "MEDIUM", status: "ADDRESSED", resolution: "16 CPG sources added to OnePager v5 (AHA, APA, IDSA, WHO, GINA, SSC, WMS, IMO, ABMM, AGS Beers, FDA/DailyMed, Lexicomp). 7 explicit exclusions documented (neonatal, ventilator, complex tox, obstetric, complex anticoag, radiation, dental). Full table ready for CDS Development Process doc.", phase: "Phase 2", effort: "Done", doc: "OnePager v5 + QuickWins doc" },
  { id: "N5", finding: "Pricing / ROI model missing", models: ["grok", "gpt"], category: "business", priority: "MEDIUM", status: "DEFER", resolution: "Pricing exists in Post-Gionis Action Plan ($1K-1.5K/ship/month). Not appropriate for pre-pilot one-pager. Prepare for Tarling call as verbal talking point, not written commitment.", phase: "Post-pilot", effort: "N/A", doc: "Verbal prep" },
  { id: "N6", finding: "Device/bandwidth minimum specifications", models: ["grok", "gpt"], category: "operational", priority: "MEDIUM", status: "ADDRESSED", resolution: "Pilot Proposal v1 includes full Technical Requirements section: device specs (iPad/laptop/desktop), browser support (Chrome 90+/Safari 15+/Edge 90+), minimum 50kbps bandwidth, PWA offline caching ~50MB, ship IT requirements (firewall whitelist only), 3 connectivity modes documented.", phase: "Phase 2", effort: "Done", doc: "Pilot Proposal v1" },
  { id: "N7", finding: "GDPR / EU data residency for European passengers", models: ["opus", "gpt"], category: "regulatory", priority: "MEDIUM", status: "DEFER", resolution: "Phase 1 pilot uses de-identified data only = GDPR not triggered. For fleet deployment: EU-hosted option via Bedrock eu-west region. Add to P3.1.", phase: "Phase 3", effort: "Legal", doc: "P3.1" },
  { id: "N8", finding: "Security posture: SOC2, pen testing, encryption standards", models: ["gpt"], category: "operational", priority: "MEDIUM", status: "DEFER", resolution: "Pre-pilot: not expected for shadow mode. Pre-fleet: SOC2 Type I target. Add to P3.1 Technical Hardening roadmap. Encryption: TLS 1.3 in transit, AES-256 at rest.", phase: "Phase 3", effort: "$$", doc: "P3.1" },
  { id: "N9", finding: "Deployment/support model: who supports 90 ships across time zones?", models: ["gpt"], category: "operational", priority: "LOW", status: "DEFER", resolution: "Not relevant for 1-2 ship shadow pilot. Fleet support model designed in Phase 4. Acknowledge in roadmap.", phase: "Phase 4", effort: "Future", doc: "P4.1" },
  { id: "N10", finding: "Latency budget breakdown: where is the <60s spent?", models: ["opus"], category: "operational", priority: "MEDIUM", status: "BLOCKED", resolution: "Blocked by 100-case pipeline. When results come in: break down avg time by stage (safety layer, API call, post-processing, Maverick). Add to validation report.", phase: "Phase 2", effort: "1 hr", doc: "Validation report" },
  { id: "N11", finding: "Maverick disagreement rate from testing", models: ["opus"], category: "safety", priority: "MEDIUM", status: "BLOCKED", resolution: "Blocked by 100-case pipeline. Report: disagreement rate, severity distribution, resolution outcomes. Add to validation report.", phase: "Phase 2", effort: "1 hr", doc: "Validation report" },
  { id: "N12", finding: "Absolutes are dangerous: 'designed to prevent' → 'designed to reduce risk by flagging'", models: ["gpt"], category: "clinical", priority: "MEDIUM", status: "ADDRESSED", resolution: "6 language changes applied to OnePager v5: 3x 'designed to prevent' → 'flag and significantly reduce the risk of', safety flag >95% → >99%, confabulation metric expanded, 50+ languages specified with WHO INN ontology.", phase: "Phase 1", effort: "Done", doc: "OnePager v5" },
  { id: "N13", finding: "'50+ languages' allergy detection needs ontology/validation detail", models: ["gpt", "opus"], category: "safety", priority: "MEDIUM", status: "ADDRESSED", resolution: "OnePager v5 updated: 'Alias-mapped drug name ontology supporting 50+ languages, validated against WHO INN nomenclature and regional brand name databases.' Applied in N12 language audit.", phase: "Phase 2", effort: "Done", doc: "OnePager v5" },
  { id: "N14", finding: "Pilot governance: who reviews outputs, how updates frozen during pilot", models: ["gpt"], category: "operational", priority: "HIGH", status: "ADDRESSED", resolution: "Pilot Proposal v1 includes full governance section: oversight structure (PI, advisory, physicians, fleet sponsor), version freeze during pilot, 5 halt criteria with severity-graded triggers and actions.", phase: "Phase 2", effort: "Done", doc: "Pilot Proposal v1" },
  { id: "N15", finding: "Data deletion procedures upon contract termination", models: ["opus"], category: "regulatory", priority: "LOW", status: "ADDRESSED", resolution: "Data Protection Addendum §3: 24-month max retention, Client can request deletion anytime, 30-day completion + Certificate of Destruction, aggregated metrics survive for regulatory use.", phase: "Phase 2", effort: "Done", doc: "DPA" },
  { id: "N16", finding: "Incident response plan for data breaches", models: ["opus"], category: "regulatory", priority: "LOW", status: "ADDRESSED", resolution: "Data Protection Addendum §5: breach definition, 24-hour notification to DPO, triggers Halt #6, root cause analysis, regulatory cooperation. Liability Acknowledgment §4: subpoena/discovery protection + QI privilege framing.", phase: "Phase 3", effort: "Done", doc: "DPA + Liability" },
  { id: "N17", finding: "Shadow pilot: data entry during shift vs after? Memory bias vs workflow disruption", models: ["gemini"], category: "operational", priority: "MEDIUM", status: "ADDRESSED", resolution: "Pilot Proposal v1: data entry occurs during shift, after clinical decision (not retrospective). Pros/cons table documents rationale. 4-step entry workflow defined with timing (3-5 min total per encounter). Memory bias mitigated by immediate entry; workflow burden mitigated by S1 auto-populate design.", phase: "Phase 2", effort: "Done", doc: "Pilot Proposal v1" },
  { id: "N18", finding: "Formulary management workflow and governance for fleet variation", models: ["gpt", "grok"], category: "integration", priority: "MEDIUM", status: "DEFER", resolution: "Phase 1: single validated formulary. Phase 4: per-ship formulary profiles with change-control workflow. Already on roadmap.", phase: "Phase 4", effort: "Future", doc: "P4.1" },
  { id: "T1", finding: "Data Protection Addendum: de-ID methodology, data ownership, retention, deletion, breach notification", models: ["opus"], category: "regulatory", priority: "CRITICAL", status: "ADDRESSED", resolution: "DPA v1.0 built: HIPAA Safe Harbor de-ID, 18-identifier table, 24-month retention, Client deletion rights + Certificate of Destruction, PHI exclusion architecture, 24-hour breach notification, automated PHI scanning. Florida governing law. Dual signature blocks.", phase: "Pre-pilot", effort: "Done", doc: "DPA" },
  { id: "T2", finding: "Liability Acknowledgment: no treatment decisions, indemnification, termination without cause", models: ["opus"], category: "regulatory", priority: "CRITICAL", status: "ADDRESSED", resolution: "One-page template built: shadow mode confirmation, unconscious influence clause, Provider indemnification (platform defects + data protection), Client absolute termination right, subpoena/QI privilege protection, liability cap (amount needs counsel). Flagged for lawyer review.", phase: "Pre-pilot", effort: "Done (needs lawyer)", doc: "Liability Ack" },
  { id: "T3", finding: "Case Selection Protocol: which encounters to enter, acuity threshold", models: ["opus"], category: "operational", priority: "HIGH", status: "ADDRESSED", resolution: "Pilot v2 Addendum: ENTER (medication cases, clinical decisions, interesting cases) / SKIP (refills, seasickness, sunburn, admin) / PHYSICIAN DISCRETION (borderline). Domain coverage target ≥8/16, no single domain >30%. Day 15 midpoint check.", phase: "Pre-pilot", effort: "Done", doc: "Pilot v2 Addendum" },
  { id: "T4", finding: "Halt Criterion #6: Data Privacy Breach", models: ["opus"], category: "safety", priority: "CRITICAL", status: "ADDRESSED", resolution: "Added to Pilot v2 Addendum: PHI found anywhere = immediate halt. DPO notified 24hr. Records suppressed. Root cause analysis. Resume only after DPO audit + written Client approval.", phase: "Pre-pilot", effort: "Done", doc: "Pilot v2 Addendum" },
  { id: "T5", finding: "Physician selection: range of experience, nationalities, tech comfort, no self-selection", models: ["opus"], category: "operational", priority: "HIGH", status: "DEFER", resolution: "Client action item. Criteria documented in Pilot v2 Addendum §P1: range of experience/nationality/tech comfort, no self-selection, include skeptics. Client selects in consultation with PI.", phase: "Pre-pilot", effort: "Client action", doc: "Pilot v2 Addendum" },
  { id: "T6", finding: "Post-Pilot Decision Framework: define success/retest/decline thresholds before Day 1", models: ["opus"], category: "business", priority: "CRITICAL", status: "ADDRESSED", resolution: "Three-outcome framework with concrete thresholds: Fleet Deploy (≥75% agreement + ≥99% safety + 0% confab + ≥7 NPS + 0 halts + ≥50 cases + ≥8 domains, ALL met), Second Pilot (60-74% agreement OR other partial metrics, ANY triggers), Decline (<60% agreement OR <95% safety OR any confab OR critical halt OR NPS<5, ANY triggers).", phase: "Pre-pilot", effort: "Done", doc: "Pilot v2 Addendum" },
  { id: "T7", finding: "Publication rights: Carnival credited, review rights before submission, non-negotiable", models: ["opus"], category: "regulatory", priority: "HIGH", status: "ADDRESSED", resolution: "DPA §6: Client credited by name, 30-day review period, ICMJE authorship (CMO offered co-authorship), no marketing use without written consent. Publication cannot be unreasonably withheld for scientifically accurate findings.", phase: "Pre-pilot", effort: "Done", doc: "DPA §6" },
];
const CATEGORIES = ["All", "safety", "clinical", "operational", "regulatory", "business", "integration"];
const STATUSES = ["All", "TODO", "ADDRESSED", "BLOCKED", "DEFER"];
const PRIORITIES = ["All", "CRITICAL", "HIGH", "MEDIUM", "LOW"];
export default function EvalTracker() {
  const [catFilter, setCatFilter] = useState("All");
  const [statFilter, setStatFilter] = useState("All");
  const [prioFilter, setPrioFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [tab, setTab] = useState("items");
  const filtered = ITEMS.filter(i =>
    (catFilter === "All" || i.category === catFilter) &&
    (statFilter === "All" || i.status === statFilter) &&
    (prioFilter === "All" || i.priority === prioFilter)
  );
  const counts = { TODO: 0, ADDRESSED: 0, BLOCKED: 0, DEFER: 0 };
  ITEMS.forEach(i => counts[i.status]++);
  const modelKeys = ["gemini", "grok", "gpt", "opus"];
  const sectionLabels = { clinical: "Clinical Credibility", safety: "Patient Safety", operational: "Operational Reality", regulatory: "Regulatory & Liability", integration: "Integration & Scalability", business: "Business Case", team: "Team & Trust" };
  const sectionKeys = Object.keys(sectionLabels);
  const statusColors = { TODO: "#DC2626", ADDRESSED: "#059669", BLOCKED: "#B45309", DEFER: "#6366F1" };
  const statusBg = { TODO: "#FEE2E2", ADDRESSED: "#D1FAE5", BLOCKED: "#FEF3C7", DEFER: "#EDE9FE" };
  const prioColors = { CRITICAL: "#DC2626", HIGH: "#EA580C", MEDIUM: "#B45309", LOW: "#6366F1" };
  const catIcons = { safety: "\u{1F6E1}", clinical: "\u{1FA7A}", operational: "\u2699\uFE0F", regulatory: "\u2696\uFE0F", business: "\u{1F4B0}", integration: "\u{1F517}" };
  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#0B1120", minHeight: "100vh", color: "#E2E8F0", padding: "24px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 50%, #134E4A 100%)", borderRadius: "16px", padding: "28px 32px", marginBottom: "24px", boxShadow: "0 8px 32px rgba(13,148,136,0.3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "26px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>SeaScope CDS — Adversarial Evaluation v2</h1>
            <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#99F6E4", opacity: 0.9 }}>4-Model Simulated CMO Review • OnePager v4 + O7 v5 • February 22, 2026</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {modelKeys.map(k => (
              <div key={k} style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", borderRadius: "10px", padding: "10px 14px", minWidth: "130px", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div style={{ fontSize: "11px", color: "#99F6E4", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{SCORES[k].name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginTop: "4px" }}>
                  <span style={{ fontSize: "24px", fontWeight: 700, color: "white" }}>{SCORES[k].total}</span>
                  <span style={{ fontSize: "12px", color: "#94A3B8" }}>/70</span>
                  <span style={{ fontSize: "10px", color: "#94A3B8", marginLeft: "2px" }}>v1: {V1_SCORES[k]}</span>
                </div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: SCORES[k].color === "#059669" ? "#6EE7B7" : "#FBBF24", marginTop: "2px" }}>{SCORES[k].verdict}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Score improvement bar */}
        <div style={{ marginTop: "16px", display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: "#99F6E4" }}>v1 avg: 47.0</span>
          <div style={{ flex: 1, height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.15)", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, height: "6px", borderRadius: "3px", background: "linear-gradient(90deg, #6EE7B7, #2DD4BF, #14B8A6)", width: `${((64 / 70) * 100)}%`, transition: "width 1s" }} />
          </div>
          <span style={{ fontSize: "12px", color: "#6EE7B7", fontWeight: 600 }}>v3: 64/70 (+17 from v1)</span>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
        {[["items", "Action Items"], ["scores", "Score Matrix"], ["summary", "Key Insights"]].map(([key, label]) => (
          <button key={key} onClick={() => setTab(key)} style={{ padding: "10px 20px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600, background: tab === key ? "#0D9488" : "rgba(255,255,255,0.05)", color: tab === key ? "white" : "#94A3B8", transition: "all 0.2s" }}>{label}</button>
        ))}
      </div>
      {/* STATUS SUMMARY CARDS */}
      {tab === "items" && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
            {Object.entries(counts).map(([s, c]) => (
              <div key={s} onClick={() => setStatFilter(statFilter === s ? "All" : s)} style={{ background: statFilter === s ? statusBg[s] + "22" : "rgba(255,255,255,0.03)", border: `1px solid ${statFilter === s ? statusColors[s] + "66" : "rgba(255,255,255,0.08)"}`, borderRadius: "10px", padding: "14px 16px", cursor: "pointer", transition: "all 0.2s" }}>
                <div style={{ fontSize: "28px", fontWeight: 700, color: statusColors[s] }}>{c}</div>
                <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s}</div>
              </div>
            ))}
          </div>
          {/* FILTERS */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "#64748B", alignSelf: "center", marginRight: "4px" }}>Filter:</span>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCatFilter(c)} style={{ padding: "5px 12px", borderRadius: "6px", border: `1px solid ${catFilter === c ? "#0D9488" : "rgba(255,255,255,0.1)"}`, background: catFilter === c ? "#0D9488" + "22" : "transparent", color: catFilter === c ? "#2DD4BF" : "#94A3B8", fontSize: "12px", cursor: "pointer", fontWeight: 500 }}>
                {c === "All" ? "All Categories" : `${catIcons[c] || ""} ${c}`}
              </button>
            ))}
            <span style={{ color: "#334155", margin: "0 4px" }}>|</span>
            {PRIORITIES.map(p => (
              <button key={p} onClick={() => setPrioFilter(p)} style={{ padding: "5px 12px", borderRadius: "6px", border: `1px solid ${prioFilter === p ? prioColors[p] || "#0D9488" : "rgba(255,255,255,0.1)"}`, background: prioFilter === p ? (prioColors[p] || "#0D9488") + "22" : "transparent", color: prioFilter === p ? prioColors[p] || "#2DD4BF" : "#94A3B8", fontSize: "12px", cursor: "pointer", fontWeight: 500 }}>
                {p === "All" ? "All Priorities" : p}
              </button>
            ))}
          </div>
          {/* ITEMS LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {filtered.map(item => {
              const expanded = expandedId === item.id;
              return (
                <div key={item.id} onClick={() => setExpandedId(expanded ? null : item.id)} style={{ background: expanded ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${expanded ? statusColors[item.status] + "44" : "rgba(255,255,255,0.06)"}`, borderRadius: "10px", padding: "12px 16px", cursor: "pointer", transition: "all 0.2s", borderLeft: `3px solid ${statusColors[item.status]}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748B", minWidth: "28px" }}>{item.id}</span>
                      <span style={{ fontSize: "10px", background: statusBg[item.status], color: statusColors[item.status], padding: "2px 8px", borderRadius: "4px", fontWeight: 600, minWidth: "70px", textAlign: "center" }}>{item.status}</span>
                      <span style={{ fontSize: "10px", color: prioColors[item.priority], fontWeight: 600, minWidth: "55px" }}>{item.priority}</span>
                      <span style={{ fontSize: "13px", color: "#E2E8F0", flex: 1 }}>{item.finding}</span>
                    </div>
                    <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                      {item.models.map(m => (
                        <span key={m} style={{ fontSize: "9px", background: "rgba(255,255,255,0.08)", padding: "2px 6px", borderRadius: "3px", color: "#94A3B8" }}>{m.slice(0, 3).toUpperCase()}</span>
                      ))}
                    </div>
                  </div>
                  {expanded && (
                    <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "12px" }}>
                        <div>
                          <div style={{ color: "#64748B", marginBottom: "4px", fontWeight: 600, textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.5px" }}>Resolution</div>
                          <div style={{ color: "#CBD5E1", lineHeight: 1.5 }}>{item.resolution}</div>
                        </div>
                        <div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                            <div>
                              <div style={{ color: "#64748B", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Phase</div>
                              <div style={{ color: "#2DD4BF", marginTop: "2px" }}>{item.phase}</div>
                            </div>
                            <div>
                              <div style={{ color: "#64748B", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Effort</div>
                              <div style={{ color: "#CBD5E1", marginTop: "2px" }}>{item.effort}</div>
                            </div>
                            <div>
                              <div style={{ color: "#64748B", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Document</div>
                              <div style={{ color: "#CBD5E1", marginTop: "2px" }}>{item.doc}</div>
                            </div>
                            <div>
                              <div style={{ color: "#64748B", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Category</div>
                              <div style={{ color: "#CBD5E1", marginTop: "2px" }}>{catIcons[item.category]} {item.category}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: "12px", fontSize: "12px", color: "#64748B", textAlign: "right" }}>
            Showing {filtered.length} of {ITEMS.length} items
          </div>
        </>
      )}
      {/* SCORE MATRIX TAB */}
      {tab === "scores" && (
        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.05)" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#94A3B8", fontWeight: 600, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Category</th>
                {modelKeys.map(k => (
                  <th key={k} style={{ padding: "12px 8px", textAlign: "center", color: "#94A3B8", fontWeight: 600, fontSize: "11px" }}>{SCORES[k].name}</th>
                ))}
                <th style={{ padding: "12px 8px", textAlign: "center", color: "#94A3B8", fontWeight: 600, fontSize: "11px" }}>AVG</th>
              </tr>
            </thead>
            <tbody>
              {sectionKeys.map(sk => {
                const vals = modelKeys.map(k => SCORES[k].sections[sk]).filter(v => v !== null);
                const avg = vals.length > 0 ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : "—";
                return (
                  <tr key={sk} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <td style={{ padding: "10px 16px", color: "#E2E8F0", fontWeight: 500 }}>{sectionLabels[sk]}</td>
                    {modelKeys.map(k => {
                      const v = SCORES[k].sections[sk];
                      const color = v === null ? "#475569" : v >= 9 ? "#6EE7B7" : v >= 7 ? "#FBBF24" : "#F87171";
                      return (
                        <td key={k} style={{ padding: "10px 8px", textAlign: "center" }}>
                          <span style={{ color, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{v !== null ? v : "—"}</span>
                        </td>
                      );
                    })}
                    <td style={{ padding: "10px 8px", textAlign: "center", color: "#2DD4BF", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{avg}</td>
                  </tr>
                );
              })}
              <tr style={{ borderTop: "2px solid rgba(255,255,255,0.15)", background: "rgba(13,148,136,0.1)" }}>
                <td style={{ padding: "12px 16px", color: "#2DD4BF", fontWeight: 700 }}>TOTAL</td>
                {modelKeys.map(k => (
                  <td key={k} style={{ padding: "12px 8px", textAlign: "center", color: "white", fontWeight: 700, fontSize: "16px", fontFamily: "'JetBrains Mono', monospace" }}>{SCORES[k].total}</td>
                ))}
                <td style={{ padding: "12px 8px", textAlign: "center", color: "#6EE7B7", fontWeight: 700, fontSize: "16px", fontFamily: "'JetBrains Mono', monospace" }}>58.4 → 64</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* KEY INSIGHTS TAB */}
      {tab === "summary" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Unanimous strengths */}
          <div style={{ background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)", borderRadius: "12px", padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px", color: "#6EE7B7", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Strengths — v2 Unanimous + v3 Additions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
              {[
                '"Safety is architectural, not probabilistic" — cited by all 4 as the strongest single line',
                '"Your physicians are already using ChatGPT at 3 AM" — universally praised as the killer narrative',
                "Shadow pilot design eliminates operational risk — all 4 would approve the pilot",
                "7 deterministic guardrails architecture — universally credible",
                "Data flow diagram (O7) — Opus called it 'the document I was waiting for'",
                "REFUSES/LIMITS framework (N2) — scored 10/10: 'the most important section in the entire document'",
                "5-type confabulation taxonomy — closes GPT's 'definition game' concern",
                "Maritime-adapted sepsis bundle — 'shows exactly why generic AI fails and SeaScope doesn't'",
                "16 clinical domains with traceable CPG sources — now includes tropical medicine",
                "Pilot governance with version freeze — 'scientific integrity applied to product evaluation'",
                "Post-pilot decision framework — concrete thresholds prevent retroactive goalpost adjustment",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#059669", flexShrink: 0 }}>✓</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Remaining gaps */}
          <div style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)", borderRadius: "12px", padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px", color: "#F87171", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Remaining Gaps (6 Points to 70/70)</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
              {[
                "No live product demo yet — all evaluators want to see it work, not read about it working",
                "Liability framework needs lawyer review — template built, T2 flagged for counsel sign-off",
                "100-case pipeline results pending — case vignettes, latency budget, Maverick disagreement rate all blocked",
                "Pricing/ROI absent — acceptable for pre-pilot, needed before any contract discussion",
                "GDPR/EU data residency — not triggered for de-identified Phase 1, needed for fleet deployment",
                "Security posture (SOC2, pen testing) — not needed for shadow pilot, critical before fleet",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#DC2626", flexShrink: 0 }}>!</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Score movement */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px", color: "#2DD4BF", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Score Movement v1 → v2 → v3</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              {modelKeys.map(k => {
                const delta = typeof SCORES[k].total === "number" ? SCORES[k].total - V1_SCORES[k] : "~7";
                return (
                  <div key={k} style={{ textAlign: "center", padding: "12px", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                    <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 600 }}>{SCORES[k].name}</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                      <span style={{ fontSize: "16px", color: "#64748B" }}>{V1_SCORES[k]}</span>
                      <span style={{ color: "#0D9488" }}>→</span>
                      <span style={{ fontSize: "20px", color: "white", fontWeight: 700 }}>{SCORES[k].total}</span>
                    </div>
                    <div style={{ fontSize: "14px", color: "#6EE7B7", fontWeight: 600, marginTop: "4px" }}>+{delta}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: "16px", padding: "12px", background: "rgba(13,148,136,0.1)", borderRadius: "8px", textAlign: "center" }}>
              <span style={{ fontSize: "13px", color: "#94A3B8" }}>v3 (post N2 + Pilot Proposal feedback): </span>
              <span style={{ fontSize: "18px", color: "#6EE7B7", fontWeight: 700 }}>64/70</span>
              <span style={{ fontSize: "13px", color: "#94A3B8" }}> • Pilot approved in principle • </span>
              <span style={{ fontSize: "14px", color: "#6EE7B7", fontWeight: 700 }}>"Send me the calendar link"</span>
            </div>
          </div>
          {/* Tarling Pre-Pilot Conditions */}
          <div style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.2)", borderRadius: "12px", padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px", color: "#2DD4BF", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Tarling Pre-Pilot Conditions (7 Required Before Day 1)</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
              {[
                { id: "T1", text: "Data Protection Addendum", status: "DONE", color: "#6EE7B7" },
                { id: "T2", text: "Liability Acknowledgment (needs lawyer review)", status: "DONE*", color: "#FBBF24" },
                { id: "T3", text: "Case Selection Protocol", status: "DONE", color: "#6EE7B7" },
                { id: "T4", text: "Halt #6: Data Privacy Breach", status: "DONE", color: "#6EE7B7" },
                { id: "T5", text: "Physician Selection (Client action)", status: "CLIENT", color: "#94A3B8" },
                { id: "T6", text: "Post-Pilot Decision Framework", status: "DONE", color: "#6EE7B7" },
                { id: "T7", text: "Publication Rights", status: "DONE", color: "#6EE7B7" },
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#0D9488", width: "28px" }}>{a.id}</span>
                  <span style={{ flex: 1 }}>{a.text}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: a.color, fontWeight: 700 }}>{a.status}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "12px", padding: "8px 12px", background: "rgba(16,185,129,0.1)", borderRadius: "6px", fontSize: "12px", color: "#6EE7B7" }}>
              6/7 conditions built. T5 (physician selection) is Tarling's action item. T2 flagged for lawyer review.
            </div>
          </div>
          {/* Remaining */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px", color: "#2DD4BF", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Remaining — Blocked or Deferred</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
              {[
                { id: "N3", text: "Case vignettes showing actual outputs (BLOCKED — 100-case pipeline)", effort: "Blocked" },
                { id: "N10", text: "Latency budget breakdown by stage (BLOCKED — 100-case pipeline)", effort: "Blocked" },
                { id: "N11", text: "Maverick disagreement rate (BLOCKED — 100-case pipeline)", effort: "Blocked" },
                { id: "N5", text: "Pricing / ROI model (DEFERRED — post-pilot)", effort: "Deferred" },
                { id: "N7", text: "GDPR / EU data residency (DEFERRED — Phase 3)", effort: "Deferred" },
                { id: "N8", text: "Security posture: SOC2, pen testing (DEFERRED — Phase 3)", effort: "Deferred" },
                { id: "N9", text: "Fleet support model (DEFERRED — Phase 4)", effort: "Deferred" },
                { id: "N18", text: "Formulary management governance (DEFERRED — Phase 4)", effort: "Deferred" },
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#64748B", minWidth: "28px" }}>{a.id}</span>
                  <span style={{ flex: 1 }}>{a.text}</span>
                  <span style={{ fontSize: "11px", color: "#0D9488", fontWeight: 600 }}>{a.effort}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <div style={{ marginTop: "24px", padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center", fontSize: "11px", color: "#475569" }}>
        SeaScope CDS • Adversarial Evaluation v2 • 4 Models • {ITEMS.length} Action Items • February 22, 2026
      </div>
    </div>
  );
}