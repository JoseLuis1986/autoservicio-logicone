import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useFetch } from '../../hooks/useFetch';
import { DetailsList, Spinner } from '@fluentui/react';
// import { Link } from '@fluentui/react/lib/Link';
import { Link } from "@fluentui/react-components";


/**
 * {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTMyNyc=\"",
            "dataAreaId": "usmf",
            "RequestId": "USMF-000002",
            "ReasonCodeId": "",
            "IsSubmittedByHumanResources": "Unknown",
            "PersonnelNumber": "000020",
            "RequestDate": "2017-07-31T12:00:00Z",
            "IsSubmittedOnBehalfOf": "Unknown",
            "LeaveClassification": "TimeOff",
            "Comment": "Not feeling well so taking a few days",
            "Status": "Completed",
            "StartDate": "2017-01-30T12:00:00Z",
            "EndDate": "2017-02-01T12:00:00Z",
            "IsSubmittedByManager": "Unknown",
            "SubmittedByUser": ""
        }
 */

const columns = [
  { key: 1, name: "Submission date ", fieldName: "RequestDate", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 2, name: "Estado", fieldName: "Status", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 3, name: "Tipo de baja", fieldName: "BalanceAvailable", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: "Start date", fieldName: "StartDate", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: "End date", fieldName: "EndDate", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 6, name: "Total amount", fieldName: "BalanceAvailable", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 7, name: "Submitted by", fieldName: "IsSubmittedByManager", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 3, name: "Available balance on 12/  
]

export const TimeOfRequest = () => {
  const { auth } = useContext(AuthContext);
  const { PersonnelNumber } = auth.user;
  const url = 'payments/time-off-request';
  const params = new URLSearchParams({ PersonnelNumber })
  const [{ data, loading }, handleCancelRequest] = useFetch(url + '?' + params)

  const changeName = (val) => {
    if (val === "1900-01-01") {
      return "Unsubmitted"
    } else {
      return val;
    }
  }

  const handleLink = (item) => {
    console.log(item)
  }

  const _onRenderItemColumns = (item, index, column) => {
    const fieldContent = changeName(item[column.fieldName]);
    switch (column.key) {
      case 1:
        return <Link onClick={() => handleLink(item)} inline>{fieldContent}</Link>;
  
      default:
        return <span>{fieldContent}</span>;
    }
  }

  return (
    <>
      {
        loading
          ? (<Spinner />)
          :
          (<DetailsList
            items={!!data && data}
            columns={columns}
            compact={true}
            onRenderItemColumn={_onRenderItemColumns}
            selectionMode={0}
          />)
      }
    </>
  )
}
