const reports = [
  {
    shift: 'ערב',
    timestamp: '06/11/2025 16:25',
    reporter: 'לא ידוע',
    content:
      'ביקור משפחה: בן | מדדים חיוניים: לחץ דם: 140/100 | חום: 37°C (פומית) | גובה: 180 ס״מ | הערכת כאב: רמת כאב קלה',
  },
  { shift: 'בוקר', timestamp: '30/10/2025 13:51', reporter: 'לא ידוע', content: 'נרדמה' },
  { shift: 'בוקר', timestamp: '29/10/2025 11:51', reporter: 'לא ידוע', content: 'ביקור משפחה: בן | הערכת כאב: 1/10' },
  { shift: 'בוקר', timestamp: '29/10/2025 09:00', reporter: 'לא ידוע', content: 'נפילה מן המיטה בשעה תשע' },
  { shift: 'לילה', timestamp: '24/10/2025 03:18', reporter: 'לא ידוע', content: 'תיעוד טקסט חופשי' },
];

export default function NursingShiftReportPage() {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h1>דיווח סיעודי שוטף</h1>
          <p className="muted">תיעוד משמרות, מדדים חיוניים, פעולות ותגובות.</p>
        </div>
        <div className="quick-actions">
          <button className="primary">+ דיווח חדש</button>
          <button className="ghost">ייצוא CSV</button>
          <button className="ghost">הדפס</button>
        </div>
      </div>

      <div className="section-card">
        <div className="grid cols-3">
          <div className="form-group">
            <label>משמרת</label>
            <select defaultValue="">
              <option value="">כל המשמרות</option>
              <option>בוקר</option>
              <option>צהריים</option>
              <option>ערב</option>
              <option>לילה</option>
            </select>
          </div>
          <div className="form-group">
            <label>דייר</label>
            <input placeholder="חיפוש דייר לפי שם/חדר" />
          </div>
          <div className="form-group">
            <label>טווח תאריכים</label>
            <input type="date" />
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <h3>דיווחים אחרונים</h3>
          <span className="muted">סה"כ {reports.length} דיווחים</span>
        </div>
        <div className="timeline">
          {reports.map((report, idx) => (
            <div key={idx} className="timeline-item">
              <div className={`tag ${report.shift === 'לילה' ? 'medium' : 'critical'}`}>{report.shift}</div>
              <div className="muted">{report.timestamp} • {report.reporter}</div>
              <div>{report.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h3>טופס דיווח</h3>
        <div className="grid cols-2">
          <div className="form-group">
            <label>משמרת</label>
            <select>
              <option>בוקר</option>
              <option>צהריים</option>
              <option>ערב</option>
              <option>לילה</option>
            </select>
          </div>
          <div className="form-group">
            <label>דייר</label>
            <input placeholder="לדוגמה: יצחק דנינו" />
          </div>
          <div className="form-group">
            <label>תאריך</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>שעה</label>
            <input type="time" />
          </div>
        </div>
        <div className="form-group">
          <label>מדדים חיוניים</label>
          <input placeholder="לחץ דם, חום, דופק, סטורציה" />
        </div>
        <div className="form-group">
          <label>תוכן</label>
          <textarea rows={4} placeholder="תיאור חופשי, ביקורים, הערכת כאב, תזונה, ניידות, התנהגות..."></textarea>
        </div>
        <div className="quick-actions" style={{ marginTop: '12px' }}>
          <button className="primary">שמור ושלח</button>
          <button className="ghost">שמור טיוטה</button>
        </div>
      </div>
    </div>
  );
}
