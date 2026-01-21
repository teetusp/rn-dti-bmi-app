import React, { useState } from "react";
import {
    Alert,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

export default function Bmi() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("0.00");
    const [resultText, setResultText] = useState("การแปลผล");

    const handleCalPress = () => {
        Keyboard.dismiss();

        //validate
        if (weight.length == 0 || height.length == 0) {
            Alert.alert("คำเตือน", "กรุณาป้อนน้ําหนักและส่วนสูง");
            return;
        }
        if (weight == "0" || height == "0") {
            Alert.alert("คำเตือน", "น้ําหนักและส่วนสูงต้องไม่เป็น 0");
            return;
        }

        let heightvalue = parseFloat(height) / 100; //แปลง cm เป็น m
        let weightvalue = parseFloat(weight);
        let bmi = weightvalue / (heightvalue * heightvalue);
        setResult(bmi.toFixed(2)); //แสดงผลลัพธ์ทศนิยม 2 ตำแหน่ง

        //แปลผล BMI
        if (bmi < 18.5) {
            setResultText("ผอมไป");
        } else if (bmi < 23) {
            setResultText("น้ำหนักปกติ");
        } else if (bmi < 25) {
            setResultText("น้ำหนักเกิน");
        } else if (bmi < 30) {
            setResultText("โรคอ้วนระดับ 1");
        } else {
            setResultText("โรคอ้วนระดับ 2");
        }
    }

    const handleResetPress = () => {
        Keyboard.dismiss();
        setWeight("");
        setHeight("");
        setResult("0.00");
        setResultText("การแปลผล");
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/bmi.png")}
          style={{ width: 120, height: 120, marginTop: 60 }}
        />

        <View style={styles.cardInput}>
          <Text style={styles.labelInput}>ป้อนน้ําหนัก (kg)</Text>
          <TextInput
            placeholder="ป้อนน้ําหนัก"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            style={styles.textInput}
          />
          <View style={{ height: 20 }} />
          <Text style={styles.labelInput}>ป้อนส่วนสูง (cm)</Text>
          <TextInput
            placeholder="ป้อนส่วนสูง"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
            style={styles.textInput}
          />
            
          <View style={{ flexDirection: "row", marginTop: 30, gap: 20 }}>
            <TouchableOpacity style={styles.btnReset} onPress={handleResetPress}>
              <Text style={styles.txtBtn}>รีเซ็ต</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCalculate} onPress={handleCalPress}>
              <Text style={styles.txtBtn}>คำนวณ</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardResult}>
            <Text style={{ fontFamily: "Kanit_400Regular", fontSize: 20, color: "#ffffff" }}>BMI</Text>
            <Text style={{ fontFamily: "Kanit_400Regular", fontSize: 40, color: "#ff0000" }}>{result}</Text>
            <Text style={{ fontFamily: "Kanit_400Regular", fontSize: 20, color: "#ffffff" }}>{resultText}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    cardResult: {
        //borderWidth: 1,
        width: "80%",
        marginTop: 50,
        alignItems: "center",
        backgroundColor: "#eaad6c",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    },
  txtBtn: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  btnReset: {
    flex: 1,
    //borderWidth: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#f44336",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  btnCalculate: {
    flex: 2,
    //borderWidth: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#4caf50",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
  },

  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#5b5b5b",
  },
  labelInput: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    marginBottom: 10,
    color: "#393939fb",
  },
  cardInput: {
    backgroundColor: "#b9b9b9",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
