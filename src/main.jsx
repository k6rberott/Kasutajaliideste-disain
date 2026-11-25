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

function App() {
  const lessonCount = scheduleDays.reduce((total, day) => total + day.lessons.length, 0);

  return (
    <main className="schedule">
      <header className="schedule-header">
        <p className="college-name">Haapsalu kolledž</p>
        <h1>Tunniplaan</h1>
        <p className="group-name">RIF 2</p>
        <p className="week-dates">
          <time dateTime="2026-11-09">09.11.2026</time>–<time dateTime="2026-11-15">15.11.2026</time>
        </p>
        <p className="week-summary">46. nädal · {lessonCount} tundi</p>
      </header>

      {scheduleDays.map((day) => (
        <section className="schedule-day" aria-labelledby={`day-${day.date}`} key={day.date}>
          <h2 id={`day-${day.date}`}>
            {day.weekday}, <time dateTime={day.date}>{day.displayDate}</time>
          </h2>

          <ul className="lesson-list" role="list">
            {day.lessons.map((lesson) => (
              <li key={lesson.startTime}>
                <article className="lesson-card">
                  <p className="lesson-time">
                    <time dateTime={`${day.date}T${lesson.startTime}`}>{lesson.startTime}</time>–
                    <time dateTime={`${day.date}T${lesson.endTime}`}>{lesson.endTime}</time>
                  </p>
                  <h3>{lesson.title}</h3>
                  <p className="course-code">{lesson.courseCode}</p>
                  <p>Õppejõud: {lesson.lecturer}</p>
                  <p>Asukoht: Ei ole allikas näidatud</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
