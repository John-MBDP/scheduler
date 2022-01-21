function getAppointmentsForDay(state, day) {
  let filteredDay = state.days.filter((d) => d.name === day)[0];
  if (!filteredDay) {
    return [];
  }

  let results = [];
  if (filteredDay.appointments.length > 0) {
    for (let id of filteredDay.appointments) {
      results.push(state.appointments[id]);
    }
  }
  return results;
}

function getInterview(state, interview) {
  let interviewObj = state.interviewers;
  if (!interview || !interviewObj) {
    return null;
  }

  let results = {};
  for (let key of Object.keys(interviewObj)) {
    let interviewer = interviewObj[key];
    if (interviewer.id === interview.interviewer) {
      results["interviewer"] = interviewer;
      results["student"] = interview.student;
    }
  }

  return results;
}

export { getAppointmentsForDay, getInterview };
