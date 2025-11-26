import React from 'react';
import AIConsultant from '../components/AIConsultant';

const ConsultantPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🤖 AI Consultant</h1>
        <p className="text-gray-600 text-lg">
          Konsultasikan kebutuhan sparepart PC Anda dengan AI consultant kami yang ramah dan berpengalaman.
          Dapatkan rekomendasi terbaik sesuai budget dan kebutuhan Anda.
        </p>
      </div>
      <AIConsultant />
    </div>
  );
};

export default ConsultantPage;
