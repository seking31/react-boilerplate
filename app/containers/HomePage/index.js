import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomePage;
