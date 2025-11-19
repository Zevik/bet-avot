'use client';

import { useMemo, useState } from 'react';

const residentProfiles = [
  {
    id: 'itzhak',
    name: 'יצחק דנינו',
    room: '207',
    age: 89,
    idNumber: '123456789',
    careLevel: 'טיפול בזיכרון',
    healthFund: 'מאוחדת',
    height: 180,
    weight: 80,
    bmi: 24.7,
    cognitiveStatus: 'לא הוערך',
    allergies: ['אספירין'],
    children: 3,
    summary: {
      diagnoses: 9,
      medications: 11,
      incidents: 5,
      nursingReports: 5,
    },
    aiHistory: [
      {
        ts: '31.10.2025, 2:10:15',
        preview:
          'The analysis identified a significant interaction between Aspirin and several medications such as Ac...',
      },
    ],
    nursingReports: [
      {
        shift: 'ערב',
        ts: '06/11/2025 16:25',
        reporter: 'לא ידוע',
        content:
          'ביקור משפחה: בן | מדדים חיוניים: לחץ דם: 140/100 | חום: 37°C (פומית) | גובה: 180 ס״מ | הערכת כאב: רמת כאב קלה',
      },
      { shift: 'בוקר', ts: '30/10/2025 13:51', reporter: 'לא ידוע', content: 'נרדמה' },
      { shift: 'בוקר', ts: '29/10/2025 11:51', reporter: 'לא ידוע', content: 'איפה אפשר ביקור משפחה: בן | הערכת כאב: 1/10' },
      { shift: 'בוקר', ts: '29/10/2025 09:00', reporter: 'לא ידוע', content: 'נפילה מן המיטה בשעה תשע' },
      { shift: 'לילה', ts: '24/10/2025 03:18', reporter: 'לא ידוע', content: 'תיעוד טקסט חופשי' },
    ],
  },
  { id: 'hana', name: 'חנה וייס', room: '208', age: 83 },
  { id: 'rivka', name: 'רבקה ישראלי', room: '206', age: 85 },
  { id: 'shoshana', name: 'שושנה כהן', room: '202', age: 86 },
  { id: 'alex', name: 'כץ אלכסנדר', room: '205', age: 88 },
  { id: 'rafael', name: 'לוי רפאל', room: '201', age: 84 },
  { id: 'beni', name: 'לם בני', room: '103', age: 77 },
  { id: 'sara', name: 'מזרחי שרה', room: '204', age: 82 },
  { id: 'mordechai', name: 'פרידמן מרדכי', room: '203', age: 86 },
];

const sideMenu = [
  {
    category: 'מידע בסיסי',
    items: ['קליטת דייר חדש', 'מבט כללי 🏠', 'מעקב רפואי 🏥'],
  },
  {
    category: 'רפואי',
    items: ['תרופות 💊', 'בדיקה רפואית יזומה 🔬', 'מרשם 📋', 'אבחנות 🩺', 'חיסונים 💉', 'אשפוזים 🏥', 'הפניות 📄', 'בדיקות מעבדה 🧪', 'ניתוחים ⚕️', 'רגישויות ⚠️', 'מדדים חיוניים 📊'],
  },
  {
    category: 'סוציאלי',
    items: ['ביקורי משפחה 👨‍👩‍👧‍👦', 'רקע 📖', 'אנשי קשר 📞', 'טופס אפוטרופסות 📑'],
  },
  {
    category: 'הערכות ומעקב',
    items: ['מבחנים 📝', 'היסטוריית ישיבות צוות 📅', 'מעקב סיעודי 🩺'],
  },
  {
    category: 'הנחיות צוות טיפולי',
    items: ['תזונאי/ת 🍎', 'קלינאי/ת תקשורת 🗣️', 'פיזיותרפיסט/ית 💪', 'מרפא/ה בעיסוק 🎨', 'פסיכולוג/ית 🧠', 'עובד/ת סוציאלי/ת 🤝'],
  },
];

const medications = [
  {
    name: 'Singular Montelukast',
    dosage: '1tab x1',
    frequency: 'יומי',
    route: 'פומי ביום 0800',
    start: '17/11/2025',
    end: '-',
    status: 'פעילה',
  },
  {
    name: 'Losartan',
    dosage: '2tab x1',
    frequency: 'יומי',
    route: 'פומי ביום 0800',
    start: '27/10/2025',
    end: '-',
    status: 'פעילה',
  },
  {
    name: 'OZEMPIC',
    dosage: '1tab x1',
    frequency: 'שבועי',
    route: 'הזרקה',
    start: '27/10/2025',
    end: '-',
    status: 'פעילה',
  },
  {
    name: 'Zyrtec Cetirizine',
    dosage: '4tab x1',
    frequency: 'יומי',
    route: 'פומי ביום 0800',
    start: '27/10/2025',
    end: '-',
    status: 'פעילה',
  },
  {
    name: 'Vitamin D Cholecalciferol',
    dosage: '1tab x1',
    frequency: 'שבועי',
    route: 'פומי ביום 0800',
    start: '27/10/2025',
    end: '-',
    status: 'כחולה',
  },
];

export default function DoctorHome() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(residentProfiles[0].id);

  const filtered = useMemo(() => {
    return residentProfiles.filter((resident) => {
      const search = `${resident.name} ${resident.room} ${resident.idNumber || ''}`;
      return search.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

  const selected = useMemo(
    () => residentProfiles.find((r) => r.id === selectedId) || filtered[0] || residentProfiles[0],
    [selectedId, filtered]
  );

  return (
    <div className="page doctor-page">
      <div className="section-header">
        <div>
          <h1>בחר/י דייר להתחלת עבודה</h1>
          <p className="muted">חיפוש דינמי לפי שם, חדר או תעודת זהות</p>
        </div>
        <div className="quick-actions">
          <button className="ghost">חזור לרשימת דיירים</button>
          <button className="primary">צילום מסמך</button>
        </div>
      </div>

      <div className="doctor-layout">
        <div className="doctor-selector">
          <div className="section-card">
            <div className="search-bar">
              <input
                placeholder="חיפוש לפי שם / חדר / ת.ז..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="חיפוש דייר"
              />
              <button className="ghost">נקה</button>
            </div>
          </div>
          <div className="resident-grid">
            {filtered.map((resident) => (
              <button
                key={resident.id}
                className={`resident-card ${resident.id === selected.id ? 'active' : ''}`}
                onClick={() => setSelectedId(resident.id)}
              >
                <div className="resident-photo">👤</div>
                <div>
                  <div className="flex-between">
                    <strong>{resident.name}</strong>
                    <span className="muted">חדר {resident.room}</span>
                  </div>
                  <div className="muted">גיל {resident.age}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="resident-detail">
          <div className="resident-panel">
            <div className="resident-summary-card">
              <div className="resident-photo big">👤</div>
              <div>
                <h3>{selected.name}</h3>
                <p className="muted">חדר {selected.room} • גיל {selected.age} • ת.ז {selected.idNumber || '—'}</p>
              </div>
              <button className="ghost">חזור לרשימת דיירים</button>
            </div>
            <div className="side-menu">
              {sideMenu.map((section) => (
                <div key={section.category} className="side-menu-section">
                  <div className="muted small-heading">{section.category}</div>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="resident-content">
            <div className="resident-header">
              <div className="flex-between">
                <div>
                  <div className="resident-name">{selected.name}</div>
                  <div className="muted">חדר {selected.room} • בן {selected.age}</div>
                </div>
                <div className="quick-actions">
                  <button className="primary">בדיקה חדשה</button>
                  <button className="ghost">בדיקה יזומה</button>
                  <button className="ghost">קבלה רפואית</button>
                  <button className="ghost">צילום מסמך</button>
                </div>
              </div>
              <div className="alert">🚨 אזהרה: רגישויות לתרופות ואלרגיות — יש לשים לב לפני כל מרשם/מתן תרופה. ({selected.allergies?.join(', ') || 'ללא'})</div>
            </div>

            <div className="grid cols-2">
              <div className="section-card">
                <h3>מידע אישי</h3>
                <p>שם מלא: {selected.name}</p>
                <p>תאריך לידה: 27/01/1936</p>
                <p>גיל: {selected.age} שנים</p>
              </div>
              <div className="section-card">
                <h3>מצב משפחתי וחברתי</h3>
                <p>מספר ילדים: {selected.children || '—'}</p>
                <p className="muted">מידע נוסף על משפחה</p>
              </div>
            </div>

            <div className="grid cols-3">
              <div className="section-card">
                <h3>מידע רפואי ומוסדי</h3>
                <p>חדר: {selected.room}</p>
                <p>קופת חולים: {selected.healthFund || '—'}</p>
                <p>רמת טיפול: {selected.careLevel || '—'}</p>
                <p>גובה: {selected.height || '—'} ס״מ • משקל: {selected.weight || '—'} ק״ג</p>
                <p>BMI: {selected.bmi || '—'}</p>
                <p>מצב קוגניטיבי: {selected.cognitiveStatus || '—'}</p>
              </div>
              <div className="section-card">
                <h3>אזהרות ורגישויות</h3>
                <div className="chips">
                  {(selected.allergies || []).map((allergy) => (
                    <span key={allergy} className="chip chip-error">{allergy}</span>
                  ))}
                  {(!selected.allergies || selected.allergies.length === 0) && (
                    <span className="muted">לא הוזנו רגישויות</span>
                  )}
                </div>
              </div>
              <div className="section-card">
                <h3>כרטיסי סיכום</h3>
                <div className="kpi-grid">
                  <div className="card-stat">
                    <div className="flex-between"><span>אבחנות פעילות</span><span>🩺</span></div>
                    <div className="percentage">{selected.summary?.diagnoses ?? 0}</div>
                  </div>
                  <div className="card-stat">
                    <div className="flex-between"><span>תרופות פעילות</span><span>💊</span></div>
                    <div className="percentage">{selected.summary?.medications ?? 0}</div>
                  </div>
                  <div className="card-stat">
                    <div className="flex-between"><span>אירועים חריגים אחרונים</span><span>⚠️</span></div>
                    <div className="percentage">{selected.summary?.incidents ?? 0}</div>
                  </div>
                  <div className="card-stat">
                    <div className="flex-between"><span>דיווחי סיעוד אחרונים</span><span>📋</span></div>
                    <div className="percentage">{selected.summary?.nursingReports ?? 0}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-card">
              <div className="section-header">
                <h3>תרופות</h3>
                <div className="quick-actions">
                  <button className="primary">הוסף תרופה</button>
                  <button className="ghost">הצג/חפש התנגשויות</button>
                </div>
              </div>
              <div className="filters">
                <select defaultValue=""> <option value="">כל המינונים</option> <option>1tab</option> <option>2tab</option> </select>
                <select defaultValue=""> <option value="">כל הסטטוסים</option> <option>פעילה</option> <option>הושעתה</option> <option>הופסקה</option> </select>
                <select defaultValue=""> <option value="">כל האבחנות</option> <option>יתר לחץ דם</option> <option>רגישויות</option> </select>
              </div>
              <div className="chips" style={{ margin: '12px 0' }}>
                <span className="chip">המלצה: 11</span>
                <span className="chip">מרשם: 0</span>
                <span className="chip">הופסקה: 0</span>
                <span className="chip">פעילה: 7</span>
                <span className="chip">כחולה: 4</span>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>פעילות</th>
                    <th>שינוי אחרון</th>
                    <th>נרשם ע״י</th>
                    <th>מינון</th>
                    <th>תאריך סיום</th>
                    <th>תאריך התחלה</th>
                    <th>דרך מתן</th>
                    <th>מינון</th>
                    <th>תדירות</th>
                    <th>שם התרופה</th>
                  </tr>
                </thead>
                <tbody>
                  {medications.map((med) => (
                    <tr key={med.name}>
                      <td>🗑️ ✏️ ⏸️ 👁️</td>
                      <td>יוני וכהן</td>
                      <td>יוני וכהן</td>
                      <td>{med.dosage}</td>
                      <td>{med.end}</td>
                      <td>{med.start}</td>
                      <td>{med.route}</td>
                      <td>{med.dosage.split(' ')[0]}</td>
                      <td>{med.frequency}</td>
                      <td>{med.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="section-card">
              <div className="section-header">
                <h3>טופס הוספת תרופה</h3>
                <p className="muted">מבנה מלא לפי האפיון: שם, מינון, תדירות, דרך מתן ותאריכים.</p>
              </div>
              <div className="grid cols-2">
                <div className="form-group">
                  <label>שם התרופה</label>
                  <input placeholder="לדוגמה: Losartan" />
                </div>
                <div className="form-group">
                  <label>מינון</label>
                  <input placeholder="50mg / 1tab" />
                </div>
                <div className="form-group">
                  <label>תדירות</label>
                  <select>
                    <option>פעם ביום</option>
                    <option>פעמיים ביום</option>
                    <option>3 פעמים ביום</option>
                    <option>לפי הצורך</option>
                  </select>
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
                  <label>שעות מתן</label>
                  <input type="time" />
                </div>
                <div className="form-group">
                  <label>תאריך התחלה</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>תאריך סיום</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>הערות</label>
                  <textarea rows={3} placeholder="תיעוד חופשי"></textarea>
                </div>
              </div>
              <div className="quick-actions" style={{ marginTop: '12px' }}>
                <button className="primary">שמור</button>
                <button className="ghost">ביטול</button>
              </div>
            </div>

            <div className="section-card">
              <div className="section-header">
                <h3>טופס בדיקה רפואית</h3>
                <p className="muted">ממצאים, המלצות, בדיקות המשך ותיאום ביקור הבא.</p>
              </div>
              <div className="grid cols-2">
                <div className="form-group">
                  <label>סוג בדיקה</label>
                  <select>
                    <option>בדיקה שגרתית</option>
                    <option>בדיקה יזומה</option>
                    <option>בדיקת קבלה</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>תאריך ביקור הבא</label>
                  <input type="date" />
                </div>
              </div>
              <div className="form-group">
                <label>ממצאים</label>
                <textarea rows={2} placeholder="ממצאים קליניים"></textarea>
              </div>
              <div className="form-group">
                <label>המלצות</label>
                <textarea rows={2} placeholder="המלצות טיפול"></textarea>
              </div>
              <div className="form-group">
                <label>בדיקות המשך</label>
                <textarea rows={2} placeholder="בדיקות משלימות"></textarea>
              </div>
              <div className="quick-actions" style={{ marginTop: '12px' }}>
                <button className="primary">שמור ושלח</button>
                <button className="ghost">שמור טיוטה</button>
              </div>
            </div>

            <div className="grid cols-2">
              <div className="section-card">
                <div className="section-header">
                  <h3>היסטוריית ניתוחי AI 🤖</h3>
                  <button className="ghost">צפייה</button>
                </div>
                <div className="timeline">
                  {selected.aiHistory?.map((entry) => (
                    <div key={entry.ts} className="timeline-item">
                      <div className="muted">{entry.ts}</div>
                      <div>{entry.preview}</div>
                    </div>
                  ))}
                </div>
                <div className="quick-actions" style={{ marginTop: '8px' }}>
                  <button className="primary">הצג/חפש התנגשויות</button>
                  <button className="ghost">ניתוח AI של הדייר</button>
                </div>
              </div>

              <div className="section-card">
                <div className="section-header">
                  <h3>דיווחים סיעודיים אחרונים</h3>
                  <span className="muted">סה"כ 5 דיווחים</span>
                </div>
                <div className="timeline">
                  {selected.nursingReports?.map((report, idx) => (
                    <div key={`${report.ts}-${idx}`} className="timeline-item">
                      <div className={`tag ${report.shift === 'קריטי' ? 'critical' : 'medium'}`}>{report.shift}</div>
                      <div className="muted">{report.ts} • {report.reporter}</div>
                      <div>{report.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
