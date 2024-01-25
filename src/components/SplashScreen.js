import { Image } from '@fluentui/react'
import React from 'react'

export const SplashScreen = ({ image }) => {
    return (
        <div style={{ margin: "30%" }}>
            <Image src={`data:image/jpeg;base64,${image}`} style={{ maxWidth: "80%", maxHeight: "80%" }} />
        </div>
    )
}
