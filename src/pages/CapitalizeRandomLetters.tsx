import { Button } from "../ui/Button";
import { Header } from "../ui/Header";
import { TextArea } from "../ui/TextArea";
import { capitalizeRandomLetters } from "../lib/capitalizeRandomLetters";
import { useState } from "react";

export const CapitalizeRandomLetters = () => {
  const [message, setMessage] = useState("");
  const [modifiedMessage, setModifiedMessage] = useState("");

  const handleChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  return (
    <>
      <Header
        title="Capitalizes every other letter"
        subtitle="capitalizes every other letter in the phrase, also known as the SpongeBob Mocking Meme"
      />
      <TextArea
        placeholder="text to capitalize"
        value={message}
        onChange={handleChange}
      />
      <div className="flex">
        <Button
          onClick={() => setModifiedMessage(capitalizeRandomLetters(message))}
        >
          Randomly capitalize <i className="fad fa-random"></i>
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
