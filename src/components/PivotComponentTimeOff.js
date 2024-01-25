import { Pivot, PivotItem } from '@fluentui/react';
import React from 'react';
import { HistoryPermissions } from '../pages/permission_request/HistoryPermissions';
import { ApprovedPermissions } from '../pages/permission_request/ApprovedPermissions';
import { TimeOfRequest } from '../pages/permission_request/TimeOfRequest';
import { MessagesInfo } from './messages/MessagesInfo';


export const PivotComponentTimeOff = () => {
    return (
        <>
            <MessagesInfo />
            <Pivot aria-label="Basic Pivot">
                <PivotItem
                    headerText="Balance"
                    headerButtonProps={{
                        'data-order': 1,
                        'data-title': 'Balances',
                    }}
                >
                    <HistoryPermissions />
                </PivotItem>

                <PivotItem headerText="Tiempo libre aprobado">
                    <ApprovedPermissions />
                </PivotItem>

                <PivotItem headerText="Solicitudes de tiempo libre">
                    <TimeOfRequest />
                </PivotItem>
            </Pivot>
        </>
    )
}
