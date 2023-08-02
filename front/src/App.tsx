import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/Routes";
import { AppStyled } from "./styles/AppStyled";
import { Reset, GlobalStyle } from "./styles/GlobalStyles";

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <AppStyled>
                <AppRoutes />
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
