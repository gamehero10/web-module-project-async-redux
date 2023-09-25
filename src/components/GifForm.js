import { connect } from 'react-redux';
import { getGifs } from '../actions';
import React from 'react';


const GifForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getGifs('fall');
  }


return ( <form onSubmit={handleSubmit}>
     <input />
     <button>Search</button>
     </form>);

}







export default connect(null, { getGifs }) (GifForm);