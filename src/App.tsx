import React from 'react';
import GameStory from './componentes/GameStory';
import plazaImage from './assets/images/plaza.jpg'; 
import palomaIanImage from './assets/images/paloma.png'; 

const App: React.FC = () => {
  const title = "✨ Guerra de Alas en la Murillo ✨";
  const paragraphs = [
    "En el corazón de la majestuosa Plaza Murillo, en la ciudad de La Paz, un grupo de palomas ha convivido durante generaciones en pacífica armonía. Día tras día, compartieron el espacio con turistas curiosos, ciudadanos apurados y las imponentes estatuas que guardan los secretos del pasado. Pero esa paz está a punto de romperse...",
    "Una antigua leyenda ha resurgido: solo una paloma será elegida como la líder suprema de la plaza. Para reclamar el trono, se ha convocado un torneo sin precedentes. ¿El arma elegida? Pistolas de agua.",
    "Cada paloma, con habilidades únicas y estilos inconfundibles, se enfrentará en duelos de destreza y agilidad. Deberán esquivar chorros letales, ejecutar maniobras audaces y demostrar que tienen lo necesario para reinar. Las bandadas se dividen en facciones, cada una con sus propios ideales, alianzas y estrategias.",
    "Con el destino de la Plaza Murillo pendiendo de un chorro de agua, la batalla ha comenzado. ¿Quién se alzará como la verdadera soberana del cielo paceño?"
  ];

  return (
    <GameStory
      title={title}
      paragraphs={paragraphs}
      image1={plazaImage}
      image2={palomaIanImage}
    />
  );
};

export default App;
