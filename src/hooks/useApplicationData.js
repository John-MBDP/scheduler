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

  // console.log("This is state.days ================", state.days);
  function updateSpots(requestType) {
    const days = state.days.map((day) => {
      if (day.name === state.day) {
        if (requestType === "bookAppointment") {
          return { ...day, spots: day.spots - 1 };
        } else {
          return { ...day, spots: day.spots + 1 };
        }
      } else {
        return { ...day };
      }
    });
    return days;
  }

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    // setState({
    //   ...state,
    //   appointments,
    // });
    // console.log("This is id", state.appointments[id]);
    // const days = [...state.days];

    // let interviewExists;

    // if (state.appointments[id]) {
    //   interviewExists = state.appointments[id].interview;
    // } else {
    //   interviewExists = false;
    // }

    // if (!interviewExists) {
    //   for (const day of days) {
    //     for (const appointment of day.appointments) {
    //       if (id === appointment) {
    //         day.spots = day.spots - 1;
    //       }
    //     }
    //   }
    // }

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((res) => {
        const days = updateSpots("bookAppointment");
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

    // const days = [...state.days];

    // console.log("This is days", days);
    // console.log("What is ID", id);

    // for (const day of days) {
    //   for (const appointment of day.appointments) {
    //     if (id === appointment) {
    //       day.spots = day.spots + 1;
    //     }
    //   }
    // }
    return axios.delete(`http://localhost:8001/api/appointments/${id}`).then((res) => {
      const days = updateSpots();
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
