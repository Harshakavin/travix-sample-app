import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from 'react-select';
import { addBooking } from "../actions";
import {useHistory} from 'react-router-dom';

const options = [
    { value: '35', label: 'Seat 35' },
    { value: '36', label: 'Seat 36' },
    { value: '37', label: 'Seat 37' },
    { value: '38', label: 'Seat 38' },
    { value: '39', label: 'Seat 39' },
    { value: '40', label: 'Seat 40' },
    { value: '50', label: 'Seat 50' },
]


function BookingComponent({ hide, info, reset }) {

    const [seat, setSeat] = useState(null);
    const [name, setName] = useState(null);
    const [passportNo, setPassportNo] = useState(null);

    const dispatch = useDispatch();
    const navigate = useHistory();

    const book = () => {
        if (seat && name && passportNo) {
            info['fullname'] = name;
            info['passportNo'] = passportNo;
            info['seat'] = seat.value
            dispatch(addBooking(info));
            reset();
            hide();
            navigate.push('/travix-sample-app/bookings');
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col col-md-3 to-from">
                    <input type="text" className="myInput" onKeyUp={(e) => setName(e.target.value.trim())} placeholder="YOUR NAME" />
                </div>
                <div className="col col-md-3 to-from">
                    <input type="text" className="myInput" onKeyUp={(e) => setPassportNo(e.target.value.trim())} placeholder="PASSPORT NO" />
                </div>
                <div className="col col-md-3">
                    <Select options={options} onChange={(s) => setSeat(s)} />
                </div>
                <div className="col col-md-3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" disabled={!seat || !name || !seat} onClick={book} className="btn btn-success">Book</button>
                        <button type="button" onClick={() => reset()} className="btn btn-warning">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default BookingComponent;