// src/pages/test.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Question from '@/components/Questions';

interface Option {
  text: string;
  score: number;
}

interface QuestionType {
  id: number;
  question: string;
  options: Option[];
}

const Test = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const handleAnswer = (scoreIncrement: number) => {
    setScore(score + scoreIncrement);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push(`/result?score=${score + scoreIncrement}`);
    }
  };

  if (questions.length === 0) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
    </div>
  );
};

export default Test;
