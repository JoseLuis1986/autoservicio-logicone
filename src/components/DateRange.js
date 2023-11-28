import React, { useCallback, useContext, useRef, useState } from "react";
import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import { DatePicker, defaultDatePickerStrings } from "@fluentui/react";
import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row"
  },
  control: {
    ...shorthands.padding("0px", "30px", "0px", "0px"),
    alignContent: "space-between",
  },
  control1: {
    alignContent: "space-between",
    width: "300px"
  },
  button: {
    position: "relative",
    top: "40%",
    height: "55%"
  }
});

const onFormatDate = (date) => {
  return !date ? '' : (date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + date.getDate();
};

export const DateRange = ({ handleDateSelect }) => {
  const styles = useStyles();
  const [value, setValue] = useState(null);//eslint-disable-line
  const [datestr, setDatestr] = useState({
    start_date: null,
    end_date: null
  });
  const { dispatch } = useContext(AlertContext);
  const datePickerRef = useRef(null);
  const datePickerRef1 = useRef(null);

  const onParseDateFromString = useCallback((newValue) => {
    console.log(newValue)
    const previousValue = value || new Date();
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
    [value],
  );

  const handleClickDate = () => {
    const { start_date, end_date } = datestr;
    const d1 = start_date === null;
    const d2 = end_date === null;

    if (d1 || d2) {
      // setDatestr({ start_date: "", end_date: "" });
      dispatch({
        type: types.newIntent,
        payload: {
          intent: 'error',
          messages: 'Debe rellenar el formulario'
        }
      });
    } else {
      const data = {
        start_date: onFormatDate(start_date),
        end_date: onFormatDate(end_date)
      }
      handleDateSelect(data)
      console.log(data);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <DatePicker
          componentRef={datePickerRef}
          label="Start date"
          allowTextInput
          ariaLabel="Select a date. Input format is day slash month slash year."
          value={datestr.start_date}
          onSelectDate={(date) => setDatestr({ ...datestr, start_date: date })}
          formatDate={onFormatDate}
          parseDateFromString={onParseDateFromString}
          className={styles.control1}
          // DatePicker uses English strings by default. For localized apps, you must override this prop.
          strings={defaultDatePickerStrings}
          placeholder="Select a date..."
        />
      </div>
      <div></div>
      <div className={styles.control}>
        <DatePicker
          componentRef={datePickerRef1}
          label="Start date"
          allowTextInput
          ariaLabel="Select a date. Input format is day slash month slash year."
          value={datestr.end_date}
          onSelectDate={(date) => setDatestr({ ...datestr, end_date: date })}
          formatDate={onFormatDate}
          parseDateFromString={onParseDateFromString}
          className={styles.control1}
          // DatePicker uses English strings by default. For localized apps, you must override this prop.
          strings={defaultDatePickerStrings}
          placeholder="Select a date..."
        />
      </div>
      <div className={styles.control}>
        <Button
          className={styles.button}
          onClick={() => handleClickDate()}
        >
          Consultar
        </Button>
      </div>
    </div>
  );
};