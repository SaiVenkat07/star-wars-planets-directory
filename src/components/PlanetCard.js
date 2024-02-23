import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PlanetCard.css';

function PlanetCard({ planet }) {
  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <Link to={`/residents/${planet.name}`} className="resident-link">View Residents</Link>
    </div>
  );
}

export default PlanetCard;
