import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { DefaultPalette, DetailsList, Spinner } from '@fluentui/react';


/*
{
            "PayStatementNumber": "USMF-00002577",
            "LineNumber": 16,
            "AmountInTransactionCurrency": 197.38,
            "EmployerContribution": "Yes",
            "TaxCodeCountryRegionId": "USA",
            "AccountingDistributionLegalEntity": "",
            "PositionId": "",
            "LineOverridden": "No",
            "Company": "usmf",
            "AccountingDistributionTemplateId": "",
            "TaxCodeId": "USA-AK-ER_SUTA",
            "AccountingDate": "2016-01-15T12:00:00Z",
            "PayStatementLineSource": "WorkerTaxCode",
            "ReversedPayStatementNumber": "",
            "LineToRemove": "No",
            "ReversedPayStatementLineNum": 0
        },
*/

const columns = [
  { key: 1, name: "Resultados", fieldName: "PositionId", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 2, name: "Codigo de impuesto", fieldName: "TaxCodeId", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: "Descripción", fieldName: "Description", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: "Monto de deducción", fieldName: "AmountInTransactionCurrency", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: "Incluido en factura", fieldName: "TaxCode", minWidth: 100, maxWidth: 200, isResizable: true },
]

export const TaxDeductions = ({ PayStatementNumber }) => {
  const urlBase = 'payments/deductions-imp'
  const params = new URLSearchParams({ PayStatementNumber })
  const url = urlBase + '?' + params;
  const [{ data, loading, error }] = useFetch(url);

  const dataFiltered = data?.filter((item) => item.EmployerContribution === "No");
  console.log(dataFiltered);

  return (
    <>
      <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
        Deducciones de impuestos
      </h6>
      {
        loading
          ? (<Spinner />)
          :
          <DetailsList items={!!dataFiltered && dataFiltered} columns={columns} />
      }
    </>
  )
}
