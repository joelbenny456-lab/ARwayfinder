import { useState } from 'react';
import MapPage from './pages/MapPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

const PAGES = {
  map: { label: '🗺️ 3D Map', component: MapPage },
  calendar: { label: '📅 AI Calendar', component: CalendarPage },
  AboutPage: { label: '📅 About', component: AboutPage },
};

export default function App() {
  const [page, setPage] = useState('calendar');
  const Page = PAGES[page].component;

  return (
    <div className="app">
      <nav className="nav">
        <strong>App Dev Course</strong>
        {Object.entries(PAGES).map(([key, { label }]) => (
          <a key={key} href="#" className={page === key ? 'active' : ''}
             onClick={(e) => { e.preventDefault(); setPage(key); }}>
            {label}
          </a>
        ))}
      </nav>
      <main className="main">
        <Page />
      </main>
    </div>
  );
}
