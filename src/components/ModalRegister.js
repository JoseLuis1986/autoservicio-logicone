import React from 'react'
import { useId, useBoolean } from '@fluentui/react-hooks';
import {
    Modal,
    getTheme,
    mergeStyleSets,
    FontWeights,
    Toggle,
    ContextualMenu,
} from '@fluentui/react';
import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
import { LoginPage } from '../pages/authentication/LoginPage';
import { RegisterPage } from '../pages/authentication/RegisterPage';

const dragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu,
    dragHandleSelector: '.ms-Modal-scrollableContent > div:first-child',
};
const cancelIcon = { iconName: 'Cancel' };

export const ModalRegister = () => {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);

    // Use useId() to ensure that the IDs are unique on the page.
    // (It's also okay to use plain strings and manually ensure uniqueness.)
    const titleId = useId('title');

    return (
        <div>
            <Toggle
                styles={toggleStyles}
                label="Is draggable"
                inlineLabel
                onChange={toggleIsDraggable}
                checked={isDraggable}
                disabled={isModalOpen}
            />
            <DefaultButton secondaryText="Opens the Sample Modal" onClick={showModal} text="Open Modal" />
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isModeless={true}
                containerClassName={contentStyles.container}
                dragOptions={isDraggable ? dragOptions : undefined}
            >
                <div className={contentStyles.header}>
                    <h2 className={contentStyles.heading} id={titleId}>
                        Lorem Ipsum
                    </h2>
                    <IconButton
                        styles={iconButtonStyles}
                        iconProps={cancelIcon}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </div>

                <div className={contentStyles.body}>
                    <RegisterPage />
                </div>
            </Modal>
        </div>
    );
};

const theme = getTheme();
const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
    },
    header: {
        flex: '1 1 auto',
        borderTop: `4px solid ${theme.palette.themePrimary}`,
        color: theme.palette.neutralPrimary,
        display: 'flex',
        alignItems: 'center',
        fontWeight: FontWeights.semibold,
        padding: '12px 12px 14px 24px',
    },
    heading: {
        color: theme.palette.neutralPrimary,
        fontWeight: FontWeights.semibold,
        fontSize: 'inherit',
        margin: '0',
    },
    body: {
        display: 'flex', 
        // flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        width: '600px', 
        justifyContent: "center"
        // overflowY: 'hidden',
    },
});
const toggleStyles = { root: { marginBottom: '20px' } };
const iconButtonStyles = {
    root: {
        color: theme.palette.neutralPrimary,
        marginLeft: 'auto',
        marginTop: '4px',
        marginRight: '2px',
    },
    rootHovered: {
        color: theme.palette.neutralDark,
    },
};
