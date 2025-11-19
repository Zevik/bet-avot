const residents = [
  { name: 'דנינו יצחק', room: '207', birth: '27.1.1936', status: 'תשוש נפש', fund: 'מאוחדת' },
  { name: 'וייס חנה', room: '208', birth: '11.8.1942', status: '-', fund: 'לאומית' },
  { name: 'ישראלי רבקה', room: '206', birth: '18.12.1940', status: '-', fund: 'כללית' },
  { name: 'כהן שושנה', room: '202', birth: '2.7.1939', status: '-', fund: 'כללית' },
  { name: 'כץ אלכסנדר', room: '205', birth: '5.9.1937', status: '-', fund: 'מכבי' },
  { name: 'לוי רפאל', room: '201', birth: '14.3.1941', status: '-', fund: 'מכבי' },
  { name: 'לם בני', room: '103', birth: '20.5.1948', status: 'בעזרה', fund: 'מכבי' },
  { name: 'מזרחי שרה', room: '204', birth: '30.5.1943', status: '-', fund: 'מאוחדת' },
  { name: 'פרידמן מרדכי', room: '203', birth: '21.11.1938', status: '-', fund: 'לאומית' },
];

export default function ResidentsPage() {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h1>דיירים</h1>
          <p className="muted">9 דיירים במערכת</p>
        </div>
        <div className="quick-actions">
          <button className="primary">הוסף דייר</button>
          <button className="ghost">גיבוי Google</button>
          <button className="ghost">הדפסה</button>
          <button className="ghost">ייצוא CSV</button>
          <button className="ghost">ארכיון דיירים</button>
          <button className="ghost">עמודות</button>
        </div>
      </div>

      <div className="section-card">
        <div className="search-bar">
          <input placeholder="חיפוש לפי שם או ת.ז..." />
        </div>
        <div className="filters" style={{ marginTop: '12px' }}>
          <select defaultValue=""> 
            <option value="">סטטוס</option>
            <option>פעיל</option>
            <option>מאושפז</option>
            <option>שוחרר</option>
            <option>נפטר</option>
          </select>
          <select defaultValue="">
            <option value="">קופת חולים</option>
            <option>כללית</option>
            <option>מכבי</option>
            <option>מאוחדת</option>
            <option>לאומית</option>
          </select>
          <select defaultValue="">
            <option value="">כל המחלקות</option>
            <option>מחלקה א׳</option>
            <option>מחלקה ב׳</option>
          </select>
          <select defaultValue="">
            <option value="">כל הקופות</option>
            <option>כללית</option>
            <option>מכבי</option>
            <option>מאוחדת</option>
            <option>לאומית</option>
          </select>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>פעולות</th>
            <th>שם</th>
            <th>חדר</th>
            <th>תאריך לידה</th>
            <th>סטטוס</th>
            <th>קופת חולים</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <tr key={resident.name}>
              <td>🔗</td>
              <td>{resident.name}</td>
              <td>{resident.room}</td>
              <td>{resident.birth}</td>
              <td>{resident.status}</td>
              <td>{resident.fund}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
