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
        subtitle="There is no dash in between the ig and pay"
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
