import iconEllipsis from "@/assets/images/icon-ellipsis.svg";
import classNames from "classnames";
import "./style.css";

export default function TimeCard({ category, svgs, selectedButton }) {
  const title = category.title;
  const svgSource = svgs[title];
  const classes = classNames("time-card", {
    "work-background-color": title === "Work",
    "play-background-color": title === "Play",
    "study-background-color": title === "Study",
    "exercise-background-color": title === "Exercise",
    "social-background-color": title === "Social",
    "self-care-background-color": title === "Self Care",
  });

  let timeframe;
  let message;
  switch (selectedButton) {
    case "Daily":
      timeframe = category.timeframes.daily;
      message = "Yesterday";
      break;
    case "Weekly":
      timeframe = category.timeframes.weekly;
      message = "Last Week";
      break;
    case "Monthly":
      timeframe = category.timeframes.monthly;
      message = "Last Month";
      break;
  }

  const currentHours = `${timeframe.current}hrs`;
  let previousHours = `${timeframe.previous}hrs`;

  return (
    <div className={classes}>
      <img className="time-card__svg" src={svgSource} alt="svg" />
      <div className="time-card__main-container">
        <div className="time-card__title-container">
          <p className="time-card__title">{category.title}</p>
          <div className="time-card__icon-container">
            <img className="time-card__icon" src={iconEllipsis} alt="options" />
          </div>
        </div>
        <div className="time-card__time-holder">
          <p className="time-card__hours">{currentHours}</p>
          <p className="time-card__previous-hours">
            {`${message} - ${previousHours}`}
          </p>
        </div>
      </div>
    </div>
  );
}
