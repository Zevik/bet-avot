const incidentList = [
  {
    icon: '🩹',
    type: 'פציעה',
    severity: 'בינוני',
    description: 'נפילה מהמיטה',
    resident: 'חנה וייס',
    room: '208',
    time: 'שלשום',
    status: 'בטיפול',
  },
  {
    icon: '⚠️',
    type: 'טעות במתן תרופות',
    severity: 'בינוני',
    description: 'תרופה חולקה פעמיים',
    resident: 'יצחק דנינו',
    room: '207',
    time: 'לפני 10 ימים',
    status: 'פתוח',
  },
  {
    icon: '⚠️',
    type: 'אירוע חריג',
    severity: 'בינוני',
    description: 'אי שיתוף פעולה חריג',
    resident: 'שרה מזרחי',
    room: '204',
    time: 'לפני 14 ימים',
    status: 'טופל',
  },
  {
    icon: '🩹',
    type: 'פציעה',
    severity: 'בינוני',
    description: 'חבלה קלה ביד',
    resident: 'שושנה כהן',
    room: '202',
    time: 'לפני 19 ימים',
    status: 'פתוח',
  },
  {
    icon: '🩹',
    type: 'פציעה',
    severity: 'בינוני',
    description: 'נפילה במסדרון',
    resident: 'יצחק דנינו',
    room: '207',
    time: 'לפני 24 ימים',
    status: 'בטיפול',
  },
];

const filters = {
  types: ['פציעה', 'נפילה', 'טעות תרופתית', 'התנהגות חריגה', 'אחר'],
  severities: ['קל', 'בינוני', 'קריטי'],
};

export default function IncidentReportsPage() {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h1>אירועים חריגים</h1>
          <p className="muted">ניהול מלא של דיווחי אירועים, חומרה, טיפול ומעקב.</p>
        </div>
        <div className="quick-actions">
          <button className="primary">+ הוסף אירוע חריג</button>
          <button className="ghost">ייצוא CSV</button>
          <button className="ghost">סינון מתקדם</button>
        </div>
      </div>

      <div className="section-card">
        <div className="filters">
          <select defaultValue="">
            <option value="">כל הסוגים</option>
            {filters.types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <select defaultValue="">
            <option value="">כל רמות החומרה</option>
            {filters.severities.map((sev) => (
              <option key={sev}>{sev}</option>
            ))}
          </select>
          <select defaultValue="">
            <option value="">סטטוס</option>
            <option>פתוח</option>
            <option>בטיפול</option>
            <option>טופל</option>
          </select>
        </div>
      </div>

      <div className="section-card">
        <div className="grid cols-1">
          {incidentList.map((incident, idx) => (
            <div key={idx} className="incident-card">
              <div className="flex-between">
                <div>
                  <strong>
                    {incident.icon} {incident.type}
                  </strong>
                  <div className={`tag ${incident.severity === 'קריטי' ? 'critical' : 'medium'}`}>{incident.severity}</div>
                  <p className="muted">{incident.description}</p>
                  <p className="muted">
                    {incident.resident} • חדר {incident.room} • {incident.time}
                  </p>
                </div>
                <div className="quick-actions" style={{ gap: '8px' }}>
                  <button className="ghost">✏️ עריכה</button>
                  <button className="ghost">👁️ צפייה</button>
                  <button className="ghost">📎 קבצים</button>
                </div>
              </div>
              <div className="muted">סטטוס: {incident.status}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <div>
            <h3>טופס אירוע חריג</h3>
            <p className="muted">מילוי מהיר של סוג אירוע, חומרה, דייר, תאריך ושעת האירוע.</p>
          </div>
          <button className="primary">שמור ושלח</button>
        </div>
        <div className="grid cols-2">
          <div className="form-group">
            <label>סוג אירוע</label>
            <select defaultValue="פציעה">
              {filters.types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>רמת חומרה</label>
            <div className="chips">
              {filters.severities.map((sev) => (
                <span key={sev} className="chip">
                  {sev}
                </span>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>דייר</label>
            <input placeholder="חיפוש דייר לפי שם/חדר" />
          </div>
          <div className="form-group">
            <label>תאריך ושעה</label>
            <input type="datetime-local" />
          </div>
        </div>
        <div className="form-group">
          <label>תיאור האירוע</label>
          <textarea rows={3} placeholder="תיאור חופשי"></textarea>
        </div>
        <div className="quick-actions" style={{ marginTop: '12px' }}>
          <button className="primary">שמור ושלח</button>
          <button className="ghost">שמור טיוטה</button>
          <button className="ghost">ביטול</button>
        </div>
      </div>
    </div>
  );
}
