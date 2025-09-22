import React, { useState } from "react";
import QuestionBox from "../components/QuestionBox/QuestionBox";

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

const Pokeomat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );

  const currentQuestion = questions[currentIndex];

  function handleAnswer(value: string) {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      console.log("Quiz finished! Answers:", answers);
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
          id: String(i + 1),
          label,
        }))}
        currentIndex={currentIndex}
        total={questions.length}
        initialValue={answers[currentIndex] || ""}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
      />
    </div>
  );
};

export default Pokeomat;


// import React, { useState } from "react";
// import QuestionBox from "../components/QuestionBox/QuestionBox";

// const questions = [
//   {
//     question: "Hvis du hadde hatt en superkraft, hva ville det vært?",
//     options: ["Fly", "Bli bitteliten", "Lese tanker", "Sprute ild"],
//   },
//   {
//     question: "Du drar på ferie til?",
//     options: ["Fjellet", "Stranda", "Byen", "Skogen"],
//   },
//   {
//     question: "Folk vil beskrive meg som:",
//     options: ["Aggressiv", "Morsom", "Søt", "Sterk"],
//   },
//   {
//     question: "Hva er du redd for:",
//     options: ["Vann", "Ild", "Insekter", "Mørke"],
//   },
// ];

// const Pokeomat = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState<(string | null)[]>(
//     Array(questions.length).fill(null)
//   );

//   const currentQuestion = questions[currentIndex];

//   function handleAnswer(value: string) {
//     const newAnswers = [...answers];
//     newAnswers[currentIndex] = value;
//     setAnswers(newAnswers);
//   }

//   function handleNext() {
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex((i) => i + 1);
//     } else {
//       console.log("Quiz finished! Answers:", answers);
//       // you can show results here
//     }
//   }

//   function handleBack() {
//     if (currentIndex > 0) {
//       setCurrentIndex((i) => i - 1);
//     }
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold text-center mb-6">
//         Which Pokémon are you??
//       </h1>
//       <QuestionBox
//         question={currentQuestion.question}
//         options={currentQuestion.options.map((label, i) => ({
//           id: String(i + 1),
//           label,
//         }))}
//         currentIndex={currentIndex}
//         total={questions.length}
//         initialValue={answers[currentIndex] || ""}
//         onAnswer={handleAnswer}
//         onNext={handleNext}
//         onBack={handleBack}
//       />
//     </div>
//   );
// };

// // const Pokeomat = () => {
// //     const rawOptions = ["A", "B", "C", "D"];

// //     return (
// //         <div className="game-container">
// //             <h1 >Which pokemon are you??</h1>
// //             <QuestionBox 
// //                 question={"Question"} 
// //                 options={rawOptions.map((label, index) => ({id: String(index + 1),label,}))}
// //             />
// //         </div>
// //     )
// // }

// export default Pokeomat;