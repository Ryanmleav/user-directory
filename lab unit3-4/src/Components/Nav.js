import React from 'react';

const Nav = (props) => {
  return (
    <div className='buttons'>
      <button className='button' onClick={props.decrease}>Previous</button>
      <button className='button' onClick={props.increase}>Next</button>
    </div>
  )
}
export default Nav;