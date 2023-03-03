import HomeScreen from "./pages/home";
import PasswordResetPage from "./pages/password_reset";
import EmailConfirmationPage from "./pages/email_confirmation";
import PrivacyPolicyScreen from "./pages/privacy_policy";
import TermsOfUseScreen from "./pages/terms_of_use";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/email-confirmation" element={<EmailConfirmationPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
        <Route path="/terms-of-use" element={<TermsOfUseScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
