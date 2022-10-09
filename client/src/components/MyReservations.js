import { useEffect } from "react";
import ReservationCard from "./ReservationCard";
import { useContext } from "react";
import { Cont } from "../Cont";

function MyReservations() {
  const { reservations, setReservations } = useContext(Cont);

  useEffect(() => {
    fetch("/reservations")
      .then((res) => res.json())
      .then((reservationData) => {
        setReservations(reservationData);
      });
  }, []);

  function handleUpdateReservation(updatedReservation) {
    const updatedReservations = reservations.map((reservation) => {
      if (reservation.id === updatedReservation.id) {
        return updatedReservation;
      } else {
        return reservation;
      }
    });
    setReservations(updatedReservations);
  }

  function handleCancel(reservationtodelete) {
    const newReservations = reservations.filter(
      (r) => r.id !== reservationtodelete
    );
    setReservations(newReservations);
  }

  const renderReservations = reservations.map((reservation) => (
    <ReservationCard
      key={reservation.id}
      reservation={reservation}
      handleCancel={handleCancel}
      onUpdateReservation={handleUpdateReservation}
    />
  ));

  return <>{renderReservations}</>;
}
export default MyReservations;
