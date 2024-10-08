import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";

const Profile: React.FC = () => {
  const infoSchema = yup
    .object({
      firstName: yup.string().required("First Name required"),
      lastName: yup.string().required("Last Name required"),
      email: yup.string().required("Email required"),
      street: yup.string().required("Street required"),
      // district: yup.string().required("District required"),
    })
    .required();

  const addressSchema = yup
    .object({
      street: yup.string().required("Street required"),
      district: yup.string().required("District required"),
    })
    .required();

  const infoResultForm = useForm({
    resolver: yupResolver(infoSchema),
  });

  const addressResultForm = useForm({
    resolver: yupResolver(addressSchema),
  });

  return (
    <>
      <FormProvider {...infoResultForm}>
        <Box
          sx={(theme) => ({})}
          display="flex"
          flexDirection={"column"}
          gap={"10px"}
        >
          <Typography>Profile</Typography>
          <TextField
            label="First Name"
            size="small"
            fullWidth
            {...infoResultForm.register("firstName")}
            error={!!infoResultForm.formState.errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            size="small"
            fullWidth
            {...infoResultForm.register("lastName")}
            error={!!infoResultForm.formState.errors.lastName?.message}
          />
          <TextField
            label="Email"
            size="small"
            fullWidth
            {...infoResultForm.register("email")}
            error={!!infoResultForm.formState.errors.email?.message}
          />
          <Box display="flex" flexDirection={"column"} gap={"10px"}>
            <Typography>Address</Typography>
            {/* <TextField
          label="Street"
          size="small"
          fullWidth
          {...addressResultForm.register("street")}
          error={!!addressResultForm.formState.errors.street?.message}
        />
        <TextField
          label="District"
          size="small"
          fullWidth
          {...addressResultForm.register("district")}
          error={!!addressResultForm.formState.errors.district?.message}
        /> */}
            <Address />
          </Box>
          <Button
            onClick={infoResultForm.handleSubmit((values) =>
              console.log(values),
            )}
          >
            Submit
          </Button>
        </Box>
      </FormProvider>
    </>
  );
};

const Address = () => {
  const form = useFormContext();

  return (
    <>
      <TextField
        label="Street"
        size="small"
        fullWidth
        {...form.register("street")}
        error={!!form.formState.errors.street?.message}
      />
    </>
  );
};

export default Profile;
