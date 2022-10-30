import React, {useEffect, useState} from 'react';
import {Container, Title} from "@mantine/core";
import {IconPlaneArrival} from "@tabler/icons";
import {CalendarComponent} from "../../Calendar";
import FlightsList from "./FlightsList";

const Flights = (props) => {
    const [flights, setFlights] = useState([{ id: 'id1'}, { id: 'id3'}]);
    useEffect(() => {
        const getFlightsByLocations = (locations) => {
            fetch('');
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
           <FlightsList flights={flights} />

       </Container>

        </React.Fragment>
    )
}

export default Flights;