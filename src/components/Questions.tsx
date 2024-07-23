// src/components/Question.tsx

import React from 'react';

interface Option {
  text: string;
  score: number;
}

interface QuestionProps {
  question: {
    id: number;
    question: string;
    options: Option[];
  };
  onAnswer: (score: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => (
  <div className="p-4 border rounded shadow-lg">
    <h3 className="text-lg font-bold mb-2">{question.question}</h3>
    {question.options.map((option, index) => (
      <button
        key={index}
        onClick={() => onAnswer(option.score)}
        className="block w-full p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {option.text}
      </button>
    ))}
  </div>
);

export default Question;
