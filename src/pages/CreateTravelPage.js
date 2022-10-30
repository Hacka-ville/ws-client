import React, {useState} from 'react';
import {Divider, Grid, Group, Title} from "@mantine/core";
import { TimelineComponent } from "../components/Timeline";
import { IconPlayerTrackNext, IconPlayerTrackPrev } from '@tabler/icons';
import {Button} from "@mantine/core";
import Flights from "../components/CreateTravelComponents/flights/Flights";
import Hotels from "../components/CreateTravelComponents/hotels/Hotels";
import {Activities} from "../components/Activities";
import {Payments} from "../components/Payments";

const CreateTravelPage = (props) => {
    const [travel, setTravel] = useState({
        flight: {},
        hotel: {},
        activities: [],
    })
    const [active, setActive] = useState(0);
    let titlePage = !active ? 'Select the most convenient flight!' : active === 1 ? 'Select the hotel you have a taste for!' : active === 2 ? 'Select the activities you enjoy the most!' : active === 3 ? 'Now let\'s make sure that everything is as you wish to be!' : 'Select the most convenient flight!';

    const renderStep = (step) => {
        switch (step) {
            case 0:
                return <Flights city={props.city} dates={props.dates} setTravel={setTravel}/>;
                break;
            case 1:
                return <Hotels setTravel={setTravel}/>;
                break;
            case 2:
                return <Activities setTravel={setTravel}/>;
                break;
            case 3:
                return <Payments elements={[{ name: 'Hotel London', price: '1200', category: 'Location'}]} travel={travel}/>;
                break;
            default:
                return null;
        }
    }
    return (
        <React.Fragment>
            <Title size="xl" style={{ textAlign: 'center', marginTop: '50px', fontSize: '32px'}}>{titlePage}</Title>

            <Grid grow gutter="md" style={{ minHeight: "calc(100vh - 160px)", padding: "80px"}}>
            <Grid.Col span={2}>
                <TimelineComponent active={active}/>
            </Grid.Col>
                <Divider orientation="vertical" size="md" />
            <Grid.Col span={9}>
                {renderStep(active)}
            </Grid.Col>
        </Grid>
            <Button onClick={() => setActive(active-1)} leftIcon={<IconPlayerTrackPrev size={14} />} style={{ position: 'absolute', left: '100px', display: `${active !== 0 ? "block" : "none"}`}}>
                Previous step
            </Button>
            <Button onClick={() => setActive(active + 1)} leftIcon={<IconPlayerTrackNext size={14} />} style={{ position: 'absolute', right: '100px', display: `${active === 3  && "none"}` }}>
                Next step
            </Button>
        </React.Fragment>
    )
}
export default CreateTravelPage;