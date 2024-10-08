import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, get, useFormContext } from "react-hook-form";

type StepProps = {
  formValues: Record<string, any>[];
};

const Step: React.FC<StepProps> = ({ formValues }) => {
  const formResult = useFormContext();

  return (
    <>
      {formValues.map((field) => {
        if (field.type === "text") {
          return (
            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              fullWidth={field.fullWidth ?? true}
              key={field.label}
            >
              <TextField
                label={field.label}
                type={field.type}
                size={field.size}
                error={!!formResult.formState.errors?.[field.name]?.message}
                defaultValue={formResult.getValues(field.name)}
                {...formResult.register(field.name)}
                helperText={
                  formResult.formState.errors?.[field.name]?.message as string
                }
              />
            </FormControl>
          );
        }

        if (field.type === "select") {
          return (
            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              fullWidth={field.fullWidth ?? true}
              key={field.label}
              size={field.size}
            >
              <InputLabel>{field.label}</InputLabel>
              <Controller
                control={formResult.control}
                name={field.name}
                render={({ field: { value } }) => (
                  <Select
                    key={value}
                    value={value}
                    // defaultValue={value}
                    label={field.label}
                    error={!!formResult.formState.errors?.[field.name]?.message}
                    {...formResult.register(field.name)}
                  >
                    {field.options?.map((option: any) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                )}
              />
            </FormControl>
          );
        }
      })}
    </>
  );
};

export default Step;
