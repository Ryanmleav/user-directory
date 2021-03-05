import React from 'react';


const InfoCards = (props) => {

  const { info, index } = props
  console.log(info)
  return (

    <div className="card">
      <div className="card-number">
        <h2> {info[index].id}/25</h2>
      </div>
     <h1>{info[index].name.first} {info[index].name.last}</h1>
     <h3>From: {info[index].city} {info[index].country}</h3>
     <h3>Job Title: {info[index].title}</h3>
     <h3>Employer: {info[index].employer}</h3>
     <h3>Favorites Movies</h3>
         <ol>{info[index].favoriteMovies.map(elem => <li>{elem}</li>)}</ol>
     </div>
  
  )
}
export default InfoCards;