import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { CommandBar, DetailsList, Spinner } from '@fluentui/react';
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { contactPersonal } from '../../helpers/dataHelper';

const overflowProps = { ariaLabel: 'More commands' };

const columns = [
  { key: 1, name: "Nombre", fieldName: "Name", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
  { key: 2, name: 'Relación', fieldName: 'RelationshipType', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Contacto', fieldName: 'IsEmergencyContact', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Dependiente', fieldName: 'IsDependent', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Beneficiario', fieldName: 'IsBeneficiary', minWidth: 100, maxWidth: 200, isResizable: true },
];

export const ContactsProfile = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const { value } = JSON.parse(JSON.stringify(contactPersonal));
    setItems(value);
    setLoading(false);
  }, [])

  // useEffect(() => {
  //   const ac = new AbortController();
  //   const signal = ac.signal;

  //   fetch('https://jsonplaceholder.typicode.com/users?_limit=2', { signal })
  //     .then(response => response.json())
  //     .then((data) => {
  //       const addr = []
  //       const dir = data.map((x) => addr.push(x.address)) // eslint-disable-line
  //       setItems(addr);
  //     })
  //     .catch((e) => {
  //       if (e.name === 'AbortError') {
  //         console.log('fetch aborted')
  //       }
  //     })

  //   return () => ac.abort
  // }, [])

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
        {/* </FocusTrapZone> */}
        <div style={{ border: "1px solid lightgray", margin: "10px" }}>
          {
            loading
              ? (<Spinner />)
              :
              (<DetailsList
                items={items}
                columns={columns}
                onItemInvoked={(item, index) => handleChangeRow(item, index)}
              />)
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
