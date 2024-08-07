import { View, Text, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const Themed = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <Text
        style={{
          color: Colors[colorScheme ?? "light"].text,
        }}
      >
        Themed
      </Text>
    </View>
  );
};

export default Themed;
