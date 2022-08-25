function ReservationCard({reservation}){
    const{ id, name, date, time, num, contact, occasion}=reservation;
    return(
        <>
        <h1>ReservationCard</h1>
        <h2>{name}</h2>
        <h2>{date}</h2>
        <h2>{time}</h2>
        <h2>{num}</h2>
        <h2>{contact}</h2>
        <h2>{occasion}</h2>
        <h3>For-{reservation.restaurant.name}</h3>
        </>
    )
}
export default ReservationCard;