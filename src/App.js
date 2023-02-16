import HomeScreen from "./pages/home";
import PasswordResetPage from "./pages/password_reset";
import EmailConfirmationPage from "./pages/email_confirmation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/email_confirmation" element={<EmailConfirmationPage />} />
        <Route path="/password_reset" element={<PasswordResetPage />} />
      </Routes>
    </Router>
  );
};

export default App;
