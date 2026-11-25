import { StrictMode, useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";

const scheduleDays = [
  {
    date: "2026-11-12",
    weekday: "Neljapäev",
    displayDate: "12. november",
    lessons: [
      {
        startTime: "10:00",
        endTime: "13:15",
        title: "Veebiraamistike rakendamine",
        courseCode: "HKI5122.HK",
        lecturer: "Juho Kalberg",
      },
      {
        startTime: "14:15",
        endTime: "17:30",
        title: "Kasutajaliidese disain",
        courseCode: "HKI5120.HK",
        lecturer: "Juho Kalberg",
      },
    ],
  },
  {
    date: "2026-11-13",
    weekday: "Reede",
    displayDate: "13. november",
    lessons: [
      {
        startTime: "10:00",
        endTime: "13:15",
        title: "Tagarakenduste arendamine",
        courseCode: "HKI5123.HK",
        lecturer: "Martti Raavel",
      },
      {
        startTime: "14:15",
        endTime: "17:30",
        title: "Andmebaasid",
        courseCode: "HKI5121.HK",
        lecturer: "Priidu Paomets",
      },
      {
        startTime: "17:30",
        endTime: "20:00",
        title: "Videomängude disain",
        courseCode: "HKI5060.HK",
        lecturer: "Argo Ilves",
      },
    ],
  },
];

function WeekSummary({ lessonCount }) {
  return (
    <div className="week-context">
      <p className="group-name">RIF 2</p>
      <p className="week-dates">
        <time dateTime="2026-11-09">09.11.2026</time>–<time dateTime="2026-11-15">15.11.2026</time>
      </p>
      <p className="week-summary">46. nädal · {lessonCount} tundi</p>
    </div>
  );
}

const themePreference = "(prefers-color-scheme: dark)";
const themeStorageKey = "schedule-theme";

function readTheme() {
  try {
    const saved = localStorage.getItem(themeStorageKey);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // The button also works when storage is unavailable.
  }
  return null;
}

function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Tume teema"
      aria-pressed={dark}
      onClick={onToggle}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dark ? (
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        ) : (
          <path d="M20.9 13.35a9 9 0 0 1-10.25-10.25A9 9 0 1 0 20.9 13.35Z" />
        )}
      </svg>
    </button>
  );
}

function ScheduleHeader({ lessonCount, dark, onToggle }) {
  return (
    <header className="schedule-header">
      <p className="college-name">Haapsalu kolledž</p>
      <h1>Tunniplaan</h1>
      <WeekSummary lessonCount={lessonCount} />
      <ThemeToggle dark={dark} onToggle={onToggle} />
    </header>
  );
}

function LessonCard({ date, lesson }) {
  const { startTime, endTime, title, courseCode, lecturer, location } = lesson;

  return (
    <article className="lesson-card" data-course={courseCode}>
      <p className="lesson-time">
        <time dateTime={`${date}T${startTime}`}>{startTime}</time>–
        <time dateTime={`${date}T${endTime}`}>{endTime}</time>
      </p>
      <h3>{title}</h3>
      <p className="course-code">{courseCode}</p>
      <p>Õppejõud: {lecturer}</p>
      <p>Asukoht: {location ?? "Ei ole allikas näidatud"}</p>
    </article>
  );
}

function ScheduleDay({ day }) {
  const headingId = `day-${day.date}`;

  return (
    <section className="schedule-day" aria-labelledby={headingId}>
      <h2 id={headingId}>
        {day.weekday}, <time dateTime={day.date}>{day.displayDate}</time>
      </h2>
      <ul className="lesson-list" role="list">
        {day.lessons.map((lesson) => (
          <li key={lesson.startTime}>
            <LessonCard date={day.date} lesson={lesson} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const [selectedTheme, setSelectedTheme] = useState(readTheme);
  const [systemDark, setSystemDark] = useState(() => matchMedia(themePreference).matches);
  const dark = selectedTheme === null ? systemDark : selectedTheme === "dark";

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useLayoutEffect(() => {
    const query = matchMedia(themePreference);
    const update = (event) => setSystemDark(event.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    setSelectedTheme(next);
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {
      // Keep the selected theme for the current page.
    }
  }

  const lessonCount = scheduleDays.reduce((total, day) => total + day.lessons.length, 0);

  return (
    <div className="schedule-canvas">
      <main className="schedule">
        <ScheduleHeader lessonCount={lessonCount} dark={dark} onToggle={toggleTheme} />
        <div className="schedule-days">
          {scheduleDays.map((day) => <ScheduleDay key={day.date} day={day} />)}
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
