import React from 'react';
import { makeStyles } from '@fluentui/react-components';
import { PivotComponentProfile } from '../../components/PivotComponentProfile';
import { ActionsNav } from '../../components/ui/ActionsNav';

const useStyles = makeStyles({
  root: {
    background: "#fafafafa"
  }
})

export const Profile = () => {
const styles = useStyles()
  return (
    <div className={styles.root}>
      <h1>Información personal</h1>
      <ActionsNav>
        <PivotComponentProfile />
      </ActionsNav>
    </div>
  )
}
