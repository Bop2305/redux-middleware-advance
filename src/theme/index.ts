import { createTheme } from "@mui/material";
import typography from "./typography";
import colors from "./colors";

const theme = createTheme({
  palette: colors,
  typography: typography,
});

export default theme;