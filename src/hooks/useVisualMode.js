import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //transition to a new mode
  function transition(current, replace) {
    replace && back();
    let newHistory = [...history];
    newHistory.push(current);
    setHistory(newHistory);
    setMode(current);
  }

  function back() {
    let newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  }
  return { mode, transition, back };
}
