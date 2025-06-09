// Trailer.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Download, Share2, Heart, Users, Star } from 'lucide-react';
import './Trailer.css';

const Trailer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(12847);
  const [viewCount, setViewCount] = useState(89234);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    navigator.share?.({
      title: 'Líder de la Bandada - Trailer Oficial',
      text: '¡Mira este increíble trailer del nuevo juego!',
      url: window.location.href
    }).catch(() => {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    });
  };

  return (
    <div className="container">
      <div className="content">

        <div className="header animate-fade-in">
          <div className="header-badge">
            <span className="header-text">PRESENTACIÓN OFICIAL</span>
          </div>
          <h1 className="title">Tinku Palomas</h1>
          <p className="subtitle">El Juego Que Cambiará Todo</p>
          <div className="stats">
            <div className="views">
              <Users className="icon" />
              <span>{viewCount.toLocaleString()} vistas</span>
            </div>
            <div className="stars">
              <Star className="icon star-yellow" />
              <span>4.9/5 estrellas</span>
            </div>
          </div>
        </div>

        <div className="video-wrapper">
          <div className="video-container">
            <div
              className="video-aspect"
              onClick={() => setShowControls(!showControls)}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setTimeout(() => setShowControls(false), 2000)}
            >
              <video
                ref={videoRef}
                className="video-element"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/src/assets/trailer.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>

              <div className={`video-overlay ${showControls ? 'visible' : 'hidden'}`}>
                <div className="center-controls">
                  <button onClick={togglePlay} className="play-pause-btn">
                    {isPlaying ? <Pause className="icon-large" /> : <Play className="icon-large play-icon" />}
                  </button>
                </div>

                <div className="bottom-controls">
                  <div className="left-controls">
                    <button onClick={toggleMute} className="icon-btn">
                      {isMuted ? <VolumeX className="icon-small" /> : <Volume2 className="icon-small" />}
                    </button>
                  </div>

                  <div className="right-controls">
                  </div>
                </div>
              </div>
            </div>

            <div className="video-info">
              <div className="info-header">
                <div>
                  <h3 className="video-title">Tráiler Oficial de Lanzamiento</h3>
                  <p className="video-description">Descubre un mundo donde cada decisión cuenta y comnquista la plaza Murillo </p>
                </div>
                <div className="action-buttons">
                  <button onClick={toggleLike} className={`like-btn ${isLiked ? 'liked' : ''}`}>
                    <Heart className="icon-small" />
                    <span>{likesCount.toLocaleString()}</span>
                  </button>
                  <button onClick={handleShare} className="share-btn">
                    <Share2 className="icon-small" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="call-to-action">
          <button className="play-now-btn">
            <span className="play-now-text">estas listo ?</span>
            <div className="play-now-glow"></div>
          </button>
          <p className="available-text">Disponible en PC</p>
        </div>

      </div>
    </div>
  );
};

export default Trailer;
