import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  //ใช้ useEffect เพื่อหน่วงเวลา 3 วินาทีแล้วเปลี่ยนหน้า /bmi
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/bmi");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={style.container}>
      <Image
        source={require("../assets/images/bmi.png")}
        style={{ width: 100, height: 100 }}
      />
      <Text style={[style.appName, { fontSize: 40 }]}>BMI Calculator</Text>
      <Text style={[style.appName, { fontSize: 20 }]}>คำนวณ BMI</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 70 }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6aabd9",
  },
  appName: {
    fontFamily: "Kanit_700Bold",
    color: "white",
    marginTop: 20,
  },
});
