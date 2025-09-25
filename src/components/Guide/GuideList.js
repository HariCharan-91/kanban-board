import React from 'react';
import GuideCard from './GuideCard';
import '../../styles/GuideList.css';

const GuideList = ({ guides }) => {
  return (
    <main className="guide-list">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </main>
  );
};

export default GuideList;