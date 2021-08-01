export type TypedFunction = {
  (sentence: string): React.Dispatch<React.SetStateAction<string>>;
};
