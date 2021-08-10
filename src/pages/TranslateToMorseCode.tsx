import { Button } from "../ui/Button";
import { Header } from "../ui/Header";
import { TextArea } from "../ui/TextArea";
import { translateToMorseCode } from "../lib/translateToMorseCode";
import { useState } from "react";

export const TranslateToMorseCode = () => {
  const [message, setMessage] = useState("");
  const [modifiedMessage, setModifiedMessage] = useState("");

  const handleChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  return (
    <>
      <Header
        title="Translates to morse code"
        subtitle="Letters are separated by spaces and words are separated by slashes."
      />
      <TextArea
        placeholder="text to translate"
        value={message}
        onChange={handleChange}
      />
      <div className="flex">
        <Button
          onClick={() => setModifiedMessage(translateToMorseCode(message))}
        >
          Translate! <i className="fas fa-language"></i>
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
