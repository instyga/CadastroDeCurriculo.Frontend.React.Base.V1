import { PropTypes } from "prop-types";
import { createContext } from "react";
import { useStepper } from "../hooks/use-stepper";

export const FormContext = createContext({
  step: 0,
  incrementStep: () => void 0,
  canIncrement: false,
  decrementStep: () => void 0,
  canDecrement: false,
  registerStepQuantity: () => void 0,
  quantity: 0,
});

export const FormContextProvider = ({ children }) => {
  const stepper = useStepper();

  return (
    <FormContext.Provider value={{ ...stepper }}>
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
