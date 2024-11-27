import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="player-info">
        <img
          src="/player-photo.jpg" // Imagem do jogador
          alt="Foto do Jogador"
          className="player-photo"
        />
        <div className="player-details">
          <h2>Callsign: Jogador123</h2>
          <p>Equipe: Carapaça Force</p>
          <p>Cidade: São Paulo</p>
        </div>
      </div>

      <div className="player-stats">
        <h2>Pontuação Total: 100</h2>
        <h4>Pontuação de Respawn: 5</h4>
        <h4>Classe: Atacante</h4>
      </div>

      <div className="medals">
        <h3>Medalhas</h3>
        <div className="medals-list">
          <img src="/medal1.jpg" alt="Medalha 1" className="medal" />
          <img src="/medal2.jpg" alt="Medalha 2" className="medal" />
          <img src="/medal3.jpg" alt="Medalha 3" className="medal" />
          <img src="/medal4.jpg" alt="Medalha 4" className="medal" />
          <img src="/medal5.jpg" alt="Medalha 5" className="medal" />
          <img src="/medal6.jpg" alt="Medalha 6" className="medal" />
        </div>
      </div>

      <div className="event-list">
        <h3>Eventos Participados</h3>
        <ul>
          <li>Evento X - 01/01/2024</li>
          <li>Evento Y - 15/02/2024</li>
          <li>Evento Z - 20/03/2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
