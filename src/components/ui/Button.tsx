import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	secondary?: boolean;
}

export const Button: FC<ButtonProps> = ({ secondary, children, ...props }) => {
	return (
		<button
			className={`${
				secondary
					? `bg-green-500 hover:bg-green-700`
					: `bg-blue-500 hover:bg-blue-700`
			} text-white font-bold py-2 px-4 rounded m-2`}
			{...props}
		>
			{children}
		</button>
	);
};
