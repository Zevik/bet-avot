const professions = [
  { title: 'פיזיותרפיסט/ית 💪', focus: 'תרגילי שיקום, מניעת נפילות, הדרכת צוות ודיירים.' },
  { title: 'מרפא/ה בעיסוק 🎨', focus: 'פעילויות תפקודיות, מוטוריקה עדינה, שימור עצמאות.' },
  { title: 'קלינאי/ת תקשורת 🗣️', focus: 'בליעה, דיבור, התאמת תזונה רכה והדרכה.' },
  { title: 'תזונאי/ת 🍎', focus: 'תפריטי דיירים, מעקב משקל, התאמות רגישויות.' },
  { title: 'פסיכולוג/ית 🧠', focus: 'תמיכה רגשית, הערכות קוגניטיביות, הדרכת משפחות.' },
  { title: 'עובד/ת סוציאלי/ת 🤝', focus: 'ליווי משפחות, תיאום זכויות, תיעוד ביקורי משפחה.' },
];

export default function ProfessionalPage() {
  return (
    <div className="page">
      <h1>ממשק מקצועי</h1>
      <p className="muted">מקום אחד לכל הצוות הפארא-רפואי והנחיות טיפוליות.</p>

      <div className="grid cols-3">
        {professions.map((role) => (
          <div key={role.title} className="section-card">
            <div className="flex-between">
              <strong>{role.title}</strong>
              <button className="ghost">תיעוד חדש</button>
            </div>
            <p className="muted">{role.focus}</p>
            <div className="quick-actions" style={{ marginTop: '8px' }}>
              <button className="primary">צפה בהנחיות</button>
              <button className="ghost">הוסף הערכה</button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-card" style={{ marginTop: '16px' }}>
        <div className="section-header">
          <div>
            <h3>היסטוריית ישיבות צוות</h3>
            <p className="muted">סיכומי ישיבות, משימות והמלצות.</p>
          </div>
          <button className="ghost">הוסף סיכום</button>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="muted">13/11/2025 • ישיבה רב-תחומית</div>
            <div>דיירים שנדונו: יצחק דנינו, חנה וייס. החלטות: המשך פיזיו, התאמת תזונה רכה.</div>
          </div>
          <div className="timeline-item">
            <div className="muted">21/11/2025 • עדכון פיזיו</div>
            <div>תרגילי שיווי משקל, התאמת אביזרי הליכה.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
