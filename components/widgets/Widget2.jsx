import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="alpha-a-circle" size={30} color="#fff" />
        <Text style={styles.label}>Auto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="snowflake" size={30} color="#fff" />
        <Text style={styles.label}>Cool</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="white-balance-sunny" size={30} color="#fff" />
        <Text style={styles.label}>Day</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="weather-night" size={30} color="#fff" />
        <Text style={styles.label}>Night</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginTop:220,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1C2526',
    borderRadius: 10,
    padding: 10,
    width: 70,
    height: 70,
    justifyContent: 'center',
    marginHorizontal: 15, // Increased spacing between buttons
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});

export default ButtonSection;