import React from 'react';
import "./ProductsFilter.css";
import { useState, useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
import { IoClose, IoChevronDown } from "react-icons/io5";


const categories = [
  "alcoholic drinks",
  "berries",
  "cereals",
  "dairy",
  "dried fruits",
  "eggs",
  "fish",
  "flour",
  "fruits",
  "meat",
  "mushrooms",
  "nuts",
  "oils and fats",
  "poppy",
  "sausage",
  "seeds",
  "sesame",
  "soft drinks",
  "vegetables and herbs"
];

const filters = [
  "All",
  "Reommended",
  "Not Recommended"
];

function ProductsFilters() {
  const [focus, setFocus] = useState(false);
  // const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showFilters, setShowFilters] = useState(false);


  const handleChange = (e) => {
    setInputValue(e.target.value);

  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value !== '') {
      setFocus(true);
      
      console.log(inputValue)
      return;
  } 

    
    return setFocus(false)
    
  }

  const handleClose = () => {
    // setQuery('');
    setInputValue('');
    console.log(inputValue);
  }

  const handleSearch = (e) => {
    // setQuery('');
    setInputValue('');
    console.log("search");
  }

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
    console.log("show modal categories");
  }

  const handleShowFilter = () => {
    setShowFilters(!showFilters);
    console.log("show modal filter");
  }

  
  return (
    <div className="container">
      <h2 className='text'>Products</h2>
      <div className='search-wrapper'>
        <input className='search-bar' type='text' placeholder='Search' onChange={handleInputChange}></input>
        {focus && <button className='close-btn' type="button" onClick={handleClose}><IoClose style={{
          fill: "#E6533C", width: "21px", height: "21px"
        }} /></button>}
        <button className='search-btn' type='submit' onSubmit={handleSearch}><BiSearch style={{ fill: "#EFEDE8",
          width: "18px", height: "18px"
        }} /></button>
      
    
      </div>

       <div className='box'>
         <div className='categories-wrapper'>
        
        <input className='categories-bar' type='text' placeholder='Categories' onChange={handleChange} />
        <button className='chevron-btn' onClick={handleShowCategories}>
          <IoChevronDown style={{
            color:"#EFEDE8",
          width:"18px", height:"18px"}}/>
          </button> 
          
        </div>
       {showCategories &&  <ul className='categories-list'>
          {categories.map(category => {
            return <li className='categories-list-item' key={category} >{category}</li>
          })}
        </ul>}
      </div> 
     
    

      <div className='box'>
        <div className='filters-wrapper'>
          <input className='filters-bar' type='text' placeholder='Filter' onChange={handleChange} />
        <button className='chevron-btn' onClick={handleShowFilter}>
          <IoChevronDown style={{
          color:"#EFEDE8",
          width:"18px", height:"18px"}}/>
          </button>
          
        </div>
        {showFilters && <ul className='filters-list'>
          {filters.map(filter => {
            return <li className='filters-list-item' key={filter} >{filter}</li>
          })}
        </ul>}
      </div>
      
      
    
    </div>
  );
}

export default ProductsFilters;
