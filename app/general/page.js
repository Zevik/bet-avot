export default function GeneralPage() {
  return (
    <div className="page">
      <h1>כללי</h1>
      <p className="muted">מרכז ניהול הגדרות כלליות, מסמכים ותבניות.</p>

      <div className="grid cols-3">
        <div className="section-card">
          <h3>מסמכים</h3>
          <p className="muted">ניהול נהלים, טפסים ותבניות.</p>
          <div className="quick-actions">
            <button className="primary">העלה מסמך</button>
            <button className="ghost">צפה בארכיון</button>
          </div>
        </div>
        <div className="section-card">
          <h3>התראות</h3>
          <p className="muted">הגדרת ערוצי התראה: בממשק, אימייל, SMS.</p>
          <div className="chips">
            <span className="chip">התראות מערכת</span>
            <span className="chip">התראות זמן</span>
            <span className="chip">התראות רפואיות</span>
          </div>
        </div>
        <div className="section-card">
          <h3>גיבוי</h3>
          <p className="muted">חיבור ל-Google Drive וגיבוי אוטומטי.</p>
          <div className="quick-actions">
            <button className="primary">חיבור ל-Google</button>
            <button className="ghost">הפעל גיבוי</button>
          </div>
        </div>
        <div className="section-card">
          <h3>תאימות ורגולציה</h3>
          <p className="muted">שמירה למשך 7 שנים, הצפנה ו-Audit trail מלא לפי האפיון.</p>
          <div className="chips">
            <span className="chip">HIPAA / משרד הבריאות</span>
            <span className="chip">GDPR</span>
            <span className="chip">Privacy by Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}
