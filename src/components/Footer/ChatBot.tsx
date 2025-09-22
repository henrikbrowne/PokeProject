import { Button } from "@chakra-ui/react";

interface ChatBotProps {
  onClose: () => void;
}

const Chatbot = ({ onClose }: ChatBotProps) => {
  return (
    <>
      <Button onClick={onClose}>Close Chat</Button>
    </>
  );
};

export default Chatbot;