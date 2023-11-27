import React from 'react'
import { View } from 'react-native'

const BackGround = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#76D7C4',
                top: -250,
                bottom: 0,
                width: 800,
                height: 1090,
                transform: [
                    { rotate: '-70deg' }
                ]
            }}
        />
    )
}

export default BackGround