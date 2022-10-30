import React, {useEffect, useState} from 'react';
import {Container, Title} from "@mantine/core";
import {IconPlaneArrival} from "@tabler/icons";
import {CalendarComponent} from "../../Calendar";
import FlightsList from "./FlightsList";
import {getCoordinates, getCity} from "../../../utils/GetCityNameByLocation";

const Flights = (props) => {
    const [startDate, endDate] = props.dates[0];
    const [currentCity, setCurrentCity] = useState('');
    const [coordinates, setCoordinates] = useState([]);
    const cityName = props.city[0];
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getCoordinates(setCoordinates, setCurrentCity);
        getCity(coordinates, setCurrentCity);
    }, [])

    useEffect(() => {
        const getFlightsByLocations = () => {
            fetch('/route-fligth', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    startDate: `${startDate.getFullYear()}-${parseInt(startDate.getMonth(), 10)> 9 ? startDate.getMonth() : '0' + startDate.get()}-${startDate.getDate()}`,
                    endDate: `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDay()}`,
                    location: {
                        flightLocation: cityName,
                        arriveLocation: currentCity
                    }
                })
            }).then(res => res.json())
                .then(data => setFlights([...data]))
        }
        getFlightsByLocations()
    }, [])
    const [selectedDay, setSelectedDay] = useState(new Date("11-10-2021"));
    console.log(selectedDay);
    const from = "Timisoara";
    const to = "Millano Bergmao";

    return (
        <React.Fragment>
       <Container mx="xl" style={{ display: 'flex', marginRight: '0', maxWidth: '90%'}}>
           <div>
           <Title order={3}><IconPlaneArrival /> {`${from} - ${to}`}</Title>
           <CalendarComponent selectedDay={selectedDay} onChange={(day) => setSelectedDay(day)}/>
           </div>
           <FlightsList flights={flights} setTravel={props.setTravel}/>

       </Container>

        </React.Fragment>
    )
}

export default Flights;