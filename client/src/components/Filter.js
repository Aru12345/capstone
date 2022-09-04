function Filter( {handleFilter} ){

 
    return(
        <>
        <div>
      <h4> Filter </h4>
      <select
       onChange={handleFilter} 
     
      >
        <option>All</option>
        <option value="alc">Fine Dinning</option>
        <option value="coffeeshop">Cafe</option>
        <option value="bar">Pub</option>
        
      </select>
    </div>
        </>
    )
}
export default Filter;