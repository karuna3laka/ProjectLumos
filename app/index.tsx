import { View, Text } from "react-native";
import Header from '../components/widgets/Header';
import Widget1 from '../components/widgets/Widget1';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header />
      <Widget1 />


    </View>
  );
}