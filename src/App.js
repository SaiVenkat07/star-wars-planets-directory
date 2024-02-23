import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';
import PlanetAPI from './components/PlanetAPI';
import ResidentListPage from './components/ResidentListPage';
import '../src/styles/App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = () => {
      PlanetAPI.getPlanets(currentPage)
        .then(data => {
          setPlanets(data.results);
          setTotalPages(Math.ceil(data.count / 10));
        })
        .catch(error => {
          setError(error);
          console.error('Error fetching planets:', error);
        });
    };
    fetchPlanets();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <div className="App">
        <h1>Star Wars Planets Directory</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="planets-container">
                  {planets.map(planet => (
                    <PlanetCard key={planet.name} planet={planet} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                />
              </>
            }
          />
          <Route path="/residents/:planetName" element={<ResidentListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
