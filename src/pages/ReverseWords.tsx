import { Button } from "../ui/Button";
import { Header } from "../ui/Header";
import { TextArea } from "../ui/TextArea";
import { reverseWords } from "../lib/reverseWords";
import { useState } from "react";

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
      <div className="flex">
        <Button onClick={() => setModifiedMessage(reverseWords(message))}>
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
      </div>
      <TextArea value={modifiedMessage} />
    </>
  );
};
