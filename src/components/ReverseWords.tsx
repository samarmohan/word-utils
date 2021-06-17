import { useState } from "react";
import { reverseWords } from "../utils/reverseWords";

export const ReverseWords = () => {
	const [message, setMessage] = useState("");

	const handleChange = (event: any) => {
		event.persist();
		setMessage(event.target.value);
	};

	return (
		<div>
			<p className="is-size-2">A simple message reverser</p>
			<p>{message}</p>
			<div>
				<input
					id="text"
					type="text"
					placeholder="text to reverse"
					name="text"
					value={message}
					onChange={handleChange}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => reverseWords(message, setMessage)}
				>
					Reverse
				</button>
			</div>
		</div>
	);
};
