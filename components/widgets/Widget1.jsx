import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function Widget1() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const waveAnimation = new Animated.Value(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    Animated.loop(
      Animated.timing(waveAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();

    return () => clearInterval(timer);
  }, [waveAnimation]);

  const waveTransform = waveAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['-10deg', '10deg', '-10deg'],
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.icon, { transform: [{ rotate: waveTransform }] }]}
      >
        💡
      </Animated.Text>
      <Text style={styles.timeText}>{formattedTime}</Text>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>INDOOR TEMP</Text>
          <Text style={styles.infoValue}>30°C</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>HUMIDITY</Text>
          <Text style={styles.infoValue}>40%</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>AIR QUALITY</Text>
          <Text style={styles.infoValue}>GOOD</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 150,
    left: 10,
    right: 10,
    backgroundColor: '#1C2526',
    padding: 20,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 10,
  },
  icon: {
    position: 'absolute',
    top: 25,
    right: 30,
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
  },
  timeText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '600',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoItem: {
    alignItems: 'flex-start',
  },
  infoLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.7,
  },
  infoValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});