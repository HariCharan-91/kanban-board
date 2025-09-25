import React from 'react';
import '../../styles/Sidebar.css';

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => onSelectCategory('all')}>All Guides</li>
          <li onClick={() => onSelectCategory('favorites')}>Favorites</li>
          {categories.map((category) => (
            <li key={category.id} onClick={() => onSelectCategory(category.id)}>
              {category.name}
              {category.subcategories && (
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id} onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory(subcategory.id);
                    }}>
                      {subcategory.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;