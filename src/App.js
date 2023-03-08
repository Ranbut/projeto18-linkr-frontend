import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline/Timeline.js";
import { AuthProvider } from "./contexts/auth.js";
import { UserContext } from "./contexts/user.js";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({ userName: "", pictureUrl: "" });

  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <SignIn /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/timeline" element={
            <UserContext.Provider value={{ user, setUser }}>
              <Timeline />
            </UserContext.Provider>
        } />
        </Routes>
      </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
