"use client";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl text-red-500 font-semibold my-4">Simple Counter: {counter}</h1>
                <div className="">
                <button className="btn btn-primary mr-3" onClick={() => setCounter(counter + 1)}>
                    Increase
                </button>
                <button className="btn btn-primary mr-3" onClick={() => setCounter(counter - 1)}>
                    Decrease
                </button>
                <button className="btn btn-primary" onClick={() => setCounter(0)}>
                    Reset
                </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;