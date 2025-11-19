const procedures = [
  { title: 'נהלי אבטחת מידע', detail: 'עקרונות אבטחת מידע, הרשאות, הצפנה.', updated: '2025-10-01' },
  { title: 'מדיניות סיסמאות', detail: 'מינימום 8 תווים, שילוב אותיות, מספרים וסימנים.', updated: '2025-09-12' },
  { title: 'תוכנית התאוששות מאסון', detail: 'גיבוי יומי, שחזור חודשי, שמירה ל-30 יום.', updated: '2025-08-30' },
];

export default function SecurityProceduresPage() {
  return (
    <div className="page">
      <h1>נהלי אבטחת מידע</h1>
      <p className="muted">מסמכי אבטחה, מדיניות והנחיות תאימות.</p>

      <div className="grid cols-2">
        {procedures.map((proc) => (
          <div key={proc.title} className="section-card">
            <div className="flex-between">
              <strong>{proc.title}</strong>
              <span className="muted">עודכן: {proc.updated}</span>
            </div>
            <p className="muted">{proc.detail}</p>
            <div className="quick-actions">
              <button className="primary">פתח</button>
              <button className="ghost">הורד PDF</button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-card" style={{ marginTop: '16px' }}>
        <h3>Audit Log</h3>
        <p className="muted">תיעוד כל פעולה במערכת: מי, מתי ומה השתנה.</p>
        <div className="timeline">
          <div className="timeline-item">12/11/2025 • יצוא דוח אירועים • משתמש: admin • IP: 10.0.0.12</div>
          <div className="timeline-item">10/11/2025 • שינוי הרשאות משתמש • משתמש: manager</div>
        </div>
      </div>
    </div>
  );
}
