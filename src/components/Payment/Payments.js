import {Group, Modal, Table, Button} from '@mantine/core';
import React, {useState} from "react";

export function Payments(props) {
    const [opened, setOpened] = useState(false);

    const totalPrice = props.elements.reduce((acc, el) => acc + parseInt(el.price, 10), 0);

    const ths = (
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
    );

    const rows = props.elements.map((element) => (
        <tr key={element.name}>
            <td>{element.category}</td>
            <td>{element.price}</td>
        </tr>
    ));

    return (
        <React.Fragment>
        <Table captionSide="bottom">
            <caption>All the expenses for this vacation</caption>
            <thead>{ths}</thead>
            <tbody>{rows}</tbody>
            <tfoot>
            <td>Total price</td>
            <td></td>
            <td>{totalPrice}</td>
            </tfoot>
        </Table>



                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Esti sigur ca vrei sa continui?"
                >
                    
                </Modal>

                <Group position="center">
                    <Button onClick={() => setOpened(true)}>Confirm payment</Button>
                </Group>
        </React.Fragment>
    );
}