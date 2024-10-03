import { Button, Typography } from "@mui/material"
import { Dispatch } from "redux"
import { signOut } from "../../store/auth"
import { connect } from "react-redux"

type SignOutProps = {
  signOut: () => void,
  errorMessage: string,
}

const SignOut = ({ signOut, errorMessage }: SignOutProps) => {
  return <>
    <Button onClick={signOut}>SignOut</Button>
    {
      errorMessage && <Typography color="red">{errorMessage}</Typography>
    }
  </>
}

const mapStateToProps = (state: any) => ({
  errorMessage: state.auth.error
})

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);