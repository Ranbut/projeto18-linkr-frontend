import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline/Timeline.js";
import { AuthProvider } from "./contexts/auth.js";
import { UserContext } from "./contexts/user.js";
import { useState } from "react";
import Header from "./components/Header/Header.js";

import UserPage from "./pages/UserPage/UserPage.js";

function App() {

  const [user, setUser] = useState({ userName: "", pictureUrl: "" });

  return (
    <AuthProvider>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/timeline" element={<Timeline />} />
            {/* <Route path="/user/:username" element={ <Header/> } /> */}
            <Route path="/user/:id" element={<UserPage />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthProvider>
  );
}

export default App;
