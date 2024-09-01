"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/lib/features/counter";
import Button from "@mui/material/Button";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(increment())} color="primary">
        Increment
      </Button>
      <Button onClick={() => dispatch(decrement())} color="secondary">
        Decrement
      </Button>
      <Button onClick={() => dispatch(incrementByAmount(5))} color="primary">
        Increment by 5
      </Button>
    </div>
  );
};

export default Counter;
