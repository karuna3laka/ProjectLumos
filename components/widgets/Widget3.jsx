import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PowerConsumptionWidget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aproximate Power consumption</Text>

      <View style={styles.deviceRow}>
        <MaterialCommunityIcons name="lightbulb-on" size={24} color="#FFD700" />
        <Text style={styles.deviceText}>Can Vary On Your Lighting Product</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>5kWh</Text>
          <Text style={styles.statLabel}>Today</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statBox}>
          <Text style={styles.statValue}>120kWh</Text>
          <Text style={styles.statLabel}>This month</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
    marginTop:20,

  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  deviceText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 40,
    width: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default PowerConsumptionWidget;