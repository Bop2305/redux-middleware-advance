import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

type ComponentWithAuthProps = {
  authenticated: boolean;
};

const requireAuth = (WrappedComponent: any) => {
  const ComponentWithAuth = ({ authenticated, ...props }: ComponentWithAuthProps) => {
    const navigate = useNavigate();

    // useEffect(() => {
    //   if (!authenticated) {
    //     navigate("/signin");
    //   }
    // }, [authenticated, navigate]);

    return <>
      {
        authenticated ? <WrappedComponent {...props} /> : <Typography>Sign In</Typography>
      }
    </>
  };

  const mapStateToProps = (state: any) => {
    return {
      authenticated: state.auth.authenticated,
    };
  };

  return connect(mapStateToProps)(ComponentWithAuth);
};

export default requireAuth;
