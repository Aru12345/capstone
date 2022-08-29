
function Rcard({restaurant}){
    const{ id,name, cuisine,image, cost, address, hours, closed, phone, must_try, category,website}=restaurant;
    return(
        <>
        <img src={image } alt="pic"/>
        <h2>{name}</h2>
        <h3>{cuisine}</h3>
        <h3>{cost}</h3>
        <h3>{address}</h3>
        <h3>{hours}</h3>
        <h3>{closed}</h3>
        <h4>{phone}</h4>
        <h4>{must_try}</h4>
        <h4>{category}</h4>
        <a href={`/restaurants/${id}`}>View</a>
        <a href={website} target="_blank"  rel="noreferrer"  >Website</a>
        
        </>
    )
}
export default Rcard;