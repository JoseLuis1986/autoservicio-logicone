import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { CommandBar, DetailsList, ShimmeredDetailsList, Spinner } from '@fluentui/react'
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { AuthContext } from '../../auth/AuthContext';
import { useFetch } from '../../hooks/useFetch';

const overflowProps = { ariaLabel: 'More commands' };

const columns = [
    { key: 1, name: "Nombre o descripcion", fieldName: "AddressDescription", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
    { key: 2, name: 'Direccion', fieldName: 'FormattedAddress', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 3, name: 'Proposito', fieldName: 'AddressLocationRoles', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 4, name: 'Principal', fieldName: 'IsRoleHome', minWidth: 100, maxWidth: 200, isResizable: true },
];


export const DirectionsProfile = () => {
    const [items, setItems] = useState([]);
    const { auth } = useContext(AuthContext);
    const { PersonnelNumber } = auth.user;
    const url = 'employee/addresses';
    const params = new URLSearchParams({ PersonnelNumber: PersonnelNumber })
    const [{ data, loading, error }, handleCancelRequest] = useFetch(url + '?' + params);


    const handleChangeRow = (row, i) => {
        console.log(row);
        console.log(i);
    };

    return (
        <>
            <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
                Mis direcciones
            </h6>
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
                                items={!!data && data}
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
