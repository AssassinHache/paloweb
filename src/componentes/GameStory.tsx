import React from 'react';

interface GameStoryProps {
  title: string;
  paragraphs: string[];
  image1: string;
  image2: string;
}

const GameStory: React.FC<GameStoryProps> = ({ title, paragraphs, image1, image2 }) => {
  const styles = {
    fullScreen: {
      display: 'flex',
      flexDirection: 'row' as const,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#d7ccc8',
      padding: '2rem',
      boxSizing: 'border-box' as const,
      fontFamily: 'Georgia, serif',
    },
    textContainer: {
      flex: 1,
      backgroundColor: '#fff8f0',
      borderRadius: '16px',
      padding: '2rem',
      marginRight: '2rem',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      animation: 'fadeInLeft 1s ease-out',
      maxHeight: '90vh',
      overflowY: 'auto',
    },
    title: {
      fontSize: '2.8rem',
      color: '#5d3a00',
      textAlign: 'center' as const,
      marginBottom: '1.5rem',
      borderBottom: '2px solid #e67e22',
      paddingBottom: '0.5rem',
    },
    paragraph: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#4e342e',
      marginBottom: '1rem',
      backgroundColor: '#fff3e0',
      padding: '1rem',
      borderRadius: '12px',
      animation: 'fadeInUp 1s ease forwards',
      opacity: 0,
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '2rem',
      animation: 'fadeInRight 1s ease-out',
      maxHeight: '90vh',
      overflowY: 'auto',
    },
    image: {
      width: '80%',
      maxWidth: '400px',
      borderRadius: '20px',
      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Ocultar scrollbar en navegadores Webkit */
          div::-webkit-scrollbar {
            display: none;
          }

          /* Ocultar scrollbar en Firefox */
          div {
            scrollbar-width: none;
          }
        `}
      </style>

      <div style={styles.fullScreen}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>{title}</h1>
          {paragraphs.map((text, index) => (
            <p key={index} style={{ ...styles.paragraph, animationDelay: `${index * 0.3}s` }}>
              {text}
            </p>
          ))}
        </div>
        <div style={styles.imageContainer}>
          <img src={image1} alt="Imagen 1" style={styles.image} />
          <img src={image2} alt="Imagen 2" style={styles.image} />
        </div>
      </div>
    </>
  );
};

export default GameStory;
