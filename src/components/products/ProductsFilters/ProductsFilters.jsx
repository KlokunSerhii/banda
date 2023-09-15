import React from 'react';
import "./ProductsFilter.module";
import { useState, useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
import { IoClose, IoChevronDown } from "react-icons/io5";
// import { HiChevronDown } from "react-icons/hi2";


import {
  SearchWrapper,
  CategoriesWrapper,
  FilterWrapper,
  Container,
  CategoriesList,
  FiltersList,
  Text,
  SearchBar,
  CategoriesBar,
  FilterBar,
  CategoriesListItem,
  FilterListItem,
  CloseBtn,
  SearchBtn,
  ChevronBtn,
  Div
  // SvgIcon
} from './ProductsFilter.module';

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
    <Container>
      <Text>Products</Text>
      <SearchWrapper>
        <SearchBar type='text' placeholder='Search' onChange={handleInputChange}></SearchBar>
        {focus && <CloseBtn type="button" onClick={handleClose}><IoClose style={{
          fill: "#E6533C", width: "21px", height: "21px"
        }} /></CloseBtn>}
        <SearchBtn type='submit' onSubmit={handleSearch}><BiSearch style={{ fill: "#EFEDE8",
          width: "18px", height: "18px"
        }} /></SearchBtn>
      
    
      </SearchWrapper>

       <Div>
         <CategoriesWrapper>
        
        <CategoriesBar type='text' placeholder='Categories' onChange={handleChange} />
        <ChevronBtn onClick={handleShowCategories}>
          <IoChevronDown style={{
            color:"#EFEDE8",
          width:"18px", height:"18px"}}/>
          </ChevronBtn> 
          
        </CategoriesWrapper>
       {showCategories &&  <CategoriesList>
          {categories.map(category => {
            return <CategoriesListItem key={category} >{category}</CategoriesListItem>
          })}
        </CategoriesList>}
      </Div> 
     
    

      <Div>
        <FilterWrapper>
          <FilterBar type='text' placeholder='Filter' onChange={handleChange} />
        <ChevronBtn onClick={handleShowFilter}>
          <IoChevronDown style={{
          color:"#EFEDE8",
          width:"18px", height:"18px"}}/>
          </ChevronBtn>
          
        </FilterWrapper>
        {showFilters && <FiltersList>
          {filters.map(filter => {
            return <FilterListItem key={filter} >{filter}</FilterListItem>
          })}
        </FiltersList>}
      </Div>
      
      
    
    </Container>
  );
}

export default ProductsFilters;
