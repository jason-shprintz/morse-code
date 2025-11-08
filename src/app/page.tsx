"use client";
import { useState } from "react";
import { conversionTable } from "./conversion";
import {
  Container,
  FormContainer,
  InputBox,
  MorseContainer,
  TranslationContainer,
} from "./styles/styles";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  // Handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const submittedValueDestruct: string[] = inputValue.split("") ?? [];

  return (
    <Container>
      <h1 style={{ margin: "10px" }}>Morse Code App</h1>
      <FormContainer>
        <InputBox
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text here..."
        />
      </FormContainer>
      <MorseContainer>
        {submittedValueDestruct.map((letter, letterIndex) => {
          const isSpace: boolean = letter === " ";

          if (isSpace) {
            return <br key={`${letter}-${letterIndex}`} />;
          }

          const formattedLetter: string = letter.toLowerCase();
          const morseTranslation: string[] =
            conversionTable[formattedLetter as keyof typeof conversionTable] ||
            [];

          return (
            <TranslationContainer key={`${letter}-${letterIndex}`}>
              {letter}&nbsp;=&nbsp;
              {morseTranslation.map((morse, i) => {
                return <div key={i}>{morse as string}&nbsp;</div>;
              })}{" "}
              <br />
            </TranslationContainer>
          );
        })}
      </MorseContainer>
    </Container>
  );
}
