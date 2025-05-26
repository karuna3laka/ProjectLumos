import { View, Text, ScrollView } from "react-native";
import Header from '../components/widgets/Header';
import Widget1 from '../components/widgets/Widget1';
import ModeSelector from '../components/widgets/Widget2';
import PowerConsumption from '../components/widgets/Widget3';
import PowerOnOff from '../components/widgets/Widget4';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 120,
          paddingTop: 60, // Adjusted to account for header height (modify as needed)
        }}
      >
        <Widget1 />
        <ModeSelector />
        <PowerOnOff />
        <PowerConsumption />
        <PowerConsumption />
      </ScrollView>
    </View>
  );
}