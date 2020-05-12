import React, { Component } from 'react'

import {
  NativeModules,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native'

import { Block, Button, Checkbox, Text } from 'galio-framework'

const { BlueModule } = NativeModules

export default class Tracer extends Component {
  constructor() {
    super()
    this.state = {
      isCompatibilityTestFinished: false,
      isBleEnabled: false,
      isLocationEnabled: false
    }
  }

  componentWillMount() {
    this.checkLocationPermissions()
    this.checkBleSupport()
  }

  /* Check Location Permissions */
  async checkLocationPermissions() {
    
    if (Platform.OS === 'android') {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
        .then((result) => result ? this.setState({ isLocationEnabled: true }) : this.requestLocationPermissions())
    }

  }

  /* Request Location Permissions */
  async requestLocationPermissions() {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ isLocationEnabled: true })
      } else {
        ToastAndroid.showWithGravityAndOffset('Please enable location permissions.', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 200)
      }
    } catch (err) {
      console.log(err)
    }
  }

  /* Check BLE Support */
  checkBleSupport() {
    BlueModule.checkBleSupport((status) => {
      if (status) {
        this.setState({ isBleEnabled: true })
      } else {
        ToastAndroid.showWithGravityAndOffset('Device does not have BLE Support', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 200)
      }

      this.setState({ isCompatibilityTestFinished: true })
    })
  }

  /* Enable Bluetooth */
  enableBluetooth() {
    BlueModule.enableBluetooth((status) => {
      console.log(status)
    })
  }

  /* Render */
  render() {
    if (this.state.isCompatibilityTestFinished) {
      return (
        <Block>
          <Text p>Compatibility Tests Done.</Text>
        </Block>
      )
    } else {
      return (
        <Block>
          <Text p>Testing for Compatibility...</Text>
        </Block>
      )
    }
  }
}