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
    <main className="directions-canvas">
      <h1 className="visually-hidden">Tunniplaani vaatesuunad</h1>

      <section className="schedule-frame" aria-labelledby="previous-view-title">
        <header className="schedule-header">
          <p className="schedule-eyebrow">Haapsalu kolledž</p>
          <h2 id="previous-view-title">Tunniplaan</h2>
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

        <section className="schedule-week" aria-label="46. nädala tunnid">
          {scheduleDays.map((day) => (
            <section className="schedule-day" key={`previous-${day.date}`}>
              <header>
                <h3>{day.weekday}</h3>
                <time dateTime={day.date}>{day.displayDate}</time>
              </header>

              <div className="schedule-lessons">
                {day.lessons.map((lesson) => (
                  <article
                    className="schedule-lesson-card"
                    key={`previous-${day.date}-${lesson.startTime}`}
                  >
                    <p className="schedule-lesson-time">
                      <time dateTime={`${day.date}T${lesson.startTime}`}>
                        {lesson.startTime}
                      </time>
                      <span aria-hidden="true">–</span>
                      <time dateTime={`${day.date}T${lesson.endTime}`}>
                        {lesson.endTime}
                      </time>
                    </p>
                    <div className="schedule-lesson-details">
                      <h4>{lesson.title}</h4>
                      <p>{lesson.courseCode}</p>
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
      </section>

      <section className="mobile-frame" aria-labelledby="current-view-title">
        <header className="mobile-header">
          <p>Haapsalu kolledž</p>
          <h2 id="current-view-title">Tunniplaan</h2>
          <dl>
            <div>
              <dt>Rühm</dt>
              <dd>RIF 2</dd>
            </div>
            <div>
              <dt>Nädal</dt>
              <dd>09.–15. november 2026</dd>
            </div>
          </dl>
        </header>

        <section className="mobile-week" aria-label="46. nädala tunnid">
          {scheduleDays.map((day) => (
            <section
              className="mobile-day"
              aria-labelledby={`day-${day.date}`}
              key={day.date}
            >
              <header>
                <h3 id={`day-${day.date}`}>{day.weekday}</h3>
                <time dateTime={day.date}>{day.displayDate}</time>
              </header>

              <div className="mobile-lessons">
                {day.lessons.map((lesson) => (
                  <article
                    className="mobile-lesson-card"
                    key={`${day.date}-${lesson.startTime}`}
                  >
                    <p className="mobile-lesson-time">
                      <time dateTime={`${day.date}T${lesson.startTime}`}>
                        {lesson.startTime}
                      </time>
                      <time dateTime={`${day.date}T${lesson.endTime}`}>
                        {lesson.endTime}
                      </time>
                    </p>
                    <div>
                      <h4>{lesson.title}</h4>
                      <p>{lesson.courseCode}</p>
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
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
