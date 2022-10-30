import React, {useState} from 'react';
import {Card, Container, Image, Rating, Text} from "@mantine/core";

const HotelsList = (props) => {
    const [selectedHotel, setSelectedHotel] = useState(null);

    const metaData = hotel => {
        return <div style={{ padding: '10px', width: '100%'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Text size="xl" style={{ color: 'blue'}}>{"Hotel"}</Text>
                <Text style={{ width: '30px', height: '30px', borderRadius: '4px', lineHeight: '30px', textAlign: 'center', backgroundColor: 'darkblue', color: 'white'}}>8</Text>
            </div>
            <div style={{ display: 'flex' }}>
            <Text size="sm" style={{ display: 'inline-block', marginRight: "10px"}}>London</Text><Rating value="4"></Rating>
            </div>
            <Text style={{ color: '#3b3b3b', fontStyle: 'italic', marginTop: '7px', wordBreak: 'break-all'}}>Lorem ispum fjofsdisdmvdfovmsoiddddddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddmoi</Text>
            {hotel.facilities.map((facility, index) => <Text size="sm" style={{ display: 'inline', color: 'darkgray', marginRight: '6px', marginBottom: '20px'}} key={index}>{facility}</Text>)}
            <div style={{ float: 'right' }}>
            <Text style={{ textAlign: 'right', fontWeight: 'bold'}}>Pret/Persoana</Text>
            <Text style={{ fontSize: '30px', color: 'orangered', fontWeight: 'bolder'}}>123 RON</Text>
            </div>
            </div>
    }
    return (
        <Container style={{ width: '50%'}}>
            {props.hotels.map((hotel, index) => (
                <Card onClick={() => {
                    setSelectedHotel(hotel.id);
                    props.setTravel(prevData => ({
                        ...prevData,
                            hotel: {...hotel},
                    }))
                }} shadow="xs" mt="md" style={{ width: "120%", display: 'flex', border: `${hotel.id === selectedHotel ? '2px solid red' : 'none'}`, padding: '0'}} id={`hotel-${index}`} key={index}>
                    <div style={{ height: '150px'}}>
                        <Image
                            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            alt="Random unsplash image"
                        />
                    </div>
                    {metaData(hotel)}
                </Card>
            ))}
        </Container>
    )
}
export default HotelsList;