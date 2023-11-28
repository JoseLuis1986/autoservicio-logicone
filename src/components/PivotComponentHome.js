import React from 'react'
import { Pivot, PivotItem } from '@fluentui/react'
import { MyInfo } from '../pages/home/MyInfo'
import { MyTeam } from '../pages/home/MyTeam'

export const PivotComponentHome = () => {
    return (
        <>
            <Pivot aria-label="Basic Pivot">
                <PivotItem
                    headerText="Mi información"
                    headerButtonProps={{
                        'data-order': 1,
                        'data-title': 'Directions',
                    }}
                >
                    <MyInfo />
                </PivotItem>

                <PivotItem headerText="Mi equipo">
                    <MyTeam />
                </PivotItem>
            </Pivot>
        </>
    )
}
