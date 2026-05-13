import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const { formula, buildNumber } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>

      {/* Filas de Botones */}

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("press")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("press")}
        />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("press")}
        />
        <CalculatorButton
          color={Colors.orange}
          label="÷"
          onPress={() => console.log("press")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber("7")} />
        <CalculatorButton label="8" onPress={() => buildNumber("8")} />
        <CalculatorButton label="9" onPress={() => buildNumber("9")} />
        <CalculatorButton
          color={Colors.orange}
          label="x"
          onPress={() => console.log("press")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber("4")} />
        <CalculatorButton label="5" onPress={() => buildNumber("5")} />
        <CalculatorButton label="6" onPress={() => buildNumber("6")} />
        <CalculatorButton
          color={Colors.orange}
          label="-"
          onPress={() => console.log("press")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber("1")} />
        <CalculatorButton label="2" onPress={() => buildNumber("2")} />
        <CalculatorButton label="3" onPress={() => buildNumber("3")} />
        <CalculatorButton
          color={Colors.orange}
          label="+"
          onPress={() => console.log("press")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSized
          onPress={() => buildNumber("0")}
        />
        <CalculatorButton label="." onPress={() => buildNumber(".")} />
        <CalculatorButton
          color={Colors.orange}
          label="="
          onPress={() => console.log("press")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
