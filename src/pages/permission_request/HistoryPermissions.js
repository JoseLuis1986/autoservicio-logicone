import React, { useContext, useState } from 'react'
import { ActionsNav } from '../../components/ui/ActionsNav'
import { DatePicker, Space } from 'antd'
import { AuthContext } from '../../auth/AuthContext'
import { useFetch } from '../../hooks/useFetch'
import { CommandBar, DetailsList, Spinner } from '@fluentui/react'
import { useNavigate } from 'react-router-dom'
// import { Position } from './Position'
import { Button, DrawerBody, DrawerHeader, DrawerHeaderTitle, OverlayDrawer } from '@fluentui/react-components'
import { Dismiss24Regular } from "@fluentui/react-icons";
import { PermissionRequest } from './PerrmissionRequest'


//Tipo,  Current balance,  Available balance on 12/19/2023,  Accrual rate, Last carry-forward amount, Active accrual suspension2
/*
{
            "@odata.etag": "W/\"JzAsNTYzNzE0NTMzNTswLDU2MzcxNDUzNDIn\"",
            "dataAreaId": "usmf",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "Vacation",
            "TotalThisYear": 70.09,
            "BalanceAvailable": 70.09,
            "AccrualRateDescription": "16.67 hrs / Mensual",
            "LastCarryForwardAmount": 0,
            "TakenThisYear": 0
        }
*/
const columns = [
    { key: 1, name: "Tipo", fieldName: "LeaveTypeId", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 2, name: "Current balance", fieldName: "BalanceAvailable", minWidth: 100, maxWidth: 200, isResizable: true },
    // { key: 3, name: "Available balance on 12/19/2023", fieldName: "PayStatementNumber", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 4, name: "Accrual rate", fieldName: "AccrualRateDescription", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 5, name: "Last carry-forward amount", fieldName: "LastCarryForwardAmount", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 6, name: "Active accrual suspension", fieldName: "TakenThisYear", minWidth: 100, maxWidth: 200, isResizable: true },
]



export const HistoryPermissions = () => {
    const [show, setShow] = useState(false)
    const { auth } = useContext(AuthContext);
    const { PersonnelNumber } = auth.user;
    const url = 'payments/time-off';
    const params = new URLSearchParams({ PersonnelNumber })
    const [{ data, loading, error }, handleCancelRequest] = useFetch(url + '?' + params)

    const _items = [
        {
            key: 'newItem',
            text: 'New',
            cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
            iconProps: { iconName: 'Add' },
            onClick: () => setShow(true)
        },
    ]

    const onChange = (value) => {
        console.log(value)
    }

    return (
        <>
            <h1>History Permissions</h1>
            {/* <Space direction="vertical">
                <DatePicker onChange={onChange} picker="year" style={{ borderRadius: 0 }} />
            </Space> */}
            <CommandBar
                items={_items}
            />
            <>
                {
                    loading
                        ? (<Spinner />)
                        :
                        (
                            <>
                                <OverlayDrawer
                                    position="end"
                                    open={show}
                                    size='large'
                                // onOpenChange={(_, { open }) => setIsOpen(open)}
                                >
                                    <DrawerHeader>
                                        <DrawerHeaderTitle
                                            action={
                                                <Button
                                                    appearance="subtle"
                                                    aria-label="Close"
                                                    icon={<Dismiss24Regular />}
                                                    onClick={() => setShow(false)}
                                                />
                                            }
                                        >
                                            {/* {position === "start" ? "Left" : "Right"} Drawer */}
                                        </DrawerHeaderTitle>
                                    </DrawerHeader>

                                    <DrawerBody>
                                        <PermissionRequest modal={setShow}/>
                                    </DrawerBody>
                                </OverlayDrawer>
                                <DetailsList
                                    items={!!data && data}
                                    columns={columns}
                                    compact={true}
                                    selectionMode={0}
                                />
                            </>
                        )
                }
            </>
        </>
    )
}
