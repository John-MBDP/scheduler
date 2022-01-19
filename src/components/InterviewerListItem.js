import React from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, setInterviewer } = props;
  console.log(props);
  const interviewerEffect = classNames("interviewers__item", { "interviewers__item--selected": selected });

  return (
    <li
      onClick={() => {
        setInterviewer(id);
      }}
      className={interviewerEffect}
    >
      <img className="interviewers__item-image" src={avatar} alt="Sylvia Palmer" />
      {name}
    </li>
  );
}
