import React from "react";
import classNames from "classnames";
import "./DayListItem.scss";

export default function DayListItem(props) {
  const { name, spots, setDay, selected } = props;
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots,
  });

  //Handles if there's no available spots for a given day
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
    <li data-testid="day" onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()} </h3>
    </li>
  );
}
