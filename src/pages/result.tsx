// src/pages/result.tsx

import { useRouter } from 'next/router';
import Result from '../components/Result';

const ResultPage = () => {
  const router = useRouter();
  const { score } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Result score={parseInt(score as string, 10)} />
    </div>
  );
};

export default ResultPage;
