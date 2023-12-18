import React from 'react';
import { PivotComponentProfile } from '../../components/PivotComponentProfile';
import { ActionsNav } from '../../components/ui/ActionsNav';

export const Profile = () => {

  return (
    <div style={{ background: "#fafafafa"}}>
      <h1>Información personal</h1>
      <ActionsNav>
        <PivotComponentProfile />
      </ActionsNav>
    </div>
  )
}
