const notes = [
  {
    title: 'עדכון צוות',
    content: 'הדרכת בטיחות ביום חמישי בשעה 12:00 בחדר ישיבות.',
    sender: 'אורלי - מנהלת',
    recipients: 'כולם',
    ts: 'היום 09:30',
    status: 'לא נקרא',
    priority: 'דחוף',
    color: 'אדום',
  },
  {
    title: 'בדיקת מעבדה',
    content: 'בבקשה לוודא לקיחת דם לדייר 207 לפני 10:00.',
    sender: 'יוסי נבון - רופא',
    recipients: 'אחיות',
    ts: 'אתמול 18:10',
    status: 'נקרא',
    priority: 'רגיל',
    color: 'צהוב',
  },
  {
    title: 'פתק אישי',
    content: 'חנה וייס - מעקב כאבים מתמשך. לעדכן אותי בסוף משמרת.',
    sender: 'יוסי נבון - רופא',
    recipients: 'אני',
    ts: 'לפני 3 ימים',
    status: 'לא נקרא',
    priority: 'רגיל',
    color: 'כחול',
  },
];

export default function StickyNotesPage() {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h1>פתקים</h1>
          <p className="muted">מערכת הודעות פנימית - פתקים כלליים ופתקים אליי.</p>
        </div>
        <div className="quick-actions">
          <button className="primary">+ פתק חדש</button>
          <button className="ghost">פתקים אליי</button>
        </div>
      </div>

      <div className="section-card">
        <div className="grid cols-3">
          <div>
            <div className="muted">מצב תצוגה</div>
            <div className="chips">
              <span className="chip">פתקים כלליים</span>
              <span className="chip">פתקים אליי</span>
            </div>
          </div>
          <div>
            <div className="muted">סטטוס</div>
            <div className="chips">
              <span className="chip">נקרא</span>
              <span className="chip">לא נקרא</span>
            </div>
          </div>
          <div>
            <div className="muted">עדיפות</div>
            <div className="chips">
              <span className="chip">רגיל</span>
              <span className="chip chip-error">דחוף</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid cols-3">
        {notes.map((note, idx) => (
          <div key={idx} className="section-card" style={{ borderColor: note.priority === 'דחוף' ? '#f44336' : '#e0e0e0' }}>
            <div className="flex-between">
              <div>
                <strong>{note.title || 'ללא כותרת'}</strong>
                <div className="muted">{note.ts}</div>
              </div>
              <div className={`tag ${note.priority === 'דחוף' ? 'critical' : 'medium'}`}>{note.priority}</div>
            </div>
            <p>{note.content}</p>
            <p className="muted">שולח: {note.sender}</p>
            <p className="muted">נמענים: {note.recipients}</p>
            <div className="quick-actions" style={{ marginTop: '8px' }}>
              <button className="ghost">ערוך</button>
              <button className="ghost">סמן כנקרא</button>
              <button className="ghost">מחק</button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-card">
        <h3>יצירת פתק חדש</h3>
        <div className="grid cols-2">
          <div className="form-group">
            <label>כותרת (אופציונלי)</label>
            <input placeholder="לדוגמה: תזכורת צוות" />
          </div>
          <div className="form-group">
            <label>נמענים</label>
            <select defaultValue="כולם">
              <option>כולם</option>
              <option>אחיות</option>
              <option>רופאים</option>
              <option>אני</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>תוכן</label>
          <textarea rows={4} placeholder="טקסט חופשי..."></textarea>
        </div>
        <div className="grid cols-2">
          <div className="form-group">
            <label>עדיפות</label>
            <div className="chips">
              <span className="chip">רגיל</span>
              <span className="chip chip-error">דחוף</span>
            </div>
          </div>
          <div className="form-group">
            <label>צבע</label>
            <div className="chips">
              <span className="chip">צהוב</span>
              <span className="chip">כחול</span>
              <span className="chip">ירוק</span>
              <span className="chip chip-error">אדום</span>
            </div>
          </div>
        </div>
        <div className="quick-actions" style={{ marginTop: '12px' }}>
          <button className="primary">שמור</button>
          <button className="ghost">ביטול</button>
        </div>
      </div>
    </div>
  );
}
