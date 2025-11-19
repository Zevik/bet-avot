const staff = [
  { name: 'יוסי נבון', role: 'רופא/ה', phone: '050-1234567', shift: 'בוקר' },
  { name: 'אורלי ברק', role: 'אחות אחראית', phone: '050-2223344', shift: 'ערב' },
  { name: 'דן לוי', role: 'פיזיותרפיסט', phone: '050-9988776', shift: 'בוקר' },
  { name: 'מאיה כהן', role: 'עובדת סוציאלית', phone: '050-6655443', shift: 'צהריים' },
];

export default function StaffPage() {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h1>צוות</h1>
          <p className="muted">ניהול צוות המוסד, תפקידים ומשמרות.</p>
        </div>
        <div className="quick-actions">
          <button className="primary">+ הוסף משתמש</button>
          <button className="ghost">ייבוא מקובץ</button>
          <button className="ghost">משמרת</button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>שם</th>
            <th>תפקיד</th>
            <th>משמרת</th>
            <th>טלפון</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member) => (
            <tr key={member.name}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td>{member.shift}</td>
              <td>{member.phone}</td>
              <td>עריכה • השבתה • צפייה</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
