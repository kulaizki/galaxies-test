import { View, StyleSheet } from "react-native";
import Basics from "@/components/Basics";
import Conditional from "@/components/Conditional";
import Functions from "@/components/Functions";
import PlatformStyle from "@/components/PlatformStyle";
import Welcome from "@/components/welcome/welcome";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Basics /> */}
      {/* <Functions /> */}
      {/* <Conditional />  */}
      {/* <PlatformStyle />  */}
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
