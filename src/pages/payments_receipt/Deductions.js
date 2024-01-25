import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { DetailsList, Spinner } from '@fluentui/react';
import { MontoFormateado } from '../../helpers/montoFormateado';

const columns = [
  { key: 1, name: "Resultados", fieldName: "PositionId", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 2, name: "Beneficio", fieldName: "BenefitPlanId", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 3, name: " ", fieldName: "BenefitOptionId", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 4, name: "Descripción", fieldName: "Description", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 5, name: "Puesto", fieldName: "PositionId", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 6, name: "Monto de deducción", fieldName: "AccountingCurrencyAmount", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 7, name: "Incluido en factura", fieldName: "TaxCode", minWidth: 150, maxWidth: 200, isResizable: true },
]

export const Deductions = ({ data, loading }) => {
  const dataFiltered = data?.filter((item) => item.IsEmployer === "No").map((ded) => {
    const data = {
      ...ded,
      AccountingCurrencyAmount: MontoFormateado(ded.AccountingCurrencyAmount)
    }
    return data;
  });

  return (
    <>
      <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
        Ganancias
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
