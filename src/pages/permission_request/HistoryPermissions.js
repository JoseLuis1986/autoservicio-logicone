import React from 'react'
import { ActionsNav } from '../../components/ui/ActionsNav'
import { DatePicker, Space } from 'antd'

export const HistoryPermissions = () => {

    const onChange = (value) => {
        console.log(value)
    }

    return (
        <ActionsNav>
            <h1>History Permissions</h1>
            <Space direction="vertical">
                <DatePicker onChange={onChange} picker="year" style={{ borderRadius: 0 }} />
            </Space>
        </ActionsNav>
    )
}
