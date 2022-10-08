import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BookingHistoryComponent() {

    const bookingData = useSelector(state => state.bookingData);
    console.log(bookingData);
    const getBookings = () => {
        return bookingData;
    }

    return (
        <div>
            <div className="container top-info-view">
                <div className='row'>
                    <div className="col col-md-6">
                        <h1>Your Bookings <i class="fa fa-ticket fa-2x" aria-hidden="true"></i></h1>
                        <p className='font-weight-light'>Safe travel</p>
                    </div>
                    <div className="col col-md-4">

                    </div>
                    <div className="col col-md-2">
                        <Link className='booking-btn' to="/travix-sample-app/flights"><button type="button" className="btn btn-primary btn-md btn-side">Flights</button></Link>
                    </div>
                </div>
            </div>
            <div className="container table">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Full Name</th>
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
                                <th>{booking.fullname}</th>
                                <td>{booking.way}</td>
                                <td>{booking.from}</td>
                                <td>{booking.to}</td>
                                <td>{booking.date.split('T')[0]}</td>
                                <td>{booking.name + " " + booking.code} </td>
                                <td><i className="fa fa-plane fa-1x" aria-hidden="true"></i>{booking.bording}</td>
                                <td><i className="fa fa-plane fa-1x" aria-hidden="true"></i>{booking.departing}</td>
                                <td>Seat-{booking.seat}</td>
                                <td>{booking.cost}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {bookingData.length === 0 ?

                    <p><b>No bookings</b></p> : ''
                }
            </div>
        </div>
    );

}

export default BookingHistoryComponent;