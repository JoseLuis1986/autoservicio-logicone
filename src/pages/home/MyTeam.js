import React, { useEffect, useState } from 'react'
import { taxAmount } from '../../helpers/dataHelper'

export const MyTeam = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const dt = JSON.stringify(taxAmount.value)
    const items = JSON.parse(dt)
    items.forEach((element) => {
      console.log(element.PayStatementNumber)
    });

  }, [])
  
  return (
    <div>MyTeam</div>
  )
}
