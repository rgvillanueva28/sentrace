import React from 'react'

import { StyleSheet } from 'react-native'

import { Block } from 'galio-framework'

const App = () => {
    return (
        <Block safe flex style={styles.mainContainer}>
            <Text>Add thy elements here</Text>
        </Block>
    )
}

const styles= StyleSheet.create({
    mainContainer: {
        backgroundColor: '#222'
    }
})

export default App