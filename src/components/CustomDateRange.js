import React, { useCallback, useContext, useRef, useState } from "react";
import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import { DatePicker, classNamesFunction, defaultDatePickerStrings } from "@fluentui/react";
import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";
import dayjs from "dayjs";

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
    width: "200px"
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

export const CustomDateRange = ({ handleInputChange, values }) => {
  const styles = useStyles();
  console.log(values)
  const { start_date, end_date } = values;
  const [value, setValue] = useState(null);//eslint-disable-line
  const [datestr, setDatestr] = useState({
    start_date: null,
    end_date: null
  });
  const { dispatch } = useContext(AlertContext);
  const datePickerRef = useRef(null);
  const datePickerRef1 = useRef(null);

  const onParseDateFromString = useCallback((newValue) => {
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

  // const handleClickDate = () => {
  //   const { start_date, end_date } = datestr;
  //   const d1 = start_date === null;
  //   const d2 = end_date === null;

  //   if (d1 || d2) {
  //     // setDatestr({ start_date: "", end_date: "" });
  //     dispatch({
  //       type: types.newIntent,
  //       payload: {
  //         intent: 'error',
  //         messages: 'Debe rellenar el formulario'
  //       }
  //     });
  //   } else {
  //     const data = {
  //       start_date: onFormatDate(start_date),
  //       end_date: onFormatDate(end_date)
  //     }
  //     handleDateSelect(data)
  //   }
  // }


  const onInputChange = (dt) => {
    console.log(dt);
    // const data = Object.values(dt[0])

    // const key = Object.keys(dt);
    // const val = dt && Object.values(dt)
    // console.log(key)
    // console.log(val)
    // const val1 = !!val && dayjs(val).format('YYYY-MM-DD');
    // if(val1 === 'Invalid Date') {
    //   return console.log('no hay fecha seleccionada')
    // }
    // const newValue = {
    //   [key]: val1
    // }
    // handleInputChange(dt)
  }

  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <DatePicker
          name='start_date'
          componentRef={datePickerRef}
          label="Start date"
          allowTextInput
          ariaLabel="Select a date. Input format is day slash month slash year."
          // value={start_date}
          // onSelectDate={(date) => setDatestr({ ...datestr, start_date: date })}
          onSelectDate={(date) => handleInputChange({ start_date: date && dayjs(date).format('YYYY-MM-DD') })}
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
          // value={end_date}
          // onSelectDate={(date) => setDatestr({ ...datestr, end_date: date })}
          onSelectDate={(date) => handleInputChange({ end_date: date && dayjs(date).format('YYYY-MM-DD') })}
          formatDate={onFormatDate}
          parseDateFromString={onParseDateFromString}
          className={styles.control1}
          // DatePicker uses English strings by default. For localized apps, you must override this prop.
          strings={defaultDatePickerStrings}
          placeholder="Select a date..."
        />
      </div>
      {/* <div className={styles.control}>
        <Button
          className={styles.button}
          onClick={() => handleClickDate()}
        >
          Consultar
        </Button>
      </div> */}
    </div>
  );
};