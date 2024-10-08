import { Typography } from "@mui/material";
import requireAuth from "./requireAuth";
import Steps from "./steps";
import { useForm } from "react-hook-form";
import Step from "./steps/Step";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Feature = () => {
  const [activeStep, setActiveStep] = useState(0);

  const validationSchema = [
    yup.object({
      email: yup.string().required("Email required"),
      sex: yup.string().required("Sex required"),
    }),
    yup.object({
      address: yup.string().required("Address required"),
    }),
    yup.object({
      code: yup
        .string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .matches(/^[0-9]{4,}$/, "Must be exactly 4 digits"),
    }),
  ];

  const defaultValues = {
    email: "",
    sex: "male",
    address: "",
    code: "",
  };

  const method = useForm({
    resolver: yupResolver(validationSchema[activeStep] as any),
    defaultValues,
  });

  return (
    <>
      <Typography sx={(theme) => ({ color: theme.palette.primary.main })}>
        This is feature
      </Typography>
      <Steps
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={[
          {
            label: "Step 1",
            element: (
              <Step
                formValues={[
                  {
                    label: "Email",
                    type: "text",
                    name: "email",
                    size: "small",
                  },
                  {
                    label: "Sex",
                    type: "select",
                    name: "sex",
                    size: "small",
                    options: [
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ],
                  },
                ]}
              />
            ),
          },
          {
            label: "Step 2",
            element: (
              <Step
                formValues={[
                  {
                    label: "Address",
                    type: "text",
                    name: "address",
                    size: "small",
                  },
                ]}
              />
            ),
          },
          {
            label: "Step 3",
            element: (
              <Step
                formValues={[
                  {
                    label: "Code",
                    type: "text",
                    name: "code",
                    size: "small",
                  },
                ]}
              />
            ),
          },
        ]}
        method={method}
      />
    </>
  );
};

export default requireAuth(Feature);
