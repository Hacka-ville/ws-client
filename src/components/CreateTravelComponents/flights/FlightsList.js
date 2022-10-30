import React, { useState } from 'react';
import {Stack, Card, Text, Divider, Button} from "@mantine/core";

const FlightsList = (props) => {
    const [selectedFlight, setSelectedFlight] = useState(null);

    function getMinDiff(startDate, endDate) {
        const msInMinute = 60 * 1000;

        return Math.round(
            Math.abs(endDate - startDate) / msInMinute
        );
    }

    return (
        <Stack spacing="md" style={{ marginLeft: 'auto', flex: 1}}>
            {props.flights.map((flight, index) => (
                <Card shadow={"md"} style={{ width: "120%", display: 'flex', border: `${flight.id === selectedFlight ? '2px solid blue' : 'none'}`}} id={`flight-${index}`} key={index}>
                    <div style={{ width: '85%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text size="md" style={{ textAlign: 'center'}}>13:25 <div>{flight.location.flightLocation}</div></Text>
                    <Divider size="lg" style={{ width: '50%'}} label={getMinDiff(new Date(flight.flightInformations.flightHour), new Date(flight.flightInformations.arriveHour)) + ' MINS'} labelPosition="center"/>
                    <Text size="md" style={{ textAlign: 'center'}}>{"14:55"}<div>{flight.location.arriveLocation}</div></Text>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <Text size="sm" style={{ color: '#2b2b2b' }} id={flight.id}>Nr. zbor: {flight.number}</Text>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 10px 0 auto'}}>
                        <Text>{flight.price}+ ' $'</Text>
                        <Button variant="outline" onClick={e => {
                            props.setTravel(prevData => ({
                                ...prevData,
                                flight: { ...flight }
                            }));
                            const container = e.target.closest(`#flight-${index}`);
                            setSelectedFlight(container.querySelector(`#${flight.id}`).id);
                        }}>Selecteaza</Button>
                    </div>
                </Card>
            ))}

        </Stack>
    )
}

export default FlightsList;