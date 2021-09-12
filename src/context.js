import { ThemeProvider } from "@material-ui/styles";
// import {ProvideAuth} from "./hooks"
import { SnackbarProvider } from "notistack";
export const GlobalContextProvider = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <SnackbarProvider maxSnack={3} preventDuplicate anchorOrigin={{ horizontal: "center", vertical: "top" }}>
        {props.children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};
