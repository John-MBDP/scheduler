export default function getAppointmentsForDay(state, day) {
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
