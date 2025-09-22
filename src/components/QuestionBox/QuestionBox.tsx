import React, { useEffect, useState } from "react";
import './QuestionBox.css'

type Option = {
  id: string;
  label: string;
};

type QuestionBoxProps = {
  question: string;
  options: Option[];
  currentIndex: number;
  total: number;
  initialValue?: string;
  onAnswer: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

const QuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  options,
  currentIndex,
  total,
  initialValue,
  onAnswer,
  onNext,
  onBack,
}) => {
  const [selected, setSelected] = useState<string>(initialValue || "");

  useEffect(() => {
    setSelected(initialValue || "");
  }, [initialValue]);

  function handleChange(value: string) {
    setSelected(value);
    onAnswer(value);
  }

  return (
    <div className="box-container"> 
        {/* <p>Pokeomat</p> */}
        <h2 className="text-lg font-semibold mb-4">{question}</h2>
    
        <div className="flex justify-around mb-6">
            {options.map((option) => (
            <div key={option.id} className="questions">
                <input
                type="radio"
                id={option.id}
                name={`question-${currentIndex}`}
                value={option.id}
                checked={selected === option.id}
                onChange={() => handleChange(option.id)}
                className="w-5 h-5"
                />
                <label htmlFor={option.id} className="mt-2 text-sm">
                {option.label}
                </label>
            </div>
            ))}
        </div>

        <div className="button-group">
            <button
                onClick={onNext}
                disabled={!selected}
                className="button-next"
            >
                {currentIndex === total - 1 ? "Finish" : "Next"}
            </button>
            <button
                onClick={onBack}
                hidden={currentIndex === 0}
                className="button-back"
            >
                Back
            </button>
        </div>

    </div>
  );
};

export default QuestionBox;
