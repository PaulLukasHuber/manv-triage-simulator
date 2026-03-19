/**
 * Application-wide constants.
 * Labels come from i18n – this file only holds structural/visual metadata.
 */

export const VERSION = "0.1";

/**
 * Triage category metadata.
 * `color` and `textColor` reference CSS custom properties defined in index.css.
 */
export const CATEGORIES = {
  red: {
    id: "red",
    color: "var(--color-sk1)",
    textColor: "#ffffff",
    cssClass: "category-red",
  },
  yellow: {
    id: "yellow",
    color: "var(--color-sk2)",
    textColor: "#000000",
    cssClass: "category-yellow",
  },
  white: {
    id: "white",
    color: "var(--color-white)",
    textColor: "#333333",
    border: "#cccccc",
    cssClass: "category-white",
  },
  dead: {
    id: "dead",
    color: "var(--color-dead)",
    textColor: "#ffffff",
    cssClass: "category-dead",
  },
};

/**
 * ABCDE step badge color mapping.
 * Maps badgeType from triageSteps to Tailwind-compatible styles.
 */
export const BADGE_STYLES = {
  a: { bg: "bg-[#CC0000]", text: "text-white" },
  b: { bg: "bg-[#e07000]", text: "text-white" },
  c: { bg: "bg-[#b5179e]", text: "text-white" },
  d: { bg: "bg-[#7209b7]", text: "text-white" },
  info: { bg: "bg-[#4cc9f0]", text: "text-white" },
};

/**
 * Screen identifiers used by the simulator state machine.
 */
export const SCREENS = {
  START: "start",
  SCENARIO_INTRO: "scenarioIntro",
  TRIAGE_STEP: "triageStep",
  SCENARIO_RESULT: "scenarioResult",
  SUMMARY: "summary",
};
