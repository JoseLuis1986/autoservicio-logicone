import React from 'react'
import { DetailsList, Spinner } from '@fluentui/react'
import { useFetch } from '../../hooks/useFetch';
import dayjs from 'dayjs';

const columns = [
    { key: 1, name: "Resultados de comprobación del presupuesto", fieldName: "PayStatementNumber", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 2, name: "Fecha", fieldName: "AccountingDate", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 3, name: "Codigo de ganancia", fieldName: "EarningCode", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 4, name: "Descripción", fieldName: "Description", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 5, name: "Puesto", fieldName: "PositionId", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 6, name: "Cantidad", fieldName: "Quantity", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 7, name: "Tarifa", fieldName: "EarningRate", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 8, name: "Monto", fieldName: "AccountingCurrencyAmount", minWidth: 100, maxWidth: 200, isResizable: true },

]

export const Earnings = ({ PersonnelNumber, PayStatementNumber }) => {
    const url = 'payments/payroll-statementlist';
    const params = new URLSearchParams({ PersonnelNumber, PayStatementNumber });
    const [{ data, loading, error }] = useFetch(url + '?' + params)

    let dt = []
    data?.map((item) => {
        const d = {
            ...item,
            AccountingDate: dayjs(item.AccountingDate).format('YYYY-MM-DD')
        }
        dt.push(d);
    })

    return (
        <>
            <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
                Ganancias
            </h6>
            {
                loading
                    ? (<Spinner />)
                    :
                    (<DetailsList items={!!dt && dt} columns={columns} compact={true} selectionMode={0} />)
              }
        </>
    )
}
