import { useState } from "react";
import { capitalizeRandomLetters } from "../utils/capitalizeRandomLetters";

export const CapitalizeRandomLetters = () => {
	const [message, setMessage] = useState("");

	const handleChange = (event: any) => {
		event.persist();
		setMessage(event.target.value);
	};

	return (
		<>
			<p>Random Caps</p>
			<p>{message}</p>
			<input
				id="text"
				type="text"
				placeholder="text to capitalize"
				name="text"
				value={message}
				onChange={handleChange}
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => capitalizeRandomLetters(message, setMessage)}
			>
				Randomly capitalize!
			</button>
		</>
	);
};
