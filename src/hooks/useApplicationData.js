import { useState, useEffect } from "react";
import axios from "axios";

function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  //Handles updating the spots available
  function updateSpots(increment) {
    const day = state.days.find((d) => d.name === state.day);
    const newDay = { ...day, spots: day.spots + increment };

    return state.days.map((d) => (d.name === state.day ? newDay : d));
  }

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
    };

    const editingInterview = appointment.interview !== null;
    appointment.interview = { ...interview };
    let days = [...state.days];

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((res) => {
        if (!editingInterview) {
          days = updateSpots(-1);
        }
        setState((prev) => ({ ...prev, appointments, days }));
      })
      .catch((err) => console.log(err));
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`http://localhost:8001/api/appointments/${id}`).then((res) => {
      const days = updateSpots(1);
      setState((prev) => ({ ...prev, appointments, days }));
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}

export default useApplicationData;
