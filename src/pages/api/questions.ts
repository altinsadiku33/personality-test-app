// src/pages/api/questions.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: 1,
      question: "Do you prefer to work in a team or alone?",
      options: [
        { text: "Team", score: 1 },
        { text: "Alone", score: -1 }
      ]
    },
    {
      id: 2,
      question: "Do you enjoy large social gatherings?",
      options: [
        { text: "Yes", score: 1 },
        { text: "No", score: -1 }
      ]
    },
    {
      id: 3,
      question: "Do you find it easy to start conversations with strangers?",
      options: [
        { text: "Yes", score: 1 },
        { text: "No", score: -1 }
      ]
    }
  ]);
}
