import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/40' }}
        style={styles.profilePic}
      />
      <Text style={styles.text}>Hello, Kavindu Vidushan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default TopBar;