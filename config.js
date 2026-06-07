// ═══════════════════════════════════════════════
// CONFIG — קובץ הגדרות העסק
// ═══════════════════════════════════════════════
// שנה רק קובץ זה לכל לקוח חדש. אל תגע ב-index.html

const APP_CONFIG = {

  // ── פרטי העסק ──────────────────────────────
  businessName: "שם העסק",              // שם העסק (מופיע בדף הבית)
  ownerName: "שם הבעלים",               // שם בעל העסק
  ownerTitle: "מעצב השיער",             // תפקיד
  welcomeText: "טקסט ברוכים הבאים...",  // טקסט תחת השם

  // ── שעות פתיחה ─────────────────────────────
  openHour: 10,          // שעת פתיחה
  closeHour: 20,         // שעת סגירה
  slotDuration: 20,      // אורך כל תור בדקות
  offDays: ["ב׳", "ש׳"], // ימים סגורים
  fridayClose: "15:00",  // שעת סגירה ביום שישי

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
