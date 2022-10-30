import React, { useState } from 'react';
import {Stack, Card, Text, Divider, Button} from "@mantine/core";

const FlightsList = (props) => {
    const [selectedFlight, setSelectedFlight] = useState(null);
    return (
        <Stack spacing="md" style={{ marginLeft: 'auto', flex: 1}}>
            {props.flights.map((flight, index) => (
                <Card shadow={"md"} style={{ width: "120%", display: 'flex', border: `${flight.id === selectedFlight ? '2px solid blue' : 'none'}`}} id={`flight-${index}`} key={index}>
                    <div style={{ width: '75%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text size="md" style={{ textAlign: 'center'}}>13:25 <div>Timisoare</div></Text>
                    <Divider size="lg" style={{ width: '50%'}}/>
                    <Text size="md" style={{ textAlign: 'center'}}>{"14:55"}<div>Milano</div></Text>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <Text size="sm" style={{ color: '#2b2b2b' }} id={flight.id}>Nr. zbor: FR123</Text>
                        <Text size="sm" style={{ color: '#2b2b2b' }}>Locuri ramase: 12</Text>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 10px 0 auto'}}>
                        <Text>123$</Text>
                        <Button variant="outline" onClick={e => {
                            // props.setTravelData(travel => ({
                            //     ...travel,
                            //     flight: flight
                            // }));
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