import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, setInterviewer, interviewer } = props;

  console.log("props: ", props);
  console.log("setInterviewer: ", setInterviewer);

  const listOfInterviews = interviewers.map((listInterviewer) => <InterviewerListItem key={listInterviewer.id} name={listInterviewer.name} avatar={listInterviewer.avatar} setInterviewer={setInterviewer} id={listInterviewer.id} selected={interviewer === listInterviewer.id} />);
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listOfInterviews}</ul>
    </section>
  );
}
