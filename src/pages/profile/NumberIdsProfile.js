import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { CommandBar, DetailsList, Spinner } from '@fluentui/react';
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { useFetch } from '../../hooks/useFetch';

const overflowProps = { ariaLabel: 'More commands' };

const columns = [
  { key: 1, name: "Tipo de identificación", fieldName: "IdentificationTypeId", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
  { key: 2, name: 'Número', fieldName: 'IdentificationNumber', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Descripción', fieldName: 'Description', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Tipo de entrada', fieldName: 'EntryType', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Principal', fieldName: 'IsPrimary', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 6, name: 'Issuing agency', fieldName: 'IssuingAgencyId', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 7, name: 'Fecha de emisión', fieldName: 'IssuedDate', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 8, name: 'Fecha de vencimiento', fieldName: 'ExpirationDate', minWidth: 100, maxWidth: 200, isResizable: true },
];

export const NumberIdsProfile = () => {
  const { auth } = useContext(AuthContext);
  const { PartyNumber } = auth.user;
  const url = 'employee/personal-ids';
  const params = new URLSearchParams({ PartyNumber });
  const [{ data, loading, error }, handleCancelRequest] = useFetch(url + '?' + params);

  const handleChangeRow = (row, i) => {
    console.log(row);
    console.log(i);

  };

  return (
    <>
      <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
        Mis números de identificación
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
        {/* </FocusTrapZone> */}
        <div style={{ border: "1px solid lightgray", margin: "10px" }}>
          {
            loading
              ? (<Spinner />)
              :
              (
                <DetailsList
                  items={!!data && data}
                  columns={columns}
                  onItemInvoked={(item, index) => handleChangeRow(item, index)}
                // onColumnHeaderContextMenu={(column, ev) => console.log(`column ${column.key} contextmenu opened.`)}
                />
              )
          }
        </div>
      </div>
    </>
  )
}



// import React from 'react'

// export const ContactsProfile = () => {
//   return (
//     <div>ContactsProfile</div>
//   )
// }





// import React from 'react'

// export const NumberIdsProfile = () => {
//   return (
//     <div>NumberIdsProfile</div>
//   )
// }
