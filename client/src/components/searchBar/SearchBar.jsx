import React, { useState } from "react";
import "./SearchBar1.scss";
import { useNavigate } from "react-router-dom";

// import { HiLocationMarker } from 'react-icons/hi'
const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="flexCenter search-bar">
    {/* <HiLocationMarker color="var(--blue)" size={25} /> */}
    {/* <input
      placeholder="Search by title/city/country..."
      type="text"
      
    /> */}
    <div className="search">
            <div className="searchInput">
              <img src="./search.png" alt="" />
              <input
                type="text"
                placeholder='Try location "jaipur"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
   
  </div>
  )
}

export default SearchBar