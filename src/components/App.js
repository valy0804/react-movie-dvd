import React, { useState, useEffect } from "react";
import MovieListRender from "./MovieListRender";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import FilterMenu from "./FilterMenu";
import { getYear } from "date-fns";
import headerImage from "./img/header-image.png";

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=8d5615661827951bc65cf8e3d868fb88";

const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=8d5615661827951bc65cf8e3d868fb88&query="




function App() {
  // declare movie state var, movie update fn, set it to empty array
  const [movies, setMovies] = useState([]);
  // declare search term state var, search term update fn, set it to empty string
  const [search, setSearch] = useState("");

 // declare cart movies state var, cart movies update fn, set it to empty array
  const [cartMovies, setCartMovies] = useState([]);


  // declare add to cart fn
  function addToCart(movie) {
    // push new movie to cart movies array
     cartMovies.push(movie);
    //  update the cart movies var
     setCartMovies(cartMovies);
  };

  // declare remove movie fn
  function removeMovie(index) {
    // remove movie from cart movies array with splice method by passing index and 1 for 1 element
      cartMovies.splice(index,1);
      // update car movies 
      setCartMovies([...cartMovies])
  };
  
// useEffect hook 
useEffect(() => {
  // conditionally fetch from API end point based on search term variable lenght
  fetch(search.length >= 3 ? (API_SEARCH + search) : API_URL)
    .then( res => res.json())
    .then(data => setMovies(data.results.map((item) => {
      const year = getYear(new Date(item.release_date));
      let price = 5.99;
      let type = "CD";
      if (year >= 2000 && year <= 2010) { price = 9.99; type = "DVD"; }
      if (year > 2010) { price = 15.99; type = "BlueRay"; }
      
      return { ...item, price, type }
    })))
    // dependency array => when this value changes the whole effect block runs
}, [search])




    return (
      <div>
        <div className="site-header">
          <div className='title'>
            <div className='title-img'>
              <img src={headerImage}  alt=""/>
            </div >
          </div >
          <div className="site-content">
              <p className="subtitle">Second-Hand CDs and Blu-Ray</p>
              <p>From lazy afternoons to film nights with all gang, there is always time to indulge in the world of film and TV. <br />Browse our store of second-hand blu-ray at some of the lowest prices. Find your favourite old movies or even <br />new releases in our selection of cheap DVDs for sale.
              </p>
            </div>
            <Cart data={cartMovies} removeMovie={removeMovie} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 60}}>
      <SearchBar value={search} searchMovie={setSearch} />
      <FilterMenu />     
      
    </div>
      </div>
      <div className="movie-container">
        <MovieListRender movies={movies} addToCart={addToCart} />
        </div>
    </div>
    );
  }

export default App;
