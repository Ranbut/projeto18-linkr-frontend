import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Publication from "./pages/Publication/Publication.js";
import { AuthProvider } from "./contexts/auth.js";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/timeline" element={ <Publication /> } />
        </Routes>
      </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
