import React from "react";
import { useState } from "react";
import Boxes from "./Boxes";

const GameScreen = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      // console.log(logic);

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();
  // console.log(isWinner);
  const handleEvent = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];

    copyState[index] = isXTurn ? "x" : "o";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
  console.log(isWinner);
  return (
    <div className="w-screen max-w-7xl min-h-screen flex justify-center flex-col items-center select-none">
      <h1 className="text-[#ff9a9e] font-bold text-2xl mb-5 ">
        {isXTurn ? "X" : "O"}'s Turn!
      </h1>
      <div className=" w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-br from-[#ff9a9e] to-[#ffaa93] grid grid-cols-3 grid-rows-3 gap-1 overflow-hidden place-items-stretch relative rounded-lg">
        {isWinner ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center flex-col text-center ">
            <h1 className="text-white font-bold text-4xl sm:text-5xl">{`${isWinner} won!`}</h1>

            <button
              className="w-fit h-fit p-2 bg-white rounded-md mt-3 font-semibold text-[#f1a894]"
              onClick={() => {
                setState(Array(9).fill(null));
              }}
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <Boxes value={state[0]} onClick={() => handleEvent(0)} />
            <Boxes value={state[1]} onClick={() => handleEvent(1)} />
            <Boxes value={state[2]} onClick={() => handleEvent(2)} />
            <Boxes value={state[3]} onClick={() => handleEvent(3)} />
            <Boxes value={state[4]} onClick={() => handleEvent(4)} />
            <Boxes value={state[5]} onClick={() => handleEvent(5)} />
            <Boxes value={state[6]} onClick={() => handleEvent(6)} />
            <Boxes value={state[7]} onClick={() => handleEvent(7)} />
            <Boxes value={state[8]} onClick={() => handleEvent(8)} />
          </>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
