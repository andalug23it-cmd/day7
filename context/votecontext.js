import React, { createContext, useState, useContext } from "react";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    React: 0,
    CSS: 0,
    JavaScript: 0,
    HTML: 0,
  });

  const castVote = (option) => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  return (
    <VoteContext.Provider value={{ votes, castVote }}>
      {children}
    </VoteContext.Provider>
  );
};

export const useVote = () => useContext(VoteContext);
