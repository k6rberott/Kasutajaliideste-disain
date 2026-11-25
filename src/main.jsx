import { StrictMode } from "react";
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

function ScheduleHeader({ lessonCount }) {
  return (
    <header className="schedule-header">
      <p className="college-name">Haapsalu kolledž</p>
      <h1>Tunniplaan</h1>
      <WeekSummary lessonCount={lessonCount} />
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
  const lessonCount = scheduleDays.reduce((total, day) => total + day.lessons.length, 0);

  return (
    <div className="schedule-canvas">
      <main className="schedule">
        <ScheduleHeader lessonCount={lessonCount} />
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
