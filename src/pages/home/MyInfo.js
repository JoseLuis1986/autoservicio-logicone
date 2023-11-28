import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "@fluentui/react-components"
import { CardSection } from '../../components/CardSection';
import { NoteSection } from '../../components/NoteSection';

export const MyInfo = () => {
  const [openItems, setOpenItems] = useState(["1"]);

  const handleToggle = (event, data) => {
    setOpenItems(data.openItems);
  };

  return (
    <div>
      <Accordion
        openItems={openItems}
        onToggle={handleToggle}
        multiple
        collapsible
      >
        <AccordionItem value="1">
          <AccordionHeader>
            <h3 style={{ fontWeight: "bold" }}>
              Resumen
            </h3>
          </AccordionHeader>
          <AccordionPanel>
            <div>
              <CardSection />
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionHeader>
            <h3 style={{ fontWeight: "bold" }}>
              Información de mi profesión
            </h3>
          </AccordionHeader>
          <AccordionPanel>
            <div>
              <NoteSection />
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
