import { Timeline, Text } from '@mantine/core';
import { IconPlaneArrival, IconHotelService, IconActivity, IconBrandPaypal } from '@tabler/icons';

const BULLET_SIZE = 32;
const LINE_WIDTH = 4;

export function TimelineComponent(props) {
    return (
        <Timeline active={props.active} bulletSize={BULLET_SIZE} lineWidth={LINE_WIDTH}>
            <Timeline.Item bullet={<IconPlaneArrival size={12} />} title="Flights">
                <Text color="dimmed" size="sm">Let's look for some</Text>
                <Text size="xs" mt={4}>flights you can opt for</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<IconHotelService size={12} />} title="Hotels">
                <Text color="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
                <Text size="xs" mt={4}>52 minutes ago</Text>
            </Timeline.Item>

            <Timeline.Item title="Activities" bullet={<IconActivity size={12} />} >
                <Text color="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
                <Text size="xs" mt={4}>34 minutes ago</Text>
            </Timeline.Item>

            <Timeline.Item title="Payments" bullet={<IconBrandPaypal size={12} />}>
                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                <Text size="xs" mt={4}>12 minutes ago</Text>
            </Timeline.Item>
        </Timeline>
    );
}