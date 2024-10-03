import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import loginService from "../../services/login";
import { connect } from "react-redux";
import { setAuthenticated } from "../../store/auth";

type SignInProps = {
  authenticated: boolean
  errorMessage: string
  siginIn: (params: { username: string, password: string }, callback: () => void) => void
}

const SignIn = ({ authenticated, errorMessage, siginIn }: SignInProps) => {
  const schema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  }).required();

  const form = useForm({
    resolver: yupResolver(schema)
  })

  const handleSubmit = async (values: any) => {
    console.log("values", values)
    siginIn(values, () => {
      console.log("Login Success")
    });
  }

  return <>
    <Box display={"flex"} flexDirection={"column"} width={"300px"} gap={"20px"}>
      <Typography>Login</Typography>
      <TextField label="Username" size="small" type="text" {...form.register("username")} error={!!form.formState.errors.username?.message} />
      <TextField label="Password" size="small" type="password" {...form.register("password")} error={!!form.formState.errors.password?.message} />
      <Button onClick={form.handleSubmit(handleSubmit)}>Submit</Button>
      {
        errorMessage && <Typography color="red">{errorMessage}</Typography>
      }
    </Box>
  </>
}

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    siginIn: (params: { username: string, password: string }, callback: () => void) => dispatch(setAuthenticated(params, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);