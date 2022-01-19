import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // :rename variable
  const { day, days, setDay } = props;
  console.log(props);

  const schedule = days.map((selectedDay) => <DayListItem key={selectedDay.id} name={selectedDay.name} spots={selectedDay.spots} selected={selectedDay.name === day} setDay={setDay} />);
  return <ul>{schedule}</ul>;
}
