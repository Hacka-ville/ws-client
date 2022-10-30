import {useEffect, useState} from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

export function Activities(props) {
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState(['1']);
    const [activities, setActivities] = useState([
        {
            id: '1',
            name: 'Scuba diving',
            price: '123'
        },
        {
            id: '2',
            name: 'S[pa',
            price: '54'
        }
    ]);
    const toggleRow = (id) =>
        setSelection((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) => (current.length === activities.length ? [] : activities.map((item) => item.id)));

    const rows = activities.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
                <td>
                    <Checkbox
                        checked={selection.includes(item.id)}
                        onChange={() => toggleRow(item.id)}
                        transitionDuration={0}
                    />
                </td>
                <td>
                    <Group spacing="sm">
                        <Text size="sm" weight={500}>
                            {item.name}
                        </Text>
                    </Group>
                </td>
                <td>{item.price}</td>
            </tr>
        );
    });

    useEffect(() => {
        const activities = [];
        for(const activity of selection) {
            activities.push(activity);
        }
        props.setTravel(prevData => ({
            ...prevData,
            activities: [...activities],
        }))
    }, [selection])
    return (
        <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                <tr>
                    <th style={{ width: 40 }}>
                        <Checkbox
                            onChange={toggleAll}
                            checked={selection.length === activities.length}
                            indeterminate={selection.length > 0 && selection.length !== activities.length}
                            transitionDuration={0}
                        />
                    </th>
                    <th>User</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}