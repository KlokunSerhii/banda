import React from 'react';
import styles from "./ProductsFilter.module.css";
import { useState } from 'react';
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
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Products</h2>
      <p  className={styles.description}>Filters</p>
      <div className={styles.searchWrapper}>
        <input className={styles.searchBar} type='text' placeholder='Search' onChange={handleInputChange}></input>
        {focus && <button className={styles.closeBtn} type="button" onClick={handleClose}><IoClose style={{
          fill: "#E6533C", width: "21px", height: "21px"
        }} /></button>}
        <button className={styles.searchBtn} type='submit' onSubmit={handleSearch}><BiSearch style={{ fill: "#EFEDE8",
          width: "18px", height: "18px"
        }} /></button>
      
    
      </div>

       <div className={styles.box}>
         <div className={styles.categoriesWrapper}>
        
        <input className={styles.categoriesBar} type='text' placeholder='Categories' onChange={handleChange} />
        <button className={styles.chevronBtn} onClick={handleShowCategories}>
          <IoChevronDown style={{
            color:"#EFEDE8",
          width:"18px", height:"18px"}}/>
          </button> 
          
        </div>
       {showCategories &&  <ul className={styles.categoriesList}>
          {categories.map(category => {
            return <li className={styles.categoriesListItem} key={category} >{category}</li>
          })}
        </ul>}
      </div> 
     
    

      <div className={styles.box}>
        <div className={styles.filtersWrapper}>
          <input className={styles.filtersBar} type='text' placeholder='Filter' onChange={handleChange} />
        <button className={styles.chevronBtn} onClick={handleShowFilter}>
          <IoChevronDown style={{
          color:"#EFEDE8",
          width:"18px", height:"18px"}}/>
          </button>
          
        </div>
        {showFilters && <ul className={styles.filtersList}>
          {filters.map(filter => {
            return <li className={styles.filtersListItem} key={filter} >{filter}</li>
          })}
        </ul>}
      </div>
      
      
    
    </div>
  );
}

export default ProductsFilters;
