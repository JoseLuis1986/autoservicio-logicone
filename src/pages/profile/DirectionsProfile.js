import React, { useEffect, useState } from 'react'
import { CommandBar, DetailsList } from '@fluentui/react'
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'

const overflowProps = { ariaLabel: 'More commands' };

const columns = [
    { key: 1, name: "Nombre o descripcion", fieldName: "city", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
    { key: 2, name: 'Direccion', fieldName: 'street', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 3, name: 'Proposito', fieldName: 'suite', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 4, name: 'Principal', fieldName: 'zipcode', minWidth: 100, maxWidth: 200, isResizable: true },
];

export const DirectionsProfile = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const ac = new AbortController();
        const signal = ac.signal;

        fetch('https://jsonplaceholder.typicode.com/users?_limit=2', { signal })
            .then(response => response.json())
            .then((data) => {
                const addr = []
                const dir = data.map((x) => addr.push(x.address)) // eslint-disable-line
                setItems(addr);
            })
            .catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('fetch aborted')
                }
            })

        return () => ac.abort
    }, [])

    const handleChangeRow = (row, i) => {
        console.log(row);
        console.log(i);

    };

    return (
        <div>
            <div>
                {/* <FocusTrapZone> */}
                <CommandBar
                    items={_items}
                    overflowItems={_overflowItems}
                    overflowButtonProps={overflowProps}
                    farItems={_farItems}
                    ariaLabel="Inbox actions"
                    primaryGroupAriaLabel="Email actions"
                    farItemsGroupAriaLabel="More actions"
                >
                </CommandBar>
                {/* </FocusTrapZone> */}
            </div>
            <div style={{ border: "1px solid lightgray", margin: "0px" }}>
                <DetailsList
                    items={items}
                    columns={columns}
                    onItemInvoked={(item, index) => handleChangeRow(item, index)}
                // onColumnHeaderContextMenu={(column, ev) => console.log(`column ${column.key} contextmenu opened.`)}
                />
            </div>
        </div>
    )
}
