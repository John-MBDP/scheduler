import React from "react";
import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { id, name, avatar, setInterviewer } = props;
  console.log(props);

  return (
    <li
      onClick={() => {
        setInterviewer(id);
      }}
      className="interviewers__item"
    >
      <img className="interviewers__item-image" src={avatar} alt="Sylvia Palmer" />
      {name}
    </li>
  );
}
