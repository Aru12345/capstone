function Rcard({restaurant}){
    const{ name, cuisine, cost, address, hours, closed, phone, must_try, category,website}=restaurant;
    return(
        <>
        <h2>{name}</h2>
        <h3>{cuisine}</h3>
        <h3>{cost}</h3>
        <h3>{address}</h3>
        <h3>{hours}</h3>
        <h3>{closed}</h3>
        <h4>{phone}</h4>
        <h4>{must_try}</h4>
        <h4>{category}</h4>
        <button href={website} target="_blank" >Website</button>
        
        </>
    )
}
export default Rcard;