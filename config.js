// ═══════════════════════════════════════════════
// CONFIG — קובץ הגדרות העסק
// ═══════════════════════════════════════════════

const APP_CONFIG = {

  // ── פרטי העסק ──────────────────────────────
  businessName: "מספרת ינון",
  ownerName: "ינון אלגרסי",
  ownerTitle: "מעצב השיער",
  welcomeText: "ברוכים הבאים למספרת ינון. ינון אלגרסי ינון וצוותו דואגים לתת חוויה מקצועית ואישית עד הפרט האחרון.",

  // ── שעות פתיחה ─────────────────────────────
  openHour: 10,
  closeHour: 20,
  slotDuration: 20,
  offDays: ["ש׳"],  // שבת סגורה
  fridayClose: "15:00",   // שישי עד 15:00

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

};
