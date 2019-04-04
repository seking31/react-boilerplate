import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <header>
      <nav>
        <ul>
          <button type="button">
            <Link to="/login">Log In</Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default HomePage;
