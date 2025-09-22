import React, { useState } from "react";
import QuestionBox from "./QuestionBox/QuestionBox";
import { useNavigate } from "react-router-dom";
import { mapResultToPokemon } from "../tools/MapResultToPokemon";

const questions = [
  {
    question: "Hvis du hadde hatt en superkraft, hva ville det vært?",
    options: ["Fly", "Bli bitteliten", "Lese tanker", "Sprute ild"],
  },
  {
    question: "Du drar på ferie til?",
    options: ["Fjellet", "Stranda", "Byen", "Skogen"],
  },
  {
    question: "Folk vil beskrive meg som:",
    options: ["Aggressiv", "Morsom", "Søt", "Sterk"],
  },
  {
    question: "Hva er du redd for:",
    options: ["Vann", "Ild", "Insekter", "Mørke"],
  },
];

interface PokeomatProps {
  setIsResults: (value: boolean) => void,
  setPokemon: (value: string) => void,
  setFlufftext: (value: string) => void
}

const Pokeomat = ({setIsResults, setPokemon, setFlufftext}: PokeomatProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const currentQuestion = questions[currentIndex];

  function handleAnswer(optionIndex: number) {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex; 
    setAnswers(newAnswers);
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
        const numericAnswers = answers.map((a) => a ?? 0);

        console.log("Quiz finished! Numeric Answers:", numericAnswers);

        mapResultToPokemon(numericAnswers).then((result) => {
          setIsResults(true)
          setPokemon(result[0])
          setFlufftext(result[1])

        });
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-center mb-6">
        Which Pokémon are you??
      </h1>
      <QuestionBox
        question={currentQuestion.question}
        options={currentQuestion.options.map((label, i) => ({
            id: i + 1,
            label,
        }))}
        currentIndex={currentIndex}
        total={questions.length}
        initialValue={answers[currentIndex] ?? undefined}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
      />
    </div>
  );
};

export default Pokeomat;