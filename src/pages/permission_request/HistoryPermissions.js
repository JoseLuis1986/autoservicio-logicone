import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useFetch } from '../../hooks/useFetch'
import { CommandBar, DetailsList, Spinner } from '@fluentui/react'
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
    { key: 1, name: "Tipo", fieldName: "LeaveTypeId", minWidth: 150, maxWidth: 200, isResizable: true },
    { key: 2, name: "Balance actual", fieldName: "BalanceAvailable", minWidth: 150, maxWidth: 200, isResizable: true },
    // { key: 3, name: "Available balance on 12/19/2023", fieldName: "PayStatementNumber", minWidth: 150, maxWidth: 200, isResizable: true },
    { key: 4, name: "Tasa de acumulación", fieldName: "AccrualRateDescription", minWidth: 150, maxWidth: 200, isResizable: true },
    { key: 5, name: "Último importe arrastrado", fieldName: "LastCarryForwardAmount", minWidth: 150, maxWidth: 200, isResizable: true },
    { key: 6, name: "Suspensión activa de acumulación", fieldName: "TakenThisYear", minWidth: 150, maxWidth: 200, isResizable: true },
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
            text: 'Nuevo',
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
            <h2>Historial de permisos</h2>
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
                                    size='medium'
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
