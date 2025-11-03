import React, { useEffect, useState } from 'react';
import api from "../api";
import Location from '../components/Location';
import { ACCESS_TOKEN } from '../constants';

function Suggestions() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const UserToken = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (UserToken) {
      getRecommendedLocations();    
    } else {
      alert("Please login to see recommendations.");
    }
  }, [UserToken]);

  // Fetch the recommended locations for the logged-in user
  const getRecommendedLocations = () => {
    api.get("/api/suggest/", {
      headers: {
        'Authorization': `Bearer ${UserToken}`
      }
    })
    .then((res) => {
      setPlaces(res.data);  // Set recommended locations
      setLoading(false);     // Update loading state
    })
    .catch((err) => {
      console.error("Error fetching recommended locations:", err);
      setLoading(false);
    });
  };

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  return (
    <div className="container mt-4 l-contain">
      <h2>Your Recommended Locations</h2>
      <section className="row">
        {places.length === 0 ? (
          <p>No recommendations available.</p>
        ) : (
          places.map((place) => (<Location key={place.id} place={place} />))
        )}
      </section>
    </div>
  );
}

export default Suggestions;
