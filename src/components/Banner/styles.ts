import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #23ce6b 0%, #1e90ff 100%);
  color: white;
  padding: 15px 20px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .banner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }

  .banner-emoji {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  .banner-text {
    font-size: 1rem;
    font-weight: 500;
    
    strong {
      font-weight: 700;
    }
  }

  .banner-link {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    
    .banner-content {
      flex-direction: column;
      gap: 10px;
    }
    
    .banner-text {
      font-size: 0.9rem;
      text-align: center;
    }
    
    .banner-link {
      padding: 6px 12px;
      font-size: 0.9rem;
    }
  }
`; 