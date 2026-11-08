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
  return (
    <main className="app-shell">
      <div className="schedule-view">
        <header className="page-header">
          <p className="eyebrow">Haapsalu kolledž</p>
          <h1>Tunniplaan</h1>
          <div className="schedule-context" aria-label="Tunniplaani valik">
            <p>
              <span>Rühm</span>
              <strong>RIF 2</strong>
            </p>
            <p>
              <span>Nädal</span>
              <strong>09.–15. november 2026</strong>
            </p>
          </div>
        </header>

        <section className="week-schedule" aria-labelledby="week-heading">
          <h2 id="week-heading" className="visually-hidden">
            46. nädala tunnid
          </h2>

          {scheduleDays.map((day) => (
            <section className="schedule-day" key={day.date}>
              <header className="day-header">
                <h3>{day.weekday}</h3>
                <time dateTime={day.date}>{day.displayDate}</time>
              </header>

              <div className="lesson-list">
                {day.lessons.map((lesson) => (
                  <article
                    className="lesson-card"
                    key={`${day.date}-${lesson.startTime}`}
                  >
                    <p className="lesson-time">
                      <time dateTime={`${day.date}T${lesson.startTime}`}>
                        {lesson.startTime}
                      </time>
                      <span aria-hidden="true">–</span>
                      <time dateTime={`${day.date}T${lesson.endTime}`}>
                        {lesson.endTime}
                      </time>
                    </p>
                    <div className="lesson-details">
                      <h4>{lesson.title}</h4>
                      <p className="course-code">{lesson.courseCode}</p>
                      <dl>
                        <div>
                          <dt>Õppejõud</dt>
                          <dd>{lesson.lecturer}</dd>
                        </div>
                        <div>
                          <dt>Asukoht</dt>
                          <dd>Ei ole allikas näidatud</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
