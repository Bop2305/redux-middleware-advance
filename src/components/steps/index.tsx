import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { FormProvider } from "react-hook-form";

type StepsProps = {
  steps: { label: string; element: React.ReactNode }[];
  method: any;
  activeStep: number;
  setActiveStep: any;
};

const Steps: React.FC<StepsProps> = ({
  steps,
  method,
  activeStep,
  setActiveStep,
}) => {
  const handleBack = () => {
    setActiveStep((prevValues: number) => prevValues - 1);
  };

  const handleNext = async () => {
    const isNext = await method.trigger();
    if (isNext) setActiveStep((prevValues: number) => prevValues + 1);
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box width={"900px"} margin={"auto"}>
        <FormProvider {...method}>{steps[activeStep].element}</FormProvider>
      </Box>

      <Box display={"flex"} gap={"10px"} justifyContent={"center"} mt={2}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button onClick={method.handleSubmit(onSubmit)}>Submit</Button>
        ) : (
          <Button
            disabled={activeStep >= steps.length - 1}
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Box>
    </>
  );
};

export default Steps;
