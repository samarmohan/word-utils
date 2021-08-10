export const translateToMorseCode = (sentence: string) => {
  type MorseCode = {
    [index: string]: string;
  };
  const morseCode: MorseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "=": "-...-",
    "/": "-..-.",
    "@": ".--.-.",
  };
  return sentence
    .toUpperCase()
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter) => morseCode[letter])
        .join(" ")
    )
    .join(" / ");
};

console.log(translateToMorseCode("Hello World"));
