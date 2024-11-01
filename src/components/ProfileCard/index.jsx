import ProfilePicture from "@/assets/images/image-jeremy.png";
import "./style.css";

export default function ProfileCard({ handleClick, selectedButton }) {
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <img
          className="profile-card__picture"
          src={ProfilePicture}
          alt="profile picture"
        />
        <div className="profile-card__info">
          <p className="profile-card__report-text">
            <span className="report">Report for</span>
          </p>
          <p className="profile-card__name">Jeremy Robson</p>
        </div>
      </div>
      <div className="profile-card__buttons">
        <button
          className={`profile-card__button ${
            selectedButton === "Daily" && "highlighted-button-color"
          }`}
          onClick={() => handleClick("Daily")}
        >
          Daily
        </button>
        <button
          className={`profile-card__button ${
            selectedButton === "Weekly" && "highlighted-button-color"
          }`}
          onClick={() => handleClick("Weekly")}
        >
          Weekly
        </button>
        <button
          className={`profile-card__button ${
            selectedButton === "Monthly" && "highlighted-button-color"
          }`}
          onClick={() => handleClick("Monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
