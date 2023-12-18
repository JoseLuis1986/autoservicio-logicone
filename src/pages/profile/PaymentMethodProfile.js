import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { CommandBar, DetailsList, Spinner } from '@fluentui/react';
import { _farItems, _items, _overflowItems } from '../../utils/itemsCommandBar'
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Input, Label, tokens, makeStyles } from '@fluentui/react-components';
import { paymentMethods } from '../../helpers/dataHelper';


const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalMNudge,
    width: "1200px",
  },
});

const columns = [
  { key: 1, name: "Identificación de la cuenta", fieldName: "AccountIdentification", minWidth: 100, maxWidth: 200, isResizable: true, isEditable: true },
  { key: 2, name: 'Nombre', fieldName: 'Name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 3, name: 'Tipo de cuenta bancaria', fieldName: 'BankAccountType', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 4, name: 'Número de cuenta bancaria', fieldName: 'BankAccountNumber', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 5, name: 'Monto', fieldName: 'Mount', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 6, name: 'Resto', fieldName: 'Rest', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 7, name: 'Estado', fieldName: 'Status', minWidth: 100, maxWidth: 200, isResizable: true },
];

export const PaymentMethodProfile = () => {
  const styles = useStyles();
  const [items, setItems] = useState([]);
  const [openItems, setOpenItems] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { value } = JSON.parse(JSON.stringify(paymentMethods));
    setItems(value);
    setLoading(false);
  }, [])

  const onSubmit = (row, i) => {
    console.log(row);
    console.log(i);

  };

  const handleToggle = (event, data) => {
    setOpenItems(data.openItems);
  };


  return (
    <>
      <h6 style={{ marginBlockEnd: "0em", backgroundColor: "white", height: "15px", borderBottom: "1px solid lightgray", padding: "15px" }}>
        Mis números de identificación
      </h6>
      <div style={{ backgroundColor: "white", paddingBottom: "10px" }}>
        <div style={{ margin: "10px" }}>
          <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Label required>Metódo de pago</Label>
              <Input appearance="outlined" style={{ width: 120 }} name="Personnelnumber" />
            </div>
          </form>
        </div>
        <div className={styles.base}>
          <Accordion
            openItems={openItems}
            onToggle={handleToggle}
            multiple
            collapsible
          >
            <AccordionItem value="1">
              <AccordionHeader expandIconPosition="end">
                <h2>
                  Balances
                </h2>
              </AccordionHeader>
              <AccordionPanel>
                <div>
                  {
                    loading
                      ? (<Spinner />)
                      :
                      (
                        <DetailsList items={items} columns={columns} selectionMode={0} />
                      )
                  }
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}

// import React from 'react'

// export const PaymentMethodProfile = () => {
//   return (
//     <div>PaymentMethodProfile</div>
//   )
// }
