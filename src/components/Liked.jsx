// import React, { useState } from "react";
// import axios from "axios";

// const LocationCard = ({ location, userToken }) => {
//   const [liked, setLiked] = useState(false);

//   const handleLike = async () => {
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/like-location/",
//         {
//           location_id: location.id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//           },
//         }
//       );
//       console.log("Location liked:", response.data);
//       setLiked(true);
//     } catch (error) {
//       if (error.response) {
//         console.error("Error response:", error.response.data);
//       } else if (error.request) {
//         console.error("No response received:", error.request);
//       } else {
//         console.error("Request setup error:", error.message);
//       }
//     }
//   };
  
  

//   return (
//     <div className="location-card">
//       <button onClick={handleLike} disabled={liked}>
//         {liked ? "Liked" : "Like"}
//       </button>
//     </div>
//   );
// };

// export default LocationCard;

import React, { useState, useEffect } from 'react';
import api from '../api';
import { ACCESS_TOKEN } from '../constants';

function LocationCard({ location, userToken }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the location is liked when the component mounts
    api.get(`/api/is-liked/${location.id}/`, {
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then((res) => setLiked(res.data.liked))
      .catch((err) => console.error("Error fetching like status:", err));
  }, [location.id, userToken]);

  const handleLikeToggle = () => {
    api.post(`/api/toggle-like/${location.id}/`, {}, {
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then((res) => {
        setLiked((prev) => !prev); // Toggle the liked state
      })
      .catch((err) => console.error("Error toggling like:", err));
  };

  return (
    <button
      className={`btn ${liked ? 'btn-danger' : 'btn-outline-danger'}`}
      onClick={handleLikeToggle}
    >
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
}

export default LocationCard;
