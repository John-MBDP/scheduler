import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // :rename variable
  const { day: selectedDay, days, setDay } = props;
  console.log(props);

  const schedule = days.map((day) => <DayListItem key={day.id} name={day.name} spots={day.spots} selected={day.name === selectedDay} setDay={setDay} />);

  return <ul>{schedule}</ul>;
}
