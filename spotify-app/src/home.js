import React, {Component} from 'react';

const Home = ({onSearch, onInputChange}) => {
  return (
    <div>
      <input type='text' onChange={onInputChange}/>
      <button className='btn-small' onClick={onSearch}>Search</button>
    </div>
  )
}

export default Home;
