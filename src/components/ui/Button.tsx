import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	secondary?: boolean;
}

export const Button: FC<ButtonProps> = ({ secondary, children, ...props }) => {
	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			{...props}
		>
			{children}
		</button>
	);
};
