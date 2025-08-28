import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Searchsection from "./components/Searchsection";
import TripList from "./components/TripList";

function App() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [addSearchTerm, setAddSearchTerm] = useState(null);

  // Initial load - เรียก searchTrips("") ตอน mount
  useEffect(() => {
    searchTrips("");
  }, []);

  const searchTrips = async (keywords) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch(
        `http://localhost:4001/trips?keywords=${encodeURIComponent(keywords)}`
      );

      if (!response.ok) {
        throw new Error("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
      }

      const data = await response.json();
      setTrips(data.data || []);
    } catch (err) {
      setError(err.message);
      setTrips([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTagClick = (tag) => {
    setAddSearchTerm(tag);
  };

  return (
    <div className="min-h-screen px-2 md:px-4">
      <Header />
      <Searchsection onSearch={searchTrips} addSearchTerm={addSearchTerm} />
      
      {hasSearched && (
        <TripList 
          trips={trips} 
          loading={loading} 
          error={error}
          onTagClick={handleTagClick}
        />
      )}
    </div>
  );
}

export default App;
