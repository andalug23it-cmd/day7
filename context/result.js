import React from "react";
import { useVote } from "../context/VoteContext";

function Results() {
  const { votes } = useVote();

  return (
    <div className="page">
      <h1>Voting Results 📊</h1>
      <ul>
        {Object.entries(votes).map(([option, count]) => (
          <li key={option}>
            {option}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
