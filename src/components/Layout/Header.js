import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Guidee</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#visual-guide">VisualGuide</a></li>
          <li><a href="#learn-guide">Learn Guide</a></li>
          <li><a href="#practice-guide">Practice Guide</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;