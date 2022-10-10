import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooking } from "../actions";

function BookingHistoryComponent() {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const bookingData = useSelector(state => state.bookingData);
    console.log(bookingData);
    const getBookings = () => {
        return bookingData;
    }

    useEffect(() => {
        if (bookingData.length == 0) {
            dispatch(fetchBooking());
        }
        setTimeout(() => { setLoading(false); }, 2000);
    }, [fetchBooking]);

    return (
        <div>
            <div className="container top-info-view">
                <div className='row'>
                    <div className="col col-md-10 col-sm-10 col-lg-10">
                        <h1>Your Bookings <i className="fa fa-ticket fa-2x" aria-hidden="true"></i></h1>
                        <p className='font-weight-light'>Safe travel</p>
                    </div>
                    <div className="col col-md-2 col-sm-2 col-lg-2">
                        <Link className='booking-btn' to="/travix-sample-app/flights"><button type="button" className="btn btn-primary btn-md btn-side">Flights</button></Link>
                    </div>
                </div>
            </div>
            <div className="container table">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Trip</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Date</th>
                            <th scope="col">Flight</th>
                            <th scope="col">Arival</th>
                            <th scope="col">Departing</th>
                            <th scope="col">Seat</th>
                            <th scope="col">Cost</th>

                        </tr>
                    </thead>
                    <tbody>
                        {getBookings().map((booking, index) =>
                            <tr key={index}>
                                <th>{booking.name}</th>
                                <td>{booking.way}</td>
                                <td>{booking.from}</td>
                                <td>{booking.to}</td>
                                <td>{booking.date && booking.date.split('T')[0]}</td>
                                <td>{booking.flightCode + " " + booking.group} </td>
                                <td><i className="fa fa-plane fa-1x switch-side" aria-hidden="true"></i>{booking.arrivalTime}</td>
                                <td><i className="fa fa-plane fa-1x" aria-hidden="true"></i>{booking.departing}</td>
                                <td>Seat-{booking.seat}</td>
                                <td>{booking.cost}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {bookingData.length === 0 && !loading ?

                    <p><b>No bookings</b></p> : ''
                }
                { bookingData.length === 0 && loading ?

                    <p><b>Please wait...</b></p> : ''
                }
            </div>
        </div>
    );

}

export default BookingHistoryComponent;