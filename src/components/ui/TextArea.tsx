import { FC, TextareaHTMLAttributes } from "react";

export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	rows?: number;
}

export const TextArea: FC<TextAreaProps> = ({ rows = 3, ...props }) => {
	return (
		<textarea
			rows={rows}
			className="form-textarea mt-3 mb-3 w-full block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-300"
			{...props}
		></textarea>
	);
};
