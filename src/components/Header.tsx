import { Box } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

type HeaderProps = {
  authenticated: boolean
}

const Header = ({authenticated}: HeaderProps) => {
  return <>
    <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
      <Link to="/">Home</Link>
      <Link to="/signin" hidden={!!authenticated}>Sign In</Link>
      <Link to="/signout" hidden={!authenticated}>Sign Out</Link>
      <Link to="/signup" hidden={!!authenticated}>Sign Up</Link>
      <Link to="/feature">Feature</Link>
      <Link to="/posts">Posts</Link>
    </Box>
  </>
}

const mapStateToProps = (state: any) => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(Header);