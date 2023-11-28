import React from 'react';
import { PivotComponentProfile } from '../../components/PivotComponentProfile';
import { ActionsNav } from '../../components/ui/ActionsNav';

export const Profile = () => {

  return (
    <>
      <h1>Información personal</h1>
      <ActionsNav>
        <PivotComponentProfile />
      </ActionsNav>
    </>
  )
}
