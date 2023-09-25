import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import GifList from './components/GifList';
import GifForm from './components/GifForm';

import data from './data/gifs';

import { getGifs } from './actions';








function App(props) {
  const {loading, error} = props;

  useEffect(() => {
    getGifs('arms'); 
  }, [])

  if(error !== '') {
    return <h3>{error}</h3>;
  }
  
  
  return (
    <div className="App">
      <h1>Search for GIFs</h1>
      <GifForm />

      {
        loading ? <h3>We are loading</h3> : <GifList /> 
      }    


    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}


export default connect(mapStateToProps, { getGifs }) (App);