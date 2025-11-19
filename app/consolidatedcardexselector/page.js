const rounds = ['בוקר', 'צהריים', 'ערב', 'לילה'];

const distribution = [
  {
    resident: 'יצחק דנינו',
    room: '207',
    meds: ['Losartan 2tab x1', 'Singular 1tab x1'],
    status: 'הושלם',
  },
  { resident: 'חנה וייס', room: '208', meds: ['Vitamin D 1tab x1'], status: 'ממתין' },
  { resident: 'רבקה ישראלי', room: '206', meds: ['OZEMPIC 1tab x1'], status: 'הושלם' },
  { resident: 'שושנה כהן', room: '202', meds: ['Zyrtec 4tab x1'], status: 'בביצוע' },
];

export default function ConsolidatedCardexSelectorPage() {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h1>חלוקת תרופות</h1>
          <p className="muted">סקירה מרוכזת של חלוקת תרופות לפי משמרת.</p>
        </div>
        <div className="quick-actions">
          <button className="primary">התחל סבב</button>
          <button className="ghost">הדפס</button>
          <button className="ghost">ייצוא CSV</button>
        </div>
      </div>

      <div className="section-card">
        <div className="chips" style={{ marginBottom: '12px' }}>
          {rounds.map((round, idx) => (
            <span key={round} className={`chip ${idx === 0 ? 'chip-primary' : ''}`}>
              {round}
            </span>
          ))}
        </div>
        <div className="timeline">
          {distribution.map((item) => (
            <div key={item.resident} className="timeline-item">
              <div className="flex-between">
                <div>
                  <strong>{item.resident}</strong> • חדר {item.room}
                  <div className="muted">{item.meds.join(' | ')}</div>
                </div>
                <div className="tag medium">{item.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h3>פרטי מנה</h3>
        <div className="grid cols-3">
          <div className="form-group">
            <label>דייר</label>
            <input placeholder="בחר דייר" />
          </div>
          <div className="form-group">
            <label>תרופה</label>
            <input placeholder="לדוגמה: Losartan" />
          </div>
          <div className="form-group">
            <label>שעה</label>
            <input type="time" />
          </div>
          <div className="form-group">
            <label>דרך מתן</label>
            <select>
              <option>פומי</option>
              <option>זריקה</option>
              <option>מקומי</option>
              <option>אינהלציה</option>
            </select>
          </div>
          <div className="form-group">
            <label>תדירות</label>
            <select>
              <option>פעם ביום</option>
              <option>פעמיים ביום</option>
              <option>שבועי</option>
              <option>לפי הצורך</option>
            </select>
          </div>
          <div className="form-group">
            <label>הערות</label>
            <input placeholder="הערות לתרופה/מנה" />
          </div>
        </div>
        <div className="quick-actions" style={{ marginTop: '12px' }}>
          <button className="primary">סמן כהושלם</button>
          <button className="ghost">סמן כמוחמץ</button>
        </div>
      </div>
    </div>
  );
}
