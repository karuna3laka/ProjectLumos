import { View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../components/widgets/Header";
import Widget1 from "../components/widgets/Widget1";
import ModeSelector from "../components/widgets/Widget2";
import PowerConsumption from "../components/widgets/Widget3";
import PowerOnOff from "../components/widgets/Widget4";
import PopupMessage from "../components/popUpMassage/PopupMessage";

export default function HomeScreen() {
  const [showPopup, setShowPopup] = useState(true);


//pop Up massage section to let user know !
  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const hasShown = await AsyncStorage.getItem('hasShownWelcome');
        if (!hasShown) {
          // 👇 Show popup and set flag
          setShowPopup(true);
          await AsyncStorage.setItem('hasShownWelcome', 'true');
        }
      } catch (error) {
        console.error("Error checking first-time flag:", error);
      }
    };

    checkFirstTime();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 120,
          paddingTop: 60,
        }}
      >
        <Widget1 />
        <ModeSelector />
        <PowerOnOff />
        <PowerConsumption />
        <PowerConsumption />
      </ScrollView>

      {/* 👇 Popup will show automatically on first app open */}
      <PopupMessage
        visible={showPopup}
        message="Kavindu Here ! Pakada Blnnea ?"
        onClose={() => setShowPopup(false)}
      />

    </View>
  );
}
