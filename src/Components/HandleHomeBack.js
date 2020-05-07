import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

class HandleHomeBack extends Component {
    constructor(props) {
        super(props);
        this.didFocus = props.navigation.addListener("didFocus", payload =>
            BackHandler.addEventListener("hardwareBackPress", this.onBack),
        );
    }

    onBack = () => {
        return this.props.onBack();
    };

    render() {
        return this.props.children;
    }
}
export default withNavigation(HandleHomeBack);