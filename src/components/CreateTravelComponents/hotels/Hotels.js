import React from 'react';
import Filters from "./Filters";
import HotelsList from "./HotelsList";
import {Container} from "@mantine/core";

const Hotels = () => {
    const hotels = [{
        facilities: ['Da', 'Spa'],
        id: '1',
        price: '123$',
    }, {
        facilities: ['Da', 'Spa'],
        id: '2',
        price: '23$',
    }]
    return (
        <Container size="xl" style={{ display: 'flex'}}>
        <Filters hotels={hotels}/>
            <HotelsList hotels={hotels} />
        </Container>
    )
}

export default Hotels;