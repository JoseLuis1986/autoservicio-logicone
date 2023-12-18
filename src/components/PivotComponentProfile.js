import { Pivot, PivotItem } from '@fluentui/react';
import React from 'react';
import { DirectionsProfile } from '../pages/profile/DirectionsProfile';
import { ContactsProfile } from '../pages/profile/ContactsProfile';
import { NumberIdsProfile } from '../pages/profile/NumberIdsProfile';
import { PaymentMethodProfile } from '../pages/profile/PaymentMethodProfile';
import { ImageProfile } from '../pages/profile/ImageProfile';
import { DetailsProfile } from '../pages/profile/DetailsProfile';


export const PivotComponentProfile = () => {
    return (
        <>
            <Pivot aria-label="Basic Pivot">
                <PivotItem
                    headerText="Direcciones"
                    headerButtonProps={{
                        'data-order': 1,
                        'data-title': 'Directions',
                    }}
                >
                    <DirectionsProfile />
                </PivotItem>

                <PivotItem headerText="Detalles del contacto">
                    <DetailsProfile />
                </PivotItem>

                <PivotItem headerText="Contactos personales">
                    <ContactsProfile />
                </PivotItem>

                <PivotItem headerText="Números de identificacion">
                    <NumberIdsProfile />
                </PivotItem>

                <PivotItem headerText="Mi metódo de pago">
                    <PaymentMethodProfile />
                </PivotItem>

                <PivotItem headerText="Imagen">
                    <ImageProfile />
                </PivotItem>
            </Pivot>
        </>
    )
}
