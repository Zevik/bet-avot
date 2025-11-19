export default function SettingsPage() {
  return (
    <div className="page">
      <h1>הגדרות</h1>
      <p className="muted">התאמות מערכת, שפה, נגישות ואבטחה.</p>

      <div className="grid cols-2">
        <div className="section-card">
          <h3>שפה וממשק</h3>
          <div className="form-group">
            <label>שפה</label>
            <select defaultValue="he">
              <option value="he">עברית (RTL)</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="form-group">
            <label>מצב תצוגה</label>
            <div className="chips">
              <span className="chip chip-primary">בהיר</span>
              <span className="chip">כהה</span>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h3>התראות</h3>
          <div className="form-group">
            <label>ערוצי התראה</label>
            <div className="chips">
              <span className="chip">Push</span>
              <span className="chip">Email</span>
              <span className="chip">SMS</span>
            </div>
          </div>
          <div className="form-group">
            <label>התראות קריטיות</label>
            <p className="muted">רגישויות תרופות, התנגשויות, תוצאות מעבדה חריגות.</p>
          </div>
        </div>

        <div className="section-card">
          <h3>הרשאות ותפקידים</h3>
          <p className="muted">מיפוי תפקידים לפי האפיון: רופא/ה, אחות, מקצועי, מנהל, רופא מבקר.</p>
          <div className="chips" style={{ marginBottom: '8px' }}>
            <span className="chip">רופא/ה</span>
            <span className="chip">אח/ות</span>
            <span className="chip">מקצועי</span>
            <span className="chip">מנהל/ת</span>
            <span className="chip">רופא/ה מבקר/ת</span>
          </div>
          <div className="form-group">
            <label>אפשרויות הרשאה</label>
            <ul className="muted">
              <li>גישה מלאה למידע רפואי / צפייה בלבד</li>
              <li>כתיבת מרשמים ואישור תרופות</li>
              <li>ניהול משתמשים והגדרות מערכת</li>
            </ul>
          </div>
        </div>

        <div className="section-card">
          <h3>אבטחה</h3>
          <div className="form-group">
            <label>אימות דו שלבי</label>
            <div className="chips">
              <span className="chip chip-primary">מופעל</span>
              <span className="chip">כבוי</span>
            </div>
          </div>
          <div className="form-group">
            <label>מדיניות סיסמאות</label>
            <p className="muted">מינימום 8 תווים, שילוב אותיות, מספרים וסימנים, החלפה כל 90 יום.</p>
          </div>
          <div className="form-group">
            <label>ניהול סשן</label>
            <input placeholder="לדוגמה: התנתק לאחר 30 דקות חוסר פעילות" />
          </div>
        </div>
      </div>
    </div>
  );
}
