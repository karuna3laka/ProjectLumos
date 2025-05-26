import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LightControlWidget = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Header with more controls button */}
      <View style={styles.header}>
        <Text style={styles.title}>Control Luminar </Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>More Controls</Text>
        </TouchableOpacity>
      </View>

      {/* Main content with tighter layout */}
      <View style={styles.content}>
        <MaterialCommunityIcons
          name={isEnabled ? "lightbulb-on" : "lightbulb-off"}
          size={60}
          color={isEnabled ? "#FFD700" : "#aaa"}
          style={styles.bulbIcon}
        />

        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
          <Text style={styles.statusText}>
            {isEnabled ? 'ON' : 'OFF'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: '100%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  moreButton: {
    backgroundColor: '#f5f5f5', // Light gray background for iOS style
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ddd', // Subtle border for iOS look
  },
  moreButtonText: {
    color: '#007AFF', // iOS blue for actionable text
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 1, // Added margin from widget corners for content
  },
  bulbIcon: {
    marginRight: 100,
    padding: 1, // Remove right margin to bring switch closer
  },
  switchContainer: {
    alignItems: 'center',
    marginHorizontal: 20, // Added margin on left and right sides of switch container
    marginLeft: 50, // Keep the reduced space between bulb and switch
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginTop: 1,
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
});

export default LightControlWidget;