import { View, StyleSheet } from "react-native";
import Basics from "@/components/Basics";
import Flex from "@/components/Flex";
import Conditional from "@/components/Conditional";
import ImageView from "@/components/welcome/ImageView";
import Functions from "@/components/Functions";
import PlatformStyle from "@/components/PlatformStyle";
import Welcome from "@/components/welcome/welcome";
import SafeBox from "@/components/SafeBox";
import Themed from "@/components/Themed";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Basics /> */}
      {/* <Flex /> */}
      {/* <Conditional />  */}
      {/* <ImageView /> */}
      {/* <Functions /> */}
      {/* <PlatformStyle />  */}
      {/* <Welcome /> */}
      {/* <SafeBox /> */}
      {/* <Themed /> */}
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
