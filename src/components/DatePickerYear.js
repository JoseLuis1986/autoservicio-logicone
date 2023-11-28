import React from 'react'
import { DatePicker } from 'antd'

export const DatePickerYear = () => {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <DatePicker onChange={onChange} picker="year" />
    )
}
