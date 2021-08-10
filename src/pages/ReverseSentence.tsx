import { Button } from "../ui/Button";
import { Header } from "../ui/Header";
import { TextArea } from "../ui/TextArea";
import { reverseSentence } from "../lib/reverseSentence";
import { useState } from "react";

export const ReverseSentence = () => {
  const [message, setMessage] = useState("");
  const [modifiedMessage, setModifiedMessage] = useState("");

  const handleChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  return (
    <>
      <Header
        title="Reverses the sentence"
        subtitle="the letters in the words flip and the placement of the words in the sentence flips"
      />
      <TextArea
        placeholder="text to reverse"
        value={message}
        onChange={handleChange}
      />
      <div className="flex">
        <Button onClick={() => setModifiedMessage(reverseSentence(message))}>
          Reverse <i className="fad fa-history"></i>
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
      </div>
      <TextArea value={modifiedMessage} />
    </>
  );
};
