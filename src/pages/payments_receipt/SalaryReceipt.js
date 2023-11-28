import React, { useEffect, useState } from "react";
import { makeStyles } from "@fluentui/react-components";
import { DateRange } from "../../components/DateRange";
import { ActionsNav } from "../../components/ui/ActionsNav";
import { DetailsList } from "@fluentui/react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../errorPage/ErrorPage";

const columns = [
  { key: 1, name: "Fecha de pago", fieldName: "car_model_year", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 2, name: 'Periodo de pago', fieldName: 'car_model_year', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Deduccion', fieldName: 'price', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Deduccion', fieldName: 'price', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Pago neto', fieldName: 'price', minWidth: 100, maxWidth: 200, isResizable: true },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginTop: "20px",
    height: "35px",
  }
})
export const SalaryReceipt = () => {
  const [items, setItems] = useState([])
  const [datos, setDatos] = useState([])
  const styles = useStyles();

  useEffect(() => {
    const ac = new AbortController();
    const signal = ac.signal;

    if (Object.entries(datos).length > 0) {
      fetch('https://myfakeapi.com/api', { signal })
        .then((response) => response.json())
        .then(data => {
          const { cars } = data;
          setItems(cars);
        })
        .catch((err) => console.log(err))
    }
    return () => {
      ac.abort();
    }
  }, [datos])

  const handleDateSelect = (values) => {
    setDatos(values);
  };

  return (
    <ErrorBoundary FallbackComponent={<ErrorPage />}>
      <ActionsNav>
        <h2>Estado de Cuenta</h2>
        <div className={styles.root}>
          <DateRange handleDateSelect={handleDateSelect} />
        </div>
        <ErrorBoundary Fallback={<div>Something went wrong...</div>}>
          <DetailsList items={items} columns={columns} />
        </ErrorBoundary>
      </ActionsNav>
    </ErrorBoundary>
  );
};