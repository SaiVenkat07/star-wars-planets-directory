import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlanetAPI from '../components/PlanetAPI';
import '../styles/ResidentListPage.css';

function ResidentListPage() {
  const [residents, setResidents] = useState([]);
  const { planetName } = useParams();

  useEffect(() => {
   
  const fetchResidents = () => {
    PlanetAPI.getResidents(planetName)
      .then(data => {
        setResidents(data);
      })
      .catch(error => console.error('Error fetching residents:', error));
  };
  fetchResidents();
}, [planetName]);


  return (
    <div className="resident-list-page">
      <h2>Residents of {planetName}</h2>
      <ul>
        {residents.length > 0 ? (
          residents.map((resident, index) => (
            <li key={index}>
              <p>Name: {resident.name}</p>
              <p>Height: {resident.height}</p>
              <p>Mass: {resident.mass}</p>
              <p>Gender: {resident.gender}</p>
            </li>
          ))
        ) : (
          <li>No known residents</li>
        )}
      </ul>
    </div>
  );
}

export default ResidentListPage;
