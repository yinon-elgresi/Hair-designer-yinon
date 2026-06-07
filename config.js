// ═══════════════════════════════════════════════
// CONFIG — קובץ הגדרות העסק
// ═══════════════════════════════════════════════

const APP_CONFIG = {

  // ── פרטי העסק ──────────────────────────────
  businessName: "מספרת ינון",
  ownerName: "ינון אלגרסי",
  ownerTitle: "מעצב השיער",
  welcomeText: "ברוכים הבאים למספרת ינון. ינון אלגרסי וצוותו דואגים לתת חוויה מקצועית ואישית עד הפרט האחרון.",
  address: "ששת הימים 4, קריית שמונה",

  // ── טלפון ───────────────────────────────────
  bitPhone: "0526534080",
  bitPhoneDisplay: "052-653-4080",

  // ── שעות פתיחה ─────────────────────────────
  openHour: 10,
  closeHour: 20,
  slotDuration: 20,
  offDays: ["ש׳"],       // רק שבת סגורה
  fridayClose: "15:00",  // שישי עד 15:00

  // ── Firebase ────────────────────────────────
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    vapidKey: ""
  },

  // ── OneSignal ───────────────────────────────
  oneSignal: {
    appId: "",
    safariWebId: ""
  },

  // ── כתובת האפליקציה ─────────────────────────
  appUrl: "https://yinon-elgresi.github.io/Hair-designer-yinon/",
  repoPath: "/Hair-designer-yinon",

};
