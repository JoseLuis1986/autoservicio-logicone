import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../auth/AuthContext';
import { Link, makeStyles } from "@fluentui/react-components";
import { DateRange } from "../../components/DateRange";
import { ActionsNav } from "../../components/ui/ActionsNav";
import { DetailsList, Spinner } from "@fluentui/react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../errorPage/ErrorPage";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { fetchWithToken } from "../../helpers/fetch";
import dayjs from "dayjs";
import { AlertContext } from "../../context/alerts/AlertContext";
import { types } from "../../types/types";

const columns = [
  { key: 1, name: "Numero de estado de cuenta de pago", fieldName: "PayStatementNumber", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 2, name: 'Trabajador', fieldName: 'Name', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Numero de personal', fieldName: 'PersonnelNumber', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Fecha de pago', fieldName: 'PaymentDate', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Periodo de pago', fieldName: 'PayPeriod', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 6, name: 'Ciclo de pago', fieldName: "PayCycleId", minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 7, name: 'Numero de lote', fieldName: 'BatchNumber', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 8, name: 'Formato de desembolso', fieldName: 'DisbursementFormat', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 9, name: 'Tipo de ejecucion', fieldName: 'PaymentRunType', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 10, name: 'Pago bruto', fieldName: 'GrossPay', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 11, name: 'Pago neto', fieldName: 'NetPay', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 12, name: 'Diario de pagos', fieldName: 'PaymentJournal', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 13, name: 'Estado de cuenta de pago invertido', fieldName: 'PayStatementReversed', minWidth: 150, maxWidth: 200, isResizable: true },
  { key: 14, name: 'Registrado', fieldName: 'Posted', minWidth: 150, maxWidth: 200, isResizable: true },
  // { key: 4, name: 'CreationType', fieldName: 'CreationType', minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 6, name: 'PeriodEndDate', fieldName: 'PeriodEndDate', minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 7, name: "Company", fieldName: "Company", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 8, name: 'PayStatementStatus', fieldName: "PayStatementStatus", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 13, name: "ReversedPayStatementNumber", fieldName: "ReversedPayStatementNumber", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 14, name: 'PeriodStartDate', fieldName: "PeriodStartDate", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 17, name: 'DisableAccounting', fieldName: 'DisableAccounting', minWidth: 100, maxWidth: 200, isResizable: true },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginTop: "20px",
    height: "35px",
  },
  container: {
    display: 'grid'
  }
});

export const SalaryReceipt = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { auth, logout } = useContext(AuthContext);
  const { dispatch } = useContext(AlertContext);
  const { PersonnelNumber, Name } = auth.user;

  console.log('salary receipt');
  const navigate = useNavigate();
  const styles = useStyles();

  const handleDateSelect = async (values) => {
    setLoading(true);
    console.log(values);
    const { start_date, end_date } = values;
    const startDate = start_date;
    const endDate = end_date;
    console.log(startDate);
    console.log(endDate);
    const params = new URLSearchParams({
      Name,
      PersonnelNumber,
      PeriodStartDate: startDate,
      PeriodEndDate: endDate
    })
    const url = 'payments';
    const resp = await fetchWithToken(url + '?' + params);
    console.log(resp);
    if (resp.status === 401) {
      dispatch({
        type: types.newIntent,
        payload: {
          intent: 'error',
          messages: 'Su sesion ha expirado. Cerrando en 5 segundos...'
        }
      })
      setLoading(false);
      setTimeout(() => {
        logout();
      }, 5000);
    } else {
      setData(resp.data);
      setLoading(false);
    }
    // if (!resp.ok) throw new Error(resp.statusText)
  }

  const handleLink = (value) => {
    navigate("/salary-description", { state: value });
  }

  const _onRenderItemColumns = (item, index, column) => {
    const fieldContent = item[column.fieldName];
    switch (column.key) {
      case 1:
        return <Link onClick={() => handleLink(item)} inline>{fieldContent}</Link>;

      default:
        return <span>{fieldContent}</span>;
    }
  }

  return (
    <ErrorBoundary FallbackComponent={<ErrorPage />}>
      <ActionsNav>
        <h2>Estado de Cuenta</h2>
        <div className={styles.root}>
          <DateRange handleDateSelect={handleDateSelect} />
        </div>
        <div className={styles.container}>
          {
            loading
              ? (<Spinner />)
              :
              (<DetailsList
                items={!!data && data}
                columns={columns}
                onRenderItemColumn={_onRenderItemColumns}
                compact={true}
                selectionMode={0}
              />)
          }
        </div>
      </ActionsNav>
    </ErrorBoundary>
  );
};