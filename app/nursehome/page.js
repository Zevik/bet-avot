const fallAlerts = [
  {
    name: 'יצחק דנינו',
    score: 85,
    level: 'קריטי',
    room: '207',
    factors: [
      'היסטוריה של נפילות - יצחק דנינו עבר 2 נפילות קודמות',
      'שימוש בתרופות פסיכוטרופיות ובתרופות ללחץ דם',
      'כאב כרוני במקומות שונים בגוף',
    ],
    count: '⚠️ נפל/ה 2 פעמים ב-6 החודשים האחרונים',
  },
  {
    name: 'חנה וייס',
    score: 78,
    level: 'קריטי',
    room: '208',
    factors: [
      '3 נפילות קודמות',
      'שימוש בפרדוקסיקלוס ותרופות נוספות המפחיתות לחץ דם',
      'מצב קוגניטיבי לא הוערך',
    ],
    count: '⚠️ נפל/ה 3 פעמים ב-6 החודשים האחרונים',
  },
  {
    name: 'רפאל לוי',
    score: 73,
    level: 'גבוה',
    room: '201',
    factors: ['גיל מעל 80', 'מחלת כליות כרונית דרגה 3', 'שימוש בתרופות ללחץ דם'],
    count: '⚠️ נפל/ה 1 פעמים ב-6 החודשים האחרונים',
  },
  {
    name: 'מרדכי פרידמן',
    score: 72,
    level: 'קריטי',
    room: '203',
    factors: ['אין היסטוריה קודמת של נפילות', 'מחלת כליות כרונית דרגה 3', 'אנמיה לא ספציפית'],
    count: '⚠️ ללא נפילות מדווחות',
  },
  {
    name: 'שושנה כהן',
    score: 65,
    level: 'גבוה',
    room: '202',
    factors: ['שימוש ב-3 תרופות מסוכנות', 'גיל 86', 'מחלות כרוניות מרובות'],
    count: '⚠️ נפל/ה 1 פעמים ב-6 החודשים האחרונים',
  },
];

const stats = [
  { label: 'משימות פתוחות', value: '0', icon: '✓' },
  { label: 'דיירים מאושפזים', value: '0', icon: '🏥' },
  { label: 'דיירים פעילים', value: '9', icon: '👥' },
];

const tabs = ['ממשק אחות', 'ספר פקודות', 'מעקב רפואי מרוכז', 'דיווח סיעודי שוטף', 'ספר פקודות (דייר)'];

export default function NurseHomePage() {
  return (
    <div className="page">
      <h1>כלים חיוניים סיעודיים</h1>
      <div className="tabs">
        {tabs.map((tab, idx) => (
          <span key={tab} className={`tab ${idx === 0 ? 'active' : ''}`}>
            {tab}
          </span>
        ))}
      </div>
      <div className="alert">🚨 אזהרה: יש לשים לב לפי כל מרשם/מתן תרופה</div>

      <div className="section-card">
        <div className="section-header">
          <h3>התראות סיכון לנפילות ({fallAlerts.length})</h3>
          <div className="quick-actions">
            <button className="ghost">רענן</button>
            <button className="ghost">צפה בכל הניתוחים</button>
          </div>
        </div>
        <div className="grid cols-1">
          {fallAlerts.map((alert) => (
            <div key={alert.name} className="fall-alert">
              <div className="flex-between">
                <div>
                  <strong>{alert.name}</strong> • חדר {alert.room}
                  <div className={`tag ${alert.level === 'קריטי' ? 'critical' : 'medium'}`}>{alert.level}</div>
                </div>
                <div className="percentage">{alert.score}/100</div>
              </div>
              <ul>
                {alert.factors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>
              <div className="muted">{alert.count}</div>
              <div className="quick-actions" style={{ marginTop: '8px' }}>
                <button className="primary">פרטים</button>
                <button className="ghost">אשר צפייה</button>
              </div>
            </div>
          ))}
        </div>
        <div className="muted" style={{ marginTop: '8px' }}>צפה בעוד 4 התראות ←</div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <h3>סקירה כללית - ממשק אחות</h3>
          <button className="ghost">🖨️ הדפס סקירה</button>
        </div>
        <p className="muted">
          ברוכים הבאים לממשק האחיות. מכאן ניתן לקבל סקירה מהירה על מצב הדיירים ולהגיע למידע הרפואי הרלוונטי.
        </p>
        <div className="kpi-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="card-stat">
              <div className="flex-between">
                <div>
                  <div className="muted">{stat.label}</div>
                  <div className="percentage">{stat.value}</div>
                </div>
                <span>{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
