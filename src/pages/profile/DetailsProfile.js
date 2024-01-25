import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { CommandBar, DetailsList, Spinner } from '@fluentui/react';
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { useFetch } from '../../hooks/useFetch';

const overflowProps = { ariaLabel: 'More commands' };

const columns = [
  { key: 1, name: "Descripción", fieldName: "Type", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
  { key: 2, name: 'Tipo', fieldName: 'Locator', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Dirección y número de contacto', fieldName: 'Description', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Extensión', fieldName: 'LocatorExtension', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Principal', fieldName: 'IsPrimary', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 6, name: 'Privado', fieldName: 'IsPrivate', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 7, name: 'Propósito', fieldName: 'Purpose', minWidth: 100, maxWidth: 200, isResizable: true },
];

export const DetailsProfile = () => {
  const { auth } = useContext(AuthContext);
  const { PersonnelNumber } = auth.user;
  const url = 'employee/contacts-details';
  const params = new URLSearchParams({ PersonnelNumber })
  const [{ data, loading }, handleCancelRequest] = useFetch(url + '?' + params);

  const handleChangeRow = (row, i) => {
    console.log(row);
    console.log(i);

  };

  return (
    <>
      <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
        Mis detalles personales
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
            loading
              ? (<Spinner />)
              :
              (<DetailsList
                items={!!data && data}
                columns={columns}
                onItemInvoked={(item, index) => handleChangeRow(item, index)}
              />)
          }
        </div>
      </div>
    </>
  )
}
