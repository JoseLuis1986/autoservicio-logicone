import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { CommandBar, DetailsList, Spinner } from '@fluentui/react';
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { contactPersonal } from '../../helpers/dataHelper';
import { useFetch } from '../../hooks/useFetch';

const overflowProps = { ariaLabel: 'More commands' };

const columns = [
  { key: 1, name: "Nombre", fieldName: "Name", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
  { key: 2, name: 'Relación', fieldName: 'RelationshipType', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Contacto', fieldName: 'IsEmergencyContact', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Dependiente', fieldName: 'IsDependent', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Beneficiario', fieldName: 'IsBeneficiary', minWidth: 100, maxWidth: 200, isResizable: true },
];

export const ContactsProfile = () => {
  const { auth } = useContext(AuthContext);
  const { PersonnelNumber } = auth.user;
  const url = 'employee/personal-contacts';
  const params = new URLSearchParams({ WorkerPersonnelNumber: PersonnelNumber })
  const [{ data, loading }, handleCancelRequest] = useFetch(url + '?' + params);

  console.log(data)
  const handleChangeRow = (row, i) => {
    console.log(row);
    console.log(i);

  };

  return (
    <>
      <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
        Mis contactos personales
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

