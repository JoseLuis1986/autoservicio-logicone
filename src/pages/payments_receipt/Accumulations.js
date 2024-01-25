import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { DetailsList, Spinner } from '@fluentui/react';


const columns = [
  { key: 1, name: "Plan de acumulación de beneficios", fieldName: "AccrualId", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 2, name: "Monto acumulado", fieldName: "AccruedHours", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 3, name: "Monto usado", fieldName: "UsedHours", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 4, name: "Año de plan acumulado", fieldName: "TotalAccruedHours", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 5, name: "Año del plan usado", fieldName: "TotalUsedHours", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 6, name: "Disponible", fieldName: "TotalAccruedHours", minWidth: 150, maxWidth: 200, isResizable: true },
]


export const Accumulations = ({ PayStatementNumber }) => {
  const url = 'payments/accumulation';
  const params = new URLSearchParams({ PayStatementNumber })
  const [{ data, loading, error}] = useFetch(url + '?' + params)

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
