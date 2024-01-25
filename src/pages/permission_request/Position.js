import React, { useState } from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    columnGap: tokens.spacingHorizontalXS,
  },
});

export const Position = ({ show }) => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(show);

  return (
    <OverlayDrawer
      position="start"
      open={isOpen}
    // onOpenChange={(_, { open }) => setIsOpen(open)}
    >
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<Dismiss24Regular />}
              onClick={() => setIsOpen(false)}
            />
          }
        >
          {/* {position === "start" ? "Left" : "Right"} Drawer */}
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <p>Drawer content</p>
      </DrawerBody>
    </OverlayDrawer>
  );
};