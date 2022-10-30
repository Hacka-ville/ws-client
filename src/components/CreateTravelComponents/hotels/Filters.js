import React from 'react';
import {Container, MultiSelect, NumberInput, RangeSlider, Rating, Select, Switch, Text} from "@mantine/core";

const Filters = (props) => {
    const maxPrice = () => {
        const pricesHotel = props.hotels.map(hotel => hotel.price.split('$')[0])
        return Math.max(...pricesHotel);
    }
    return (
        <Container style={{ width: '35%', display: 'inline-block'}}>
            <Text>Price Range: </Text>
            <RangeSlider defaultValue={[0, maxPrice().toString()]} marks={[{ value: 0, label: '0$'}, { value: 100, label: maxPrice().toString()}]} />
            <NumberInput mt="lg" label="Number of days" placeholder="Ex: 2" min={1}/>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px'}}>
            <Text>Rating: </Text>
            <Rating defaultValue={3} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px'}}>
            <MultiSelect
                transition="pop-top-left"
                transitionDuration={80}
                transitionTimingFunction="ease"
                label="Facilitati:"
                size="md"
                mt="md"
                style={{ width: '45%' }}
                placeholder="Alege una sau mai multe dintre facilitati: "
                data={[
                    { value: 'Swimming Pool', label: 'Swimming Pool' },
                    { value: 'Spa', label: 'Spa' },
                    { value: 'Kitchen', label: 'Kitchen' },
                    { value: 'Billiard board', label: 'Billiard board' },
                ]}
            />
                <Select
                    transition="pop-top-left"
                    transitionDuration={80}
                    transitionTimingFunction="ease"
                    label="Tematica:"
                    size="md"
                    mt="md"
                    style={{ width: '45%', marginLeft: 'auto'}}
                    placeholder="Alege o tematica: "
                    data={[
                        { value: 'Swimming Pool', label: 'Swimming Pool' },
                        { value: 'Spa', label: 'Spa' },
                        { value: 'Kitchen', label: 'Kitchen' },
                        { value: 'Billiard board', label: 'Billiard board' },
                    ]}
                />

            </div>
            <Switch label="Ordoneaza dupa pret" checked/>
            <Switch label="Ordoneaza dupa rating" />
        </Container>
    )
}

export default Filters;