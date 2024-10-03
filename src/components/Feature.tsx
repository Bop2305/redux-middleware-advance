import { Typography } from "@mui/material";
import requireAuth from "./requireAuth";

const Feature = () => {
  return <>
    <Typography sx={(theme) => ({ color: theme.palette.primary.main })}>This is feature</Typography>
  </>
}

export default requireAuth(Feature);