import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;

  console.log("props: ", props);
  // console.log("setInterviewer: ", setInterviewer);

  const listOfInterviews = interviewers.map((listInterviewer) => <InterviewerListItem key={listInterviewer.id} name={listInterviewer.name} avatar={listInterviewer.avatar} setInterviewer={() => onChange(listInterviewer.id)} selected={listInterviewer.id === value} />);

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listOfInterviews}</ul>
    </section>
  );
}
