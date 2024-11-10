import { useNavigate } from "react-router-dom";
import OrderCart from "./OrderCart";
import { useEffect, useState } from "react";


export default function RoulettePage({ ordersState, addOrder, decrementOrder, nameListState, nameState }) {
  const [displayedName, setDisplayedName] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let interval;
    if (isAnimating) {
      interval = setInterval(() => {
        // Randomly pick a name from the list
        const randomIndex = Math.floor(Math.random() * nameListState.length);
        setDisplayedName(nameListState[randomIndex]);
      }, 100); // Speed of name shuffling
    } else {
      clearInterval(interval);
    }

    // Cleanup interval on component unmount or when animation stops
    return () => clearInterval(interval);
  }, [isAnimating, nameListState]);

  const startSortition = () => {
    setIsAnimating(true);

    // Stop animation after 3 seconds and pick a random name
    setTimeout(() => {
      setIsAnimating(false);
      // Finalize with a randomly chosen name
      const finalIndex = Math.floor(Math.random() * nameListState.length);
      setDisplayedName(nameListState[finalIndex]);
    }, 3000);
  };
  
  return (
    <div className="flex align-center justify-center items-center h-full">
      <div className="card bg-base-200  w-full h-fit md:m-24 mt-24 md:shadow-xl">
        <div className="card-body items-center space-y-3">
      <h1 className="text-3xl font-bold mb-4">Roulette</h1>
      
      {isAnimating &&
        <div className="flex items-center justify-center bg-gray-100">
        <style>
          {`
            @keyframes spinRoulette {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            .spin-animation {
              animation: spinRoulette 3s linear infinite;
            }
          `}
        </style>

        <img
          src="https://images.vexels.com/content/151205/preview/roulette-wheel-icon-102263.png"
          alt="Roulette Wheel"
          className="w-48 h-48 spin-animation" // Applying the custom spin animation class
        />
      </div>
      }

      {/* Displaying the animated name */}
      <div className="p-4 text-2xl font-semibold bg-white shadow-lg rounded-lg daisyui-animation animation-bounce">
        {displayedName}
      </div>

      {/* Start button */}
      <button
        onClick={startSortition}
        className="mt-4 btn btn-primary"
        disabled={isAnimating}
      >
        {isAnimating ? "Shuffling..." : "Start Sortition"}
      </button>

      {/* Display the full list */}
      <div className="mt-6">
        <h2 className="text-xl font-medium">Participants:</h2>
        <ul className="list-disc list-inside">
          {nameListState.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
