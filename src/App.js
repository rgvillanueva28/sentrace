import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from 'galio-framework';
import Header from './Components/Header';
import Home from './Views/Home';
import Navigator from './Routes/RouteStack';

const App = () => {
    return (
        <Navigator />
        // <Block safe flex style={styles.mainContainer}>
        //     <Header title='SENTRACE' />
        //     <Home />
        // </Block>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#222',
        justifyContent: "center",
        alignItems: "center",
    },
})
export default App