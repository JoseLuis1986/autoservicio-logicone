import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { CommandBar, DetailsList, Spinner } from '@fluentui/react';
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { detailsContact } from '../../helpers/dataHelper';

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
  const [items, setItems] = useState([]);
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { value } = JSON.parse(JSON.stringify(detailsContact));
        setItems(value);
        setLoading(false);
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
