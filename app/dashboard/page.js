const incidents = [
  { icon: '🩹', title: 'פציעה', severity: 'בינוני', detail: 'נפילה', resident: 'חנה וייס', room: '208', time: 'שלשום' },
  { icon: '⚠️', title: 'טעות במתן תרופות', severity: 'בינוני', detail: '', resident: 'יצחק דנינו', room: '207', time: 'לפני 10 ימים' },
  { icon: '⚠️', title: 'אירוע חריג', severity: 'בינוני', detail: '', resident: 'שרה מזרחי', room: '204', time: 'לפני 14 ימים' },
  { icon: '🩹', title: 'פציעה', severity: 'בינוני', detail: '', resident: 'שושנה כהן', room: '202', time: 'לפני 19 ימים' },
  { icon: '🩹', title: 'פציעה', severity: 'בינוני', detail: '', resident: 'יצחק דנינו', room: '207', time: 'לפני 24 ימים' },
];

const birthdays = [
  { name: 'מרדכי פרידמן', timing: 'מחר', age: 86, room: '203' },
  { name: 'רבקה ישראלי', timing: 'בעוד 28 ימים', age: 84, room: '206' },
];

const rooms = [
  { room: '101', status: 'פנוי' },
  { room: '102', status: 'פנוי' },
  { room: '103', status: 'חלקי (בני לם)' },
  { room: '104', status: 'פנוי' },
];

export default function DashboardPage() {
  return (
    <div className="page">
      <h1>דשבורד ראשי</h1>
      <p className="muted">בוקר טוב, יוסי נבון! הנה מבט כולל על פעילות המוסד היום.</p>

      <div className="section-card">
        <div className="quick-actions">
          <a className="chip" href="/calendar">לוח שנה</a>
          <a className="chip" href="/residents">רשימת דיירים</a>
          <a className="chip" href="/stickynotes">פתקים</a>
        </div>
      </div>

      <div className="grid cols-3">
        <div className="card-stat" style={{ borderColor: '#4caf50' }}>
          <h3>דיירים פעילים</h3>
          <div className="flex-between">
            <span className="percentage">9</span>
            <span>👥</span>
          </div>
        </div>
        <div className="card-stat" style={{ borderColor: '#ff9800', background: '#fff8e1' }}>
          <h3>דיירים מאושפזים</h3>
          <div className="flex-between">
            <span className="percentage">0</span>
            <span>🏥</span>
          </div>
          <p className="muted">אין דיירים מאושפזים - כל הדיירים נמצאים במוסד כרגע</p>
        </div>
        <div className="card-stat" style={{ borderColor: '#2196f3' }}>
          <h3>צוות פעיל</h3>
          <div className="flex-between">
            <span className="percentage">6</span>
            <span>👩‍⚕️</span>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <h3>אירועים חריגים (5)</h3>
          <a className="chip" href="/incidentreports">צפה בכל הדיווחים</a>
        </div>
        <div className="grid cols-2">
          {incidents.map((incident, idx) => (
            <div key={idx} className="incident-card">
              <div className="flex-between">
                <div>
                  <strong>{incident.icon} {incident.title}</strong>
                  <div className="tag medium">{incident.severity}</div>
                </div>
                <button className="ghost">✏️ צפייה / עריכה</button>
              </div>
              <p>{incident.detail || '—'}</p>
              <p className="muted">{incident.resident} • חדר {incident.room} • {incident.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid cols-2">
        <div className="section-card">
          <div className="section-header">
            <h3>ימי הולדת (2)</h3>
            <span className="muted">ימי הולדת קרבים של דיירים</span>
          </div>
          <div className="grid cols-1">
            {birthdays.map((b, idx) => (
              <div key={idx} className="birthday-card">
                <div className="flex-between">
                  <strong>🎂 {b.name}</strong>
                  <span className="muted">{b.timing}</span>
                </div>
                <p className="muted">גיל {b.age} • חדר {b.room}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-card">
          <div className="section-header">
            <h3>תפוסת חדרים</h3>
            <span className="muted">מצב תפוסה נוכחית</span>
          </div>
            <div className="occupancy">
              <div>
                <div className="percentage">45.0%</div>
                <div className="muted">9 מתוך 20 חדרים מאוכלסים</div>
              </div>
            <div>
              {rooms.map((room) => (
                <div key={room.room} className="muted">חדר {room.room} - {room.status}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <div>
            <h3>מדדי ביצועים וציות</h3>
            <p className="muted">מדדי Core לשמירה על בטיחות ואיכות טיפול.</p>
          </div>
          <div className="quick-actions">
            <button className="ghost">רענן נתונים</button>
            <button className="ghost">ייצוא דוח</button>
          </div>
        </div>
        <div className="kpi-grid">
          <div className="card-stat">
            <div className="flex-between">
              <span>זמן תגובה לאירועים</span>
              <span>⚡</span>
            </div>
            <div className="percentage">7 דק׳</div>
            <div className="muted">יעד: &lt; 10 דק׳</div>
          </div>
          <div className="card-stat">
            <div className="flex-between">
              <span>ציות חלוקת תרופות</span>
              <span>💊</span>
            </div>
            <div className="percentage">98%</div>
            <div className="muted">סבב אחרון</div>
          </div>
          <div className="card-stat">
            <div className="flex-between">
              <span>סיכוני נפילה גבוהים</span>
              <span>⚠️</span>
            </div>
            <div className="percentage">3</div>
            <div className="muted">דיירים עם ציון &gt; 70</div>
          </div>
          <div className="card-stat">
            <div className="flex-between">
              <span>אירועי אבטחה</span>
              <span>🔒</span>
            </div>
            <div className="percentage">0</div>
            <div className="muted">7 ימים אחרונים</div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <div>
            <h3>קיצורי דרך לעבודה יומיומית</h3>
            <p className="muted">גישה מהירה לתהליכי עבודה עיקריים מהאפיון.</p>
          </div>
        </div>
        <div className="quick-actions" style={{ flexWrap: 'wrap', gap: '8px' }}>
          <a className="chip" href="/residents">קליטת דייר חדש</a>
          <a className="chip" href="/incidentreports">אירוע חריג חדש</a>
          <a className="chip" href="/nursingshiftreport">דיווח סיעודי חדש</a>
          <a className="chip" href="/consolidatedcardexselector">חלוקת תרופות</a>
          <a className="chip" href="/calendar">קבע ישיבת צוות</a>
          <a className="chip" href="/stickynotes">פתק דחוף לצוות</a>
        </div>
      </div>
    </div>
  );
}
