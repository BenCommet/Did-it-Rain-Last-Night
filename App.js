import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {getRainfall} from './services/weather';

export default function App() {
  const pressRain = async () => {
    let test = await getRainfall();
    console.log('testy: ', test);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressRain}>
        <Text>
        Get the Rain boi
        </Text>
      </TouchableOpacity>
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
});
