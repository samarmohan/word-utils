import { useState } from "react";
import { capitalizeRandomLetters } from "../utils/capitalizeRandomLetters";
import { Button } from "./ui/Button";
import { Header } from "./ui/Header";
import { TextArea } from "./ui/TextArea";

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
			<Button
				onClick={() => capitalizeRandomLetters(message, setModifiedMessage)}
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
			<TextArea value={modifiedMessage} />
		</>
	);
};
