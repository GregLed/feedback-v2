import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewFeedbackPage from "./pages/NewFeedbackPage";
import SummaryPage from "./pages/SummaryPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SummaryPage />} />
          <Route path="/new" element={<NewFeedbackPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
