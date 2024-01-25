import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useFetch } from '../../hooks/useFetch';
import { DetailsList, Spinner } from '@fluentui/react';

/**
 * {
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-02T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "PTO",
            "Amount": 8,
            "HalfDayDefinition": "None",
            "RequestDate": "2023-12-20"
        },
 */
const columns = [
  { key: 1, name: "Fecha ", fieldName: "RequestDate", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 2, name: "Tipo", fieldName: "LeaveTypeId", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: "Cantidad", fieldName: "Amount", minWidth: 100, maxWidth: 200, isResizable: true },
]

export const ApprovedPermissions = () => {
  const { auth } = useContext(AuthContext);
  const { PersonnelNumber } = auth.user;
  const url = 'payments/time-off-approved';
  const params = new URLSearchParams({ PersonnelNumber })
  const [{ data, loading, error }, handleCancelRequest]= useFetch(url + '?' + params);

  return (
    <>
      {
        loading
          ? (<Spinner />)
          :
          (<DetailsList items={!!data && data} columns={columns} compact={true} />)
      }
    </>
  )
}
