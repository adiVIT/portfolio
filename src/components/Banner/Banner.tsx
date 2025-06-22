import React from 'react';
import { Container } from './styles';

export function Banner() {
  return (
    <Container>
      <div className="banner-content">
        <span className="banner-emoji">🚀</span>
        <span className="banner-text">
          Check out my <strong>New Portfolio</strong> with updated projects and design!
        </span>
        <a 
          href="https://portfoilo-new-nine.vercel.app/" 
          target="_blank" 
          rel="noreferrer"
          className="banner-link"
        >
          Visit New Site →
        </a>
      </div>
    </Container>
  );
} 