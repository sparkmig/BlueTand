/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BleManager from 'react-native-ble-manager';

function App() {
  BleManager.start({showAlert: false})
    .then(() => {
      console.log('Module initialized');
    })
    .catch(console.error);
  console.log(BleManager ?? 'null');

  const connect = async () => {
    BleManager.connect('id');
  };

  const turnOn = () => {
    //BleManager.write(deviceId, serviceUUID, characteristicUUID, data)
  };

  const turnoff = () => {
    //BleManager.write(deviceId, serviceUUID, characteristicUUID, data)
  };

  return (
    <SafeAreaView
      style={{justifyContent: 'space-evenly', flex: 1, alignItems: 'center'}}>
      <TouchableOpacity style={styles.button} onPress={connect}>
        <Text style={styles.buttonText}>Forbind</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={turnOn}>
        <Text style={styles.buttonText}>Tænd</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={turnoff}>
        <Text style={styles.buttonText}>Sluk</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#00ADEF',
    borderRadius: 90,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default App;
