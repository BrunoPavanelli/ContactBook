import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/Routes";
import { AppStyled } from "./styles/AppStyled";
import { Reset, GlobalStyle } from "./styles/GlobalStyles";
import { UserProvider } from "./contexts/UserContext/UserContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <AppStyled>
                <UserProvider>
                    <AppRoutes />
                </UserProvider>
            </AppStyled>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
        </>
    );
}

export default App;
