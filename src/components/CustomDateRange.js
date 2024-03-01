import React, { useCallback, useContext, useRef, useState } from "react";
import { Button, makeStyles, shorthands } from "@fluentui/react-components";
// import { DatePicker, classNamesFunction, defaultDatePickerStrings } from "@fluentui/react";
import { DatePicker } from '@fluentui/react-datepicker-compat';

import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";
import dayjs from "dayjs";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  control: {
    ...shorthands.padding("30px", "30px", "0px", "0px"),
    alignContent: "space-between",
  },
  control1: {
    ...shorthands.margin("15px", "15px", "15px", "0px"),
    width: "200px"
  },
  button: {
    position: "relative",
    top: "40%",
    height: "55%"
  }
});

const getZeroFormat = (m) => {
  if (m >=10 ){
    return m
  } else {
    return '0'+m
  }
}

const onFormatDate = (date) => {
  return !date ? '' : getZeroFormat(date.getDate()) + '-' + (getZeroFormat(date.getMonth() + 1)) + '-' + (date.getFullYear());
};

const initialStateDate = {
  start_date: null,
  end_date: null
}

export const CustomDateRange = ({ handleInputChange, state }) => {
  const styles = useStyles();
  const [valueDate, setValueDate] = useState(initialStateDate);
  const datePickerRef = useRef(null);
  const datePickerRef1 = useRef(null);
  const d1 = dayjs(new Date());

  const onParseDateFromString = useCallback((newValue) => {
    const previousValue = valueDate || new Date();
    const newValueParts = (newValue || '').trim().split('-');
    const day =
      newValueParts.length > 0 ? Math.max(1, Math.min(31, parseInt(newValueParts[0], 10))) : previousValue.getDate();
    const month =
      newValueParts.length > 1
        ? Math.max(1, Math.min(12, parseInt(newValueParts[1], 10))) - 1
        : previousValue.getMonth();
    let year = newValueParts.length > 2 ? parseInt(newValueParts[2], 10) : previousValue.getFullYear();
    if (year < 100) {
      year += previousValue.getFullYear() - (previousValue.getFullYear() % 100);
    }
    return new Date(year, month, day);
  },
    [valueDate],
  );

  const onChangeDate = (val) => {
    console.log(val);
    const name = Object.keys(val);
    const value = Object.values(val);
    handleInputChange({
      ...state,
      [name]: value[0]
    })
  }
  return (
    <div className={styles.container}>
      <DatePicker
        componentRef={datePickerRef}
        label="Fecha inicio"
        allowTextInput
        ariaLabel="Selecciona una fecha de inicio."
        value={state.start_date}
        onSelectDate={(date) => onChangeDate({ start_date: (dayjs(date).isAfter(d1)) ? d1.toDate() :  date })}
        formatDate={onFormatDate}
        parseDateFromString={onParseDateFromString}
        className={styles.control1}
        placeholder="Selecciona una fecha..."
      />
      <DatePicker
        componentRef={datePickerRef1}
        label="Fecha final"
        allowTextInput
        ariaLabel="Selecciona una fecha final."
        value={state.end_date}
        onSelectDate={(date) => onChangeDate({ end_date: (dayjs(date).isBefore(state.start_date)) ? state.start_date : date })}
        formatDate={onFormatDate}
        parseDateFromString={onParseDateFromString}
        className={styles.control1}
        placeholder="Selecciona una fecha..."
      />
    </div>
  );
};