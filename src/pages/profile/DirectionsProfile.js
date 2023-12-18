import React, { useCallback, useContext, useEffect, useState } from 'react'
import { CommandBar, DetailsList, ShimmeredDetailsList, Spinner } from '@fluentui/react'
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { AuthContext } from '../../auth/AuthContext';
import { directionsContact } from '../../helpers/dataHelper';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { fetchWithToken } from '../../helpers/fetch';

const overflowProps = { ariaLabel: 'More commands' };

const columns = [
    { key: 1, name: "Nombre o descripcion", fieldName: "AddressDescription", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
    { key: 2, name: 'Direccion', fieldName: 'FormattedAddress', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 3, name: 'Proposito', fieldName: 'AddressLocationRoles', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 4, name: 'Principal', fieldName: 'IsRoleHome', minWidth: 100, maxWidth: 200, isResizable: true },
];


export const DirectionsProfile = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { auth } = useContext(AuthContext);
    const { PersonnelNumber } = auth.user;
    console.log(items);

    const getDir = useCallback(async () => {
        const url = 'employee/addresses';
        const data = await fetchWithToken(url + '?' + new URLSearchParams({ PersonnelNumber: PersonnelNumber }));
        return data;
    }, []);

    useEffect(() => {
        const ac = new AbortController();
        const signal = ac.signal;
        getDir()
            .then((res) => {
                if(res.ok) {
                    setItems(res.data);
                    setLoading(false);
                } else {
                    console.log('no se ha podido cargar la informacion');
                }
            })
            .catch((err) => console.log(err))
        return () => ac.abort
    }, [])

    const handleChangeRow = (row, i) => {
        console.log(row);
        console.log(i);

    };

    return (
        <>
            <div style={{ backgroundColor: "white", paddingBottom: "10px" }}>
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
                <div style={{ border: "1px solid lightgray", margin: "10px" }}>
                    {
                        loading ?
                            <Spinner />
                            :
                            <DetailsList
                                items={items}
                                columns={columns}
                                onItemInvoked={(item, index) => handleChangeRow(item, index)}
                            // onColumnHeaderContextMenu={(column, ev) => console.log(`column ${column.key} contextmenu opened.`)}
                            />
                    }
                </div>
            </div>
        </>
    )
}
