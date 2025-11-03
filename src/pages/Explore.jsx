import React, { useEffect, useState } from 'react';
import api from "../api"
import "../styles/Home.css"
import Location from '../components/Location'

function Explore() {
    const [places, setPlaces] = useState([]);
  
      useEffect(() => {
          getlocation();    
      }, [])
              
      const getlocation = () => {
          api.get("/api/locations/").then((res) => setPlaces(res.data)).catch((err) => alert(err))
      }
  
      return (
          <div className="container mt-4 l-contain">
            <section className="row">
          {places.map((place) => (<Location key={place.id} place={place} />))}
          </section>
          </div>
      );
  }

export default Explore;
