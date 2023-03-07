import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
           <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
