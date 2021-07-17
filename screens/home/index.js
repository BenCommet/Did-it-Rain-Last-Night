import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {getRainfall} from '../../services/weather';

export default function HomeScreen() {
  const pressRain = async () => {
    console.log(rainfallInterval);
    let test = await getRainfall(rainfallInterval);
    console.log('testy: ', test);

    setRainfall(test);
  }
  let [rainfall, setRainfall] = useState('');
  let [rainfallInterval, setRainfallInterval] = useState('24');


  return (
    <View style={styles.container}>
        <TextInput
            onChangeText={setRainfallInterval}
            value={rainfallInterval}
            keyboardType='number-pad'
        />
      <TouchableOpacity onPress={pressRain} style={styles.rainButton}>
        <Text style={styles.rainButtonText}>
        Get the Rain boi guy
        </Text>
      </TouchableOpacity>
      <Text>{rainfall}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rainButton: {
      backgroundColor: 'blue',
      padding: 20,
  },
  rainButtonText: {
      color: 'white',
  }
});