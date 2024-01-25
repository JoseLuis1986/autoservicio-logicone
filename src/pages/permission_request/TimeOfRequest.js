import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useFetch } from '../../hooks/useFetch';
import { DetailsList, Spinner } from '@fluentui/react';
import { Link, Switch, makeStyles, shorthands, Button } from "@fluentui/react-components";
import { CustomDateRange } from '../../components/CustomDateRange';
import { useCustomForm } from '../../hooks/useCustomForm';
import { fetchWithToken } from '../../helpers/fetch';
import { LinearGradient } from '@react-pdf/renderer';
import dayjs from 'dayjs';

const columns = [
  { key: 1, name: "Día de entrega ", fieldName: "RequestDate", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 2, name: "Estado", fieldName: "Status", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 3, name: "Tipo de baja", fieldName: "BalanceAvailable", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: "Fecha inicio", fieldName: "StartDate", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: "Fecha final", fieldName: "EndDate", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 6, name: "Total amount", fieldName: "BalanceAvailable", minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 7, name: "Presentado por", fieldName: "IsSubmittedByManager", minWidth: 100, maxWidth: 200, isResizable: true },
  // { key: 3, name: "Available balance on 12/  
]

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    ...shorthands.border("1px", "solid", "lightgray"),
    ...shorthands.padding("10px", "0px", "10px", "5px")
  },
  button: {
    ...shorthands.margin("auto", "10px", "auto", "0px"),
    height: '25px'
  },
  rowdate: {
    display: 'inline-flex',
    flexDirection: 'row'
  },
  customdate: {
    width: '440px',
  }
});

const initialState = {
  draft: false,
  completed: false,
  all: false
}

const initialStateDate = {
  start_date: null,
  end_date: null
}

export const TimeOfRequest = () => {
  const [selectionMode, setSelectionMode] = useState(initialState);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, handleInputChange, reset] = useCustomForm(initialStateDate);
  const { auth } = useContext(AuthContext);
  const { PersonnelNumber } = auth.user;
  const styles = useStyles();

  useEffect(() => {
    setSelectionMode({
      ...initialState,
      draft: true
    })
  }, [])

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

  const onChange = useCallback(
    (ev) => {
      setSelectionMode({
        ...initialState,
        [ev.currentTarget.name]: ev.target.checked
      });
    },
    [setSelectionMode]
  );

  const haveSelection = () => {
    switch (true) {
      case (selectionMode.draft):
        return true;
      case (selectionMode.completed):
        return true;
      case (selectionMode.all):
        return true;
      default:
        return false;
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    if (haveSelection()) {
      const { start_date, end_date } = state;
      const StartDate = dayjs(start_date).format('YYYY-MM-DD');
      const EndDate = dayjs(end_date).format('YYYY-MM-DD');
      const url = 'payments/time-off-request';
      const params = new URLSearchParams({ PersonnelNumber, StartDate, EndDate });
      const endpoint = url + '?' + params
      fetchWithToken(endpoint)
        .then((resp) => resp.data)
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch((err) => console.log(err))
    } else {
      console.log('hay un error')
    }
  }

  const todoOk = () => {
    if (state.start_date === null || state.start_date === 'Invalid Date') {
      return true
    } if (state.end_date === null || state.end_date === 'Invalid Date') {
      return true
    } else {
      return false
    }
  }

  const handleReset = () => {
    reset();
    setData([]);
  }

  const dataFiltered = () => {
    switch (true) {
      case (selectionMode.draft):
        return data?.filter((item) => item.Status === 'Draft')
      case (selectionMode.completed):
        return data?.filter((item) => item.Status === 'Completed')
      case (selectionMode.all):
        return data
      default:
        return []
    }
  }

  return (
    <>
      <div className={styles.root}>
        <div>
          <Switch
            name='draft'
            checked={selectionMode.draft}
            label={`Borrador`}
            labelPosition="after"
            onChange={onChange}
          />
          <Switch
            name='completed'
            checked={selectionMode.completed}
            label={`Completado`}
            labelPosition="after"
            onChange={onChange}
          />
          <Switch
            name='all'
            checked={selectionMode.all}
            label={`Todos`}
            labelPosition="after"
            onChange={onChange}
          />
        </div>
        <div className={styles.rowdate}>
          <div className={styles.customdate}>
            <CustomDateRange handleInputChange={handleInputChange} state={state} />
          </div>
          <div className={styles.button}>
            <Button style={{ padding: '6px' }} onClick={handleSubmit} disabled={todoOk()}>Buscar</Button>
          </div>
          <div className={styles.button}>
            <Button style={{ padding: '6px' }} onClick={handleReset}>Limpiar</Button>
          </div>
        </div>
      </div>
      {
        loading
          ? (<Spinner />)
          :
          (
            <DetailsList
              items={!!dataFiltered() && dataFiltered()}
              columns={columns}
              compact={true}
              onRenderItemColumn={_onRenderItemColumns}
              selectionMode={0}
            />
          )
      }
    </>
  )
}
