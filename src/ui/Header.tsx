import { FC } from "react";

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="italic text-red-500 tracking-wide leading-loose text-4xl">
        {title}
      </h1>
      <p className="text-lg text-gray-700 leading-loose">{subtitle}</p>
    </>
  );
};
