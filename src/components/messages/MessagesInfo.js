import React, { useCallback, useContext } from 'react';
import {
  Link,
  MessageBar,
  MessageBarType,
  MessageBarButton,
} from '@fluentui/react';
import { AlertContext } from '../../context/alerts/AlertContext';
import { types } from '../../types/types';

// const choiceGroupStyles = { label: { maxWidth: 250 } };

const ErrorExample = ({ resetChoice, msj }) => (
  <MessageBar
    messageBarType={MessageBarType.error}
    isMultiline={false}
    onDismiss={resetChoice}
    dismissButtonAriaLabel="Close"
  >
    {msj}
    <Link href="www.bing.com" target="_blank" underline>
      Visit our website.
    </Link>
  </MessageBar>
);

const BlockedExample = ({ resetChoice, msj }) => (
  <MessageBar
    messageBarType={MessageBarType.blocked}
    isMultiline={false}
    onDismiss={resetChoice}
    dismissButtonAriaLabel="Close"
    truncated={true}
  // overflowButtonAriaLabel="See more"
  >
    <b>{msj}</b>
  </MessageBar>
);

const SevereExample = ({ resetChoice }) => (
  <MessageBar
    messageBarType={MessageBarType.severeWarning}
    actions={
      <div>
        <MessageBarButton>Yes</MessageBarButton>
        <MessageBarButton>No</MessageBarButton>
      </div>
    }
  >
    SevereWarning MessageBar with action buttons which defaults to multiline.
    <Link href="www.bing.com" target="_blank" underline>
      Visit our website.
    </Link>
  </MessageBar>
);

const SuccessExample = ({ resetChoice, msj }) => (
  <MessageBar
    onDismiss={resetChoice}
    dismissButtonAriaLabel="Close"
    messageBarType={MessageBarType.success}
    isMultiline={false}
  >
    {msj}.
    <Link href="www.bing.com" target="_blank" underline>
      Visit our website.
    </Link>
  </MessageBar>
);

const WarningExample = ({ resetChoice, msj }) => (
  <MessageBar
    messageBarType={MessageBarType.warning}
    isMultiline={false}
    onDismiss={resetChoice}
    dismissButtonAriaLabel="Close"
  >
    {msj}
    {/* <Link href="www.bing.com" target="_blank" underline>
        Visit our website.
      </Link> */}
  </MessageBar>
);

const WarningExample2 = ({ resetChoice, msj }) => (
  <MessageBar
    onDismiss={resetChoice}
    dismissButtonAriaLabel="Close"
    messageBarType={MessageBarType.warning}
    actions={
      <div>
        <MessageBarButton>Yes</MessageBarButton>
        <MessageBarButton>No</MessageBarButton>
      </div>
    }
  >
    <b>{msj}</b>
    <Link href="www.bing.com" target="_blank" underline>
      Visit our website.
    </Link>
  </MessageBar>
);

export const MessagesInfo = () => {
  const { dispatch, alertState } = useContext(AlertContext);
  const { intent, messages } = alertState;

  const resetChoice = useCallback(() => dispatch({ type: types.cleanMessage }), [dispatch]);

  return (
    <div style={{ width: '100%' }}>
      {(intent === 'error') && <ErrorExample resetChoice={resetChoice} msj={messages} />}

      {(intent === 'blocked') && <BlockedExample resetChoice={resetChoice} msj={messages} />}

      {(intent === 'severe') && <SevereExample resetChoice={resetChoice} msj={messages} />}

      {(intent === 'success') && <SuccessExample resetChoice={resetChoice} msj={messages} />}

      {(intent === 'warning') && <WarningExample resetChoice={resetChoice} msj={messages} />}

      {(intent === 'warning2') && <WarningExample2 resetChoice={resetChoice} msj={messages} />}
    </div>
  );
};