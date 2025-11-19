const meetings = [
  {
    date: '13/11/2025',
    time: '10:00',
    residents: ['יצחק דנינו', 'חנה וייס'],
    summary: 'סיכום החלטות: המשך פיזיו, בדיקת מעבדה חוזרת, מעקב כאב.',
  },
  {
    date: '21/11/2025',
    time: '11:30',
    residents: ['מרדכי פרידמן'],
    summary: 'תזונה רכה, מעקב משקל שבועי, בדיקת דם חודשית.',
  },
];

export default function MultidisciplinaryMeetingsPage() {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h1>ישיבות צוות</h1>
          <p className="muted">ניהול ישיבות רב-תחומיות, סדר יום, משתתפים ופרוטוקולים.</p>
        </div>
        <div className="quick-actions">
          <button className="primary">+ ישיבה חדשה</button>
          <button className="ghost">ייצוא פרוטוקול</button>
        </div>
      </div>

      <div className="section-card">
        <div className="grid cols-2">
          <div className="form-group">
            <label>תאריך</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>דיירים לדיון</label>
            <input placeholder="הוסף דיירים" />
          </div>
          <div className="form-group">
            <label>משתתפים</label>
            <input placeholder="רופא, אחות, פיזיותרפיסט, תזונאי..." />
          </div>
          <div className="form-group">
            <label>סדר יום</label>
            <textarea rows={3} placeholder="נקודות לדיון"></textarea>
          </div>
        </div>
        <div className="quick-actions" style={{ marginTop: '12px' }}>
          <button className="primary">שמור ותזמן</button>
          <button className="ghost">שלח הזמנות</button>
        </div>
      </div>

      <div className="section-card" style={{ marginTop: '16px' }}>
        <h3>ישיבות עתידיות</h3>
        <div className="timeline">
          {meetings.map((meeting) => (
            <div key={meeting.date} className="timeline-item">
              <div className="flex-between">
                <div>
                  <strong>{meeting.date}</strong> • {meeting.time}
                  <div className="muted">דיירים: {meeting.residents.join(', ')}</div>
                </div>
                <button className="ghost">פרוטוקול</button>
              </div>
              <div>{meeting.summary}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
