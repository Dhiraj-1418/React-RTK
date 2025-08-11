import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "../Slices/counterSlice";

function Counter() {

  const count = useSelector((state)=>state.counter.value)
  const dispatch= useDispatch(inc, dec)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(inc())}>Increse By 1</button>
      <button onClick={()=> dispatch(dec())}>Decrese By 1</button>
    </div>
  );
}

export default Counter;
