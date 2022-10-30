import { Timeline, Text } from '@mantine/core';
import { IconPlaneArrival, IconHotelService, IconActivity, IconBrandPaypal } from '@tabler/icons';

const BULLET_SIZE = 32;
const LINE_WIDTH = 4;

export function TimelineComponent(props) {
    return (
        <Timeline active={props.active} bulletSize={BULLET_SIZE} lineWidth={LINE_WIDTH}>
            <Timeline.Item bullet={<IconPlaneArrival size={12} />} title="Flights">
                <Text color="dimmed" size="sm">Let's look for some</Text>
                <Text size="xs" mt={4}><strong style={{ textTransform: 'uppercase'}}>flights</strong> you can opt for</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<IconHotelService size={12} />} title="Hotels">
                <Text color="dimmed" size="sm">Check all the various <strong>hotels</strong></Text>
                <Text size="xs" mt={4}>Around 20.000</Text>
            </Timeline.Item>

            <Timeline.Item title="Activities" bullet={<IconActivity size={12} />} >
                <Text color="dimmed" size="sm"><strong>Activities</strong> that will make your travel better!</Text>
                <Text size="xs" mt={4}>Over 1.000</Text>
            </Timeline.Item>

            <Timeline.Item title="Payments" bullet={<IconBrandPaypal size={12} />}>
                <Text color="dimmed" size="sm">One step left!</Text>
                <Text size="xs" mt={4} style={{ fontWeight: 'bold'}}>Payment</Text>
            </Timeline.Item>
        </Timeline>
    );
}