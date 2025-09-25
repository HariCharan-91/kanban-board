import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import GuideList from '../components/Guide/GuideList';
import Footer from '../components/Layout/Footer';
import { guides as mockGuides, categories as mockCategories } from '../utils/mockData';
import '../styles/VisualGuide.css';

const VisualGuide = () => {
  const [guides, setGuides] = useState(mockGuides);
  const [categories] = useState(mockCategories);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getFilteredGuides = () => {
    if (selectedCategory === 'all') {
      return guides;
    }
    if (selectedCategory === 'favorites') {
      return guides.filter((guide) => guide.isFavorite);
    }
    const category = categories.find((c) => c.id === selectedCategory);
    if (category) {
      const categoryIds = [
        category.id,
        ...(category.subcategories?.map((sc) => sc.id) || []),
      ];
      return guides.filter((guide) => categoryIds.includes(guide.categoryId));
    }
    return guides.filter((guide) => guide.categoryId === selectedCategory);
  };

  const filteredGuides = getFilteredGuides();

  return (
    <div className="visual-guide-page">
      <Header />
      <div className="main-content">
        <Sidebar categories={categories} onSelectCategory={handleSelectCategory} />
        <GuideList guides={filteredGuides} />
      </div>
      <Footer />
    </div>
  );
};

export default VisualGuide;