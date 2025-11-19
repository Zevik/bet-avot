const events = [
  { date: '04/11', label: 'יום עליש', items: [{ type: 'meeting', title: 'פגישה', time: '10:00' }] },
  { date: '13/11', label: 'יום חמישי', items: [{ type: 'meeting', title: 'חדשה', time: '10:00', location: 'ב דיירים' }] },
  { date: '21/11', label: 'יום שישי', items: [{ type: 'birthday', title: '🎂 מרדכי פרידמן', time: '10:00', note: 'הדפסה 🖨️' }] },
];

export default function CalendarPage() {
  return (
    <div className="page">
      <h1>לוח שנה ותכנון Google Calendar</h1>
      <div className="section-card">
        <div className="section-header">
          <div>
            <h3>סינכרון חיבור Google Calendar</h3>
            <p className="muted">חבר את חשבון Google שלך כדי לסנכרן אוטומטית ישיבות צוות ואירועים.</p>
          </div>
          <button className="primary">התחבר ליישום גוגל</button>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <div>
            <h3>לוח שנה מקומי - ישיבות, יחידת אירועי גוגל</h3>
            <p className="muted">נובמבר 2025</p>
          </div>
          <div className="quick-actions">
            <button className="ghost">‹ חודש קודם</button>
            <button className="ghost">חודש הבא ›</button>
            <button className="ghost">היום</button>
          </div>
        </div>
        <div className="calendar-grid">
          {events.map((event) => (
            <div key={event.date} className="event-card">
              <div className="flex-between">
                <div>
                  <strong>{event.label} {event.date}</strong>
                </div>
                <button className="ghost">+ חדשה</button>
              </div>
              <div className="grid cols-1" style={{ marginTop: '8px' }}>
                {event.items.map((item, idx) => (
                  <div key={idx} className="birthday-card" style={{ background: item.type === 'birthday' ? '#ffeef6' : '#fff' }}>
                    <div className="flex-between">
                      <span>{item.title}</span>
                      <span className="muted">{item.time}</span>
                    </div>
                    {item.location && <div className="muted">מיקום: {item.location}</div>}
                    {item.note && <div className="muted">{item.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <div className="flex-between">
          <h3>איך עוד?</h3>
          <div className="chip">התחבר לחשבון Google</div>
        </div>
        <p className="muted">1 אירועים ממתינים</p>
      </div>
    </div>
  );
}
