import { io } from "socket.io-client";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  // Load initial data and connect to socketio
  useEffect(() => {
    fetchFeedback();

    // const socketUrl = `https://${window.location.hostname}:5000`;
    const socketUrl = "/";

    const socket = io(socketUrl, {
      transports: ["websocket"],
    });

    socket.on("review-added", (newReviews) => {
      setFeedback(newReviews);
    });

    // Clean up socketio connection
    return () => {
      socket.disconnect();
    };
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/api/reviews`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    setIsLoading(true);

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([...feedback, data]);
    setIsLoading(false);
  };

  // TODO:
  // Delete feedback
  // Update feedback

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
