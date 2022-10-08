import Select from 'react-select';
import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFlights } from '../actions';
import BookingComponent from './BookingComponent';

const options = [
    { value: 'ONE-WAY', label: 'One-Way' },
    { value: 'RETURN', label: 'RETURN' },
]

function FlightComponent() {

    const dispatch = useDispatch();

    const flightsData = useSelector(state => state.flights);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(new Date('2022-10-08T18:11:22.668Z'));
    const [way, setWay] = useState({ value: 'ONE-WAY', label: 'One-Way' });

    const [booking, setBooking] = useState(false);
    const [chooseFlight, setChooseFlight] = useState(null);

    useEffect(() => {
        // dispatch(setFlights([
        //     { id: 1, from: 'Dubai', to : "Netherland", date : "2022-10-08T18:11:22.668Z", name : "Emirates", code: "LH 721", departing: "10:00 PM", bording: "09:20 PM", cost: "200USD"},
        //     { id: 2, from: 'Netherland' , to : "Dubai", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 722", departing: "9:10 PM", bording: "08:20 PM", cost: "200USD"},
        //     { id: 3, from: 'UK' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 721", departing: "10:00 PM", bording: "09:20 PM", cost: "540USD"},
        //     { id: 4, from: 'Netherland' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 725", departing: "10:00AM", bording: "09:20 AM", cost: "200USD"},
        //     { id: 5, from: 'UK' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 721", departing: "10:00 PM", bording: "09:20 PM", cost: "540USD"},
        //     { id: 6, from: 'Netherland' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 727", departing: "10:00AM", bording: "09:20 AM", cost: "200USD"},
        //     { id: 6, from: 'India' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 721", departing: "10:00AM", bording: "09:20 AM", cost: "200USD"},
        //     { id: 6, from: 'USA' , to : "India", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 728", departing: "10:00AM", bording: "09:20 AM", cost: "200USD"},
        //     { id: 6, from: 'Netherland' , to : "India", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 721", departing: "10:00AM", bording: "09:20 AM", cost: "399USD"},
        //     { id: 6, from: 'Sri Lanka' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 726", departing: "10:00AM", bording: "09:20 AM", cost: "499USD"}
        // ]));
        dispatch(fetchFlights());
    }, [fetchFlights]);

    const getFilterFlights = () => {
        const filter = flightsData ? flightsData.filter(f => (!from || f.from.toLowerCase().search(from.toLowerCase())) !== -1 &&
                                                             (!to || f.to.toLowerCase().search(to.toLowerCase()) !== -1) &&
                                                             (new Date(f.date).toLocaleDateString("en-US") === date.toLocaleDateString("en-US")) &&
                                                             (!chooseFlight || f.id === chooseFlight.id)) : [];

        return filter;
    }

    const reset = () => {
        setFrom('');
        setTo('');
        setBooking(false);
        setWay({ value: 'ONE-WAY', label: 'One-Way' });
        setDate(new Date('2022-10-08T18:11:22.668Z'));
        setChooseFlight(null);
    }

    const choose = (item) => {
        setTo(item.to);
        setFrom(item.from);
        item['way'] = way.value;
        setChooseFlight(item);
        setBooking(true);
    }

    return (
        <div>
            <div className="container top-info-view">
                <div className='row'>
                    <div className="col col-md-6 col-sm-6 col-lg-6">
                        <h1>Flights <i className="fa fa-paper-plane fa-2x" aria-hidden="true"></i></h1>
                        <p className='font-weight-light'>Reach your destination safe and affordably  </p>
                    </div>
                    <div className="col col-md-4 col-sm-4 col-lg-4">

                    </div>
                    <div className="col col-md-2">
                        <Link className='booking-btn' to="/travix-sample-app/bookings"><button type="button" className="btn btn-primary btn-md btn-side">Your Bookings</button></Link>
                    </div>
                </div>
            </div>
            <div className="container table">
                <br />
                <div className="row">
                    <div className="col col-md-2 col-sm-2 col-lg-2">
                        <Select value={way} options={options} onChange={(way) => setWay(way)} />
                    </div>
                    <div className="col col-md-3 col-sm-3 col-lg-3 top-5x">
                        <input type="text" disabled={booking} className="myInput" value={from} onChange={(e) => setFrom(e.target.value.trim())} placeholder="YOUR FLIGHT FROM" />
                    </div>
                    <div className="col col-md-3 col-sm-3 col-lg-3 top-5x">
                        <input type="text" disabled={booking} className="myInput" value={to} onChange={(e) => setTo(e.target.value.trim())} placeholder="YOUR FLIGHT TO" />
                    </div>
                    <div className="col col-md-1">
                        <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col col-md-2 col-sm-2 col-lg-2">
                        <DatePicker className='date-picker' selected={date} onChange={(date) => setDate(date)} />
                    </div>
                </div>
                {booking ?
                    <div className='row'>
                        <BookingComponent hide={() => setBooking(false)} info={chooseFlight} reset={reset} />
                    </div>
                    : ''
                }

                <table className="table table-hover">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Flight</th>
                            <th scope="col" className='text-left' >From</th>
                            <th scope="col" className='text-left'>To</th>
                            <th scope="col">Date</th>
                            <th scope="col">Departing</th>
                            <th scope="col">Cost</th>
                            {!booking ? <th scope="col">Action</th> : ''}
                        </tr>
                    </thead>
                    <tbody>
                        {getFilterFlights().map(flight =>
                            <tr key={flight.id}>
                                {/* <th scope="row">{flight.id}</th> */}
                                <td>{flight.name + " " + flight.code} </td>
                                <td className='text-left'>{flight.from}</td>
                                <td className='text-left'>{flight.to}</td>
                                <td>{flight.date.split('T')[0]}</td>

                                <td><i className="fa fa-plane fa-1x" aria-hidden="true"></i>{flight.departing}</td>
                                <td>{flight.cost}</td>
                                {!booking ? <td>
                                    <button type="button" onClick={() => choose(flight)} className="btn btn-outline-success btn-sm btn-block">Choose</button>
                                </td> : ''}
                            </tr>
                        )}
                    </tbody>
                </table>
                {flightsData.length === 0 ?

                    <p><b>Please wait......</b></p> : ''
                }
            </div>
        </div>
    );

}

export default FlightComponent;