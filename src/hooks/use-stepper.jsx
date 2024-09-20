import { useState } from "react";

export const useStepper = () => {
  const [step, setStep] = useState(1);
  const [maxSteps, setMaxSteps] = useState(0);

  const incrementStep = () => setStep((prev) => prev + 1);
  const canIncrement = step < maxSteps - 1;
  const decrementStep = () => setStep((prev) => prev - 1);
  const canDecrement = step > 1;

  const registerStepQuantity = (value) => setMaxSteps(value);

  return {
    step,
    quantity: maxSteps,
    incrementStep,
    canIncrement,
    decrementStep,
    canDecrement,
    registerStepQuantity,
  };
};
