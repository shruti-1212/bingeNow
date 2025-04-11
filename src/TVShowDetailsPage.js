import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay, FaFilm, FaTicketAlt } from 'react-icons/fa';

const TVShowDetails = () => {
  const { id } = useParams(); // Get the TV show ID from the URL
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    // Fetch the specific TV show from the fake API
    fetch(`http://localhost:8080/media/${id}`)
      .then((response) => response.json())
      .then((data) => setTVShow(data));
  }, [id]);

  if (!tvShow) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="tv-show-details-page" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', color: '#72A0C1' }}>{tvShow.title}</h1>
      </div>
      <p style={{color:"#989898"}} > 2025 TV Show </p>
      <div style={{ display: 'flex', alignItems: 'center',gap:'40px' }}>
        <button style={{ marginRight: '10px', padding: '15px 40px', backgroundColor: '#1a1a1a', border: '2px solid #72A0C1', borderRadius: '5px', cursor: 'pointer', color: '#72A0C1', display: 'flex', alignItems: 'center',fontSize:"16px" }}>
          <FaFilm style={{ marginRight: '5px' }} /> Trailer
        </button>
        <button style={{ marginRight: '10px', padding: '15px 40px', backgroundColor: '#1a1a1a', border: '2px solid #72A0C1', borderRadius: '5px', cursor: 'pointer', color: '#72A0C1', display: 'flex', alignItems: 'center',fontSize:"16px" }}>
          <FaPlay style={{ marginRight: '5px' }} /> Play
        </button>
        <button style={{ padding: '15px 40px', backgroundColor: '#1a1a1a', border: '2px solid #72A0C1', borderRadius: '5px', cursor: 'pointer', color: '#72A0C1', display: 'flex', alignItems: 'center',fontSize:"16px" }}>
          <FaTicketAlt style={{ marginRight: '5px' }} /> Redeem
        </button>
      </div>
      <div className="content" style={{ display: 'flex', gap: '20px' }}>
        <div className="details" style={{ flex: '2' }}>
          <p style={{ fontSize: '16px', color: "#989898",marginTop:"40px" }}>{tvShow.synopsis}</p>
          <div className="pricing" style={{ marginTop: '50px',display: 'flex', alignItems: 'center',gap:"60px"}}>
            <button style={{ fontSize: '18px', padding: '10px 40px', marginRight: '10px', backgroundColor: '#72A0C1', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Rent Price: ${tvShow.rentPrice}</button>
            <button style={{ fontSize: '18px', padding: '10px 30px', backgroundColor: '#72A0C1', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Purchase Price: ${tvShow.purchasePrice}</button>
          </div>
        </div>
        <div className="poster" style={{ flex: '1' }}>
          <img src={tvShow.posterLarge} alt={tvShow.title} style={{ width: '750px', borderRadius: '10px',marginTop:"-80px" ,height:"60vh"  }} />
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;
