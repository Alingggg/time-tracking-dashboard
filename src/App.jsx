import './App.css';
import TimeCard from "@/components/TimeCard";
import ProfileCard from "@/components/ProfileCard";
import data from "@/assets/data.json";
import WorkSvg from "@/assets/images/icon-work.svg";
import PlaySvg from "@/assets/images/icon-play.svg";
import StudySvg from "@/assets/images/icon-study.svg";
import ExerciseSvg from "@/assets/images/icon-exercise.svg";
import SocialSvg from "@/assets/images/icon-social.svg";
import SelfCareSvg from "@/assets/images/icon-self-care.svg";
import { useState } from 'react';

const svgs = {
  'Work': WorkSvg,
  'Play': PlaySvg,
  'Study': StudySvg,
  'Exercise': ExerciseSvg,
  'Social': SocialSvg,
  'Self Care': SelfCareSvg
};

function App() {
  const [selectedButton, setSelectedButton] = useState('Weekly');

  return (
    <div className="main">
      <ProfileCard
        handleClick={(period) => setSelectedButton(period)}
        selectedButton={selectedButton}
      />
      {data.map((object) => (
        <TimeCard
          key={object.title}
          category={object}
          svgs={svgs}
          selectedButton={selectedButton}
        ></TimeCard>
      ))}
    </div>
  );
}

export default App;
