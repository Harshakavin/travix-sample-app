import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import { setFlights } from "../../actions";
import FlightComponent from "../components";
import { createMemoryHistory } from 'history';

jest.mock("axios");
//jest.mock('./travix-sample-app/flights', () => () => 'SomeComponent');

const dummyFlights = 
    [
        { id: 1, from: 'Dubai', to : "Netherland", date : "2022-10-08T18:11:22.668Z", name : "Emirates", code: "LH 721", departing: "10:00 PM", bording: "09:20 PM", cost: "200USD"},
        { id: 2, from: 'Netherland' , to : "Dubai", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 722", departing: "9:10 PM", bording: "08:20 PM", cost: "200USD"},
        { id: 3, from: 'UK' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 721", departing: "10:00 PM", bording: "09:20 PM", cost: "540USD"},
        { id: 4, from: 'Netherland' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 725", departing: "10:00AM", bording: "09:20 AM", cost: "200USD"},
        { id: 5, from: 'UK' , to : "USA", date : "2022-10-08T18:11:22.668Z", name : "Airways", code: "LH 721", departing: "10:00 PM", bording: "09:20 PM", cost: "540USD"},
    ]

test("flights list", async () => {
    axios.get.mockResolvedValue({ data: {response : dummyTodos }});
    despatch(setFlights(dummyFlights));

render(<FlightComponent />);

const flightList = await waitFor(() => screen.findAllByTestId("flightList"));

expect(flightList).toHaveLength(5);
});

describe('Flight button click', () => {
    test('should pass', () => {
      const history = createMemoryHistory({ initialEntries: ['/travix-sample-app'] });
      expect(history.location.pathname).toBe('/travix-sample-app');
      fireEvent.click('#flights');
      expect(history.location.pathname).toBe('/travix-sample-app/flights');
    });
  });