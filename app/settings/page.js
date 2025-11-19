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
      </div>
    </div>
  );
}
