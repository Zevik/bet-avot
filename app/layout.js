import './globals.css';
import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['hebrew'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'HOMECARE+ | מערכת ניהול מוסדות סיעודיים',
  description: 'אפליקציית HOMECARE+ לניהול מוסדות סיעודיים - ממשק RTL מלא בעברית',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>
        <div className="app-shell">
          <aside className="sidebar">
            <div className="sidebar-header">
              <div className="logo">HOMECARE+</div>
              <div className="demo-badge">דמו</div>
            </div>
            <nav className="nav">
              <a href="/dashboard" className="nav-link">דשבורד</a>
              <a href="/doctorhome" className="nav-link">רופא/ה</a>
              <a href="/professional" className="nav-link">מקצועי</a>
              <a href="/calendar" className="nav-link">לוח שנה</a>
              <a href="/residents" className="nav-link">דיירים</a>
              <a href="/nursehome" className="nav-link">אח/ות</a>
              <a href="/nursingshiftreport" className="nav-link">דיווח סיעודי שוטף</a>
              <a href="/consolidatedcardexselector" className="nav-link">חלוקת תרופות</a>
              <a href="/staff" className="nav-link">צוות</a>
              <a href="/general" className="nav-link">כללי</a>
              <a href="/settings" className="nav-link">הגדרות</a>
              <a href="/securityprocedures" className="nav-link">נהלי אבטחת מידע</a>
              <a href="/stickynotes" className="nav-link">פתקים</a>
              <button className="nav-link nav-filter">פתקים אליי</button>
              <a href="/multidisciplinarymeetings" className="nav-link">ישיבות צוות</a>
            </nav>
            <div className="user-card">
              <div className="avatar">דר׳</div>
              <div className="user-info">
                <div className="user-name">יוסי נבון</div>
                <div className="user-role">רופא/ה</div>
              </div>
              <div className="user-actions">
                <button className="outlined">תמיכה טכנית</button>
                <button className="primary">עוזר</button>
                <button className="text">החלף משתמש</button>
              </div>
            </div>
          </aside>
          <main className="main">
            <header className="topbar">
              <div className="topbar-left">
                <button className="ghost">☰</button>
              </div>
              <div className="topbar-center">
                <div className="institution">בית אבות הדגמה</div>
                <span className="demo-chip">דמו</span>
              </div>
              <div className="topbar-actions">
                <button className="ghost">📄 צילום מסמך</button>
              </div>
            </header>
            <div className="content">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
