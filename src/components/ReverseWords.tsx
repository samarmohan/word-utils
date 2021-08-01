import { useState } from "react";
import { reverseWords } from "../utils/reverseWords";
import { Button } from "./ui/Button";
import { Header } from "./ui/Header";
import { TextArea } from "./ui/TextArea";

export const ReverseWords = () => {
  const [message, setMessage] = useState("");
  const [modifiedMessage, setModifiedMessage] = useState("");

  const handleChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  return (
    <>
      <Header
        title="Reverses the words in place"
        subtitle="reverses the just words and keeps them in the same place"
      />
      <TextArea
        placeholder="text to reverse"
        value={message}
        onChange={handleChange}
      />
      <Button onClick={() => reverseWords(message, setModifiedMessage)}>
        Reverse <i className="fal fa-history"></i>
      </Button>
      <Button
        secondary
        onClick={() => {
          setMessage(modifiedMessage);
          setModifiedMessage(message);
        }}
      >
        Switch <i className="fas fa-repeat-alt"></i>
      </Button>
      <TextArea value={modifiedMessage} />
    </>
  );
};
