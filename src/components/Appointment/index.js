import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status"

export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview } = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview);
    transition(SHOW);
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === CREATE && (
        <Form interviewers={interviewers} onCancel={() => back(EMPTY)} onSave={save} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} bookInterview={bookInterview} />}
      {mode === SHOW && (
        <Show student={interview.student} interviewer={interview.interviewer} bookInterview />
      )}
    </article>
  );
}
