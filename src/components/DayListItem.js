import React from "react";
import classNames from "classnames";
import "./DayListItem.scss";

export default function DayListItem(props) {
  const { name, spots, setDay, selected } = props;
  const dayClass = classNames("day-list__item", { "day-list__item--selected": selected, "day-list__item--full": !spots });
  const formatSpots = () => {
    if (!spots) {
      return `no spots remaining`;
    }

    if (spots === 1) {
      return `${spots} spot remaining`;
    }
    return `${spots} spots remaining`;
  };

  return (
    <li onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">Day {name}</h2>
      <h3 className="text--light">{formatSpots()} </h3>
    </li>
  );
}