import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";
import PropTypes from "prop-types";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;

  //Goes through the list of all interviewers
  const listOfInterviews = interviewers.map((listInterviewer) => (
    <InterviewerListItem
      key={listInterviewer.id}
      name={listInterviewer.name}
      avatar={listInterviewer.avatar}
      setInterviewer={() => onChange(listInterviewer.id)}
      selected={listInterviewer.id === value}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listOfInterviews}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
