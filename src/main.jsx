import { StrictMode, useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { novemberSchedule } from "./november-schedule.js";
import "./styles/main.css";

const weekSchedule = novemberSchedule.filter(({ date }) => date >= "2026-11-09" && date <= "2026-11-15");
const monthWeekdays = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev", "Pühapäev"];
const monthDates = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;
  return `2026-11-${String(day).padStart(2, "0")}`;
});
const lessonsByDate = new Map(novemberSchedule.map((day) => [day.date, day]));
function weekStart(date) {
  const monday = new Date(date);
  const daysSinceMonday = (monday.getUTCDay() + 6) % 7;
  monday.setUTCDate(monday.getUTCDate() - daysSinceMonday);
  return monday.toISOString().slice(0, 10);
}

const monthWeekStarts = new Set(novemberSchedule.slice(1).filter((day, index) => (
  weekStart(day.date) !== weekStart(novemberSchedule[index].date)
)).map(({ date }) => date));


function WeekSummary({ lessonCount, month }) {
  return (
    <div className="week-context">
      <p className="group-name">RIF 2</p>
      <p className="week-dates">
        {month ? <time dateTime="2026-11">November 2026</time> : (
          <><time dateTime="2026-11-09">09.11.2026</time>–<time dateTime="2026-11-15">15.11.2026</time></>
        )}
      </p>
      <p className="week-summary">{!month && "46. nädal · "}{lessonCount} tundi</p>
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

function ScheduleHeader({ lessonCount, month, onChangeView, dark, onToggle }) {
  return (
    <header className="schedule-header">
      <p className="college-name">Haapsalu kolledž</p>
      <h1>Tunniplaan</h1>
      <WeekSummary lessonCount={lessonCount} month={month} />
      <div className="view-switch" role="group" aria-label="Tunniplaani vaade">
        <button type="button" aria-pressed={!month} onClick={() => onChangeView(false)}>Nädal</button>
        <button type="button" aria-pressed={month} onClick={() => onChangeView(true)}>Kuu</button>
      </div>
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

function MonthDay({ day, startsWeek }) {
  const headingId = `month-day-${day.date}`;

  return (
    <section className="schedule-day" data-week-start={startsWeek || undefined} aria-labelledby={headingId}>
      <h2 id={headingId}>
        {day.weekday}, <time dateTime={day.date}>{day.displayDate}</time>
      </h2>
      <ul className="lesson-list" role="list">
        {day.lessons.map(({ startTime, endTime, title, courseCode }) => (
          <li className="lesson-card month-lesson" data-course={courseCode} key={startTime}>
            <p className="month-lesson-time">
              <time dateTime={`${day.date}T${startTime}`}>{startTime}</time>–
              <time dateTime={`${day.date}T${endTime}`}>{endTime}</time>
            </p>
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MonthSchedule() {
  return (
    <section className="month-calendar" aria-label="Novembri tunnid">
      <div className="month-weekdays" aria-hidden="true">
        {monthWeekdays.map((day) => <span key={day}>{day}</span>)}
      </div>
      <div className="month-days">
        {monthDates.map((date) => {
          const day = lessonsByDate.get(date);
          return day ? (
            <MonthDay key={date} day={day} startsWeek={monthWeekStarts.has(date)} />
          ) : (
            <div className="month-empty" key={date}>
              <time dateTime={date}>{Number(date.slice(-2))}</time>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function App() {
  const [month, setMonth] = useState(false);
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

  const visibleSchedule = month ? novemberSchedule : weekSchedule;
  const lessonCount = visibleSchedule.reduce((total, day) => total + day.lessons.length, 0);

  return (
    <div className="schedule-canvas">
      <main className="schedule">
        <ScheduleHeader lessonCount={lessonCount} month={month} onChangeView={setMonth} dark={dark} onToggle={toggleTheme} />
        {month ? <MonthSchedule /> : (
          <div className="schedule-days">
            {weekSchedule.map((day) => <ScheduleDay key={day.date} day={day} />)}
          </div>
        )}
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
