import { useState, useCallback } from "react";
import "./Footer.css";
import customerServiceRep from "../../assets/customer_service_rep.jpg";
import Chatbot from "./ChatBot";

export default function CustomerService() {
  const [isChatbot, setIsChatbot] = useState(false);

  const openChat = useCallback(() => setIsChatbot(true), []);
  const closeChat = useCallback(() => setIsChatbot(false), []);

  return (
    isChatbot ? (
      <Chatbot onClose={closeChat} />
    ) : (
      <img
        src={customerServiceRep}
        alt="Customer Service"
        className="footer-icon big-img"
        onClick={openChat}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openChat();
        }}
        aria-label="Open customer service chat"
      />
    )
  );
}
