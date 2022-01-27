import React from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer } = props;

  //Use default style if it's not selected
  const interviewerEffect = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  const interviewerImg = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": selected,
  });

  return (
    <li onClick={setInterviewer} className={interviewerEffect}>
      <img className={interviewerImg} src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
