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

// "PayStatementNumber": "USMF-00002577",
//   "GrossPay": 8292.88,
//     "PeriodStartDate": "2016-01-01T12:00:00Z",
//       "PeriodEndDate": "2016-01-15T12:00:00Z",
//         "PaymentDate": "2016-01-15T12:00:00Z",
//           "NetPay": 5749.8

const company = [
  {
    "@odata.etag": "W/\"JzAsNTYzNzE0NTcyNSc=\"",
    "PictureId": 1002,
    "Picture": "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAAQIIDxARFhoqKy9AUFVbXm9xfoGCkJusrbC2uc/S6vDy/P4uaHEdAAAAAWJLR0QktAb5mQAAAKBJREFUSMftlLkSwjAMRJcA5nC4AgbMFSXW/39jKhVuhBjSELL9m9U8jxcY82dhNf0AWvuvAEOyNAUAzLZrG7C4t/UeQEjeBlyb46P1cBSNJ9EZc66yAh14vlYH3mQFOlA2zLciK3hjabkrJ46i2LK9Q0hebJkAR1Fs2YCQvNgyAY6i2LIBIXmxZQKKy0ls6TPz8S7pa9UHYPqYXwBjBp4ODBEtFUa/dJoAAAAASUVORK5CYII=",
}
]

const columns = [
  { key: 1, name: "Numero de estado de cuenta de pago", fieldName: "PayStatementNumber", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 2, name: 'Trabajador', fieldName: 'Name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Numero de personal', fieldName: 'PersonnelNumber', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Fecha de pago', fieldName: 'PaymentDate', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Periodo de pago', fieldName: 'PayPeriod', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 6, name: 'Ciclo de pago', fieldName: "PayCycleId", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 7, name: 'Numero de lote', fieldName: 'BatchNumber', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 8, name: 'Formato de desembolso', fieldName: 'DisbursementFormat', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 9, name: 'Tipo de ejecucion', fieldName: 'PaymentRunType', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 10, name: 'Pago bruto', fieldName: 'GrossPay', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 11, name: 'Pago neto', fieldName: 'NetPay', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 12, name: 'Diario de pagos', fieldName: 'PaymentJournal', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 13, name: 'Estado de cuenta de pago invertido', fieldName: 'PayStatementReversed', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 14, name: 'Registrado', fieldName: 'Posted', minWidth: 100, maxWidth: 200, isResizable: true },
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
  const { auth } = useContext(AuthContext);
  const { PersonnelNumber, Name } = auth.user;

  const navigate = useNavigate();
  const styles = useStyles();
  
  const url = 'payments';
  const params = new URLSearchParams({ PersonnelNumber, Name })
  const [{ data, loading }, handleCancelRequest] = useFetch(url + '?' + params);

  const data1 = JSON.stringify(company);
  const data2 = JSON.parse(data1)
  const { Picture } = data2[0]
  const pic1 = JSON.stringify(Picture);
  const pic2 = JSON.parse(pic1)
  // console.log('mi imagen', pic2);

  const handleDateSelect = (values) => {
    console.log(values)
  }
  
  const handleLink = (value) => {
    console.log(value)
    navigate("/salary-description", { state: value });
  }

  const _onRenderItemColumns = (item, index, column) => {
    const fieldContent = item[column.fieldName];
    console.log('mi item', item)
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