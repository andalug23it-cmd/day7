import React from "react";
import { useVote } from "../context/VoteContext";

function Vote() {
  const { castVote } = useVote();

  return (
    <div className="page">
      <h1>Cast Your Vote 🗳️</h1>
      <button onClick={() => castVote("React")}>React</button>
      <button onClick={() => castVote("CSS")}>CSS</button>
      <button onClick={() => castVote("JavaScript")}>JavaScript</button>
      <button onClick={() => castVote("HTML")}>HTML</button>
    </div>
  );
}

export default Vote;
