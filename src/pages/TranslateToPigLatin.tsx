import { Button } from "../ui/Button";
import { Header } from "../ui/Header";
import { TextArea } from "../ui/TextArea";
import { translateToPigLatin } from "../lib/translateToPigLatin";
import { useState } from "react";

export const TranslateToPigLatin = () => {
  const [message, setMessage] = useState("");
  const [modifiedMessage, setModifiedMessage] = useState("");

  const handleChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  return (
    <>
      <Header
        title="Translates to pig latin"
        subtitle="translates each word to a pig latin word, pig latin -> igpay atin-lay"
      />
      <TextArea
        placeholder="text to translate"
        value={message}
        onChange={handleChange}
      />
      <div className="flex">
        <Button
          onClick={() => setModifiedMessage(translateToPigLatin(message))}
        >
          Translate! <i className="fad fa-random"></i>
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
