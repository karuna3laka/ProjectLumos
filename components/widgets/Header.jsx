import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Hey, Kavindu</Text>
        <Text style={styles.headerText2}>Say Lumosss !</Text>
      </View>
      <Image
        source={{ uri: 'https://via.placeholder.com/40' }}
        style={styles.profileIcon}
      />
    </View>
  );
}
// heyyy
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 1,
    right: 1,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1C2526',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 20,
    minHeight: 140,

  },
  headerText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'System',
    letterSpacing: 0.5,
    lineHeight: 28,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 20,
    marginLeft: 8,
  },
  headerText2: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
});