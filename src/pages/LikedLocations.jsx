import React, { useEffect, useState } from 'react';
import api from "../api";
import Location from '../components/Location';
import { ACCESS_TOKEN } from '../constants';

function LikedLocations() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const UserToken = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (UserToken) {
      getLikedLocations();    
    } else {
      alert("Please login to see your liked locations.");
    }
  }, [UserToken]);

  // Fetch the liked locations for the logged-in user
  const getLikedLocations = () => {
    api.get("/api/liked/", {
      headers: {
        'Authorization': `Bearer ${UserToken}`
      }
    })
    .then((res) => {
      setPlaces(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching liked locations:", err);
      setLoading(false);
    });
  };

  if (loading) {
    return <div>Loading your liked locations...</div>;
  }

  return (
    <div className="container mt-4 l-contain">
      <h2>Your Liked Locations</h2>
      <section className="row">
        {places.length === 0 ? (
          <p>You haven't liked any locations yet. <a href="/explore">Explore locations</a> to start building your favorites!</p>
        ) : (
          places.map((place) => (<Location key={place.id} place={place} />))
        )}
      </section>
    </div>
  );
}

export default LikedLocations;
