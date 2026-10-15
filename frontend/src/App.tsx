import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
  Platform,
  ScrollView,
} from "react-native";

type Operador = "Telcel" | "Movistar";

export default function App() {
  const [operador, setOperador] = useState<Operador>("Telcel");
  const [telefono, setTelefono] = useState<string>("");

  const iniciarRecarga = () => {
    if (!/^\d{10}$/.test(telefono)) {
      const titulo = "Teléfono inválido";
      const mensaje = "Ingresa un número de teléfono de 10 dígitos.";

      if (Platform.OS === "web") {
        alert(`${titulo}: ${mensaje}`);
      } else {
        Alert.alert(titulo, mensaje);
      }
      return;
    }

    const titulo = "Recarga de prueba";
    const mensaje = `Operador: ${operador}\nTeléfono: ${telefono}\n\nContinuaremos con la selección del monto.`;

    if (Platform.OS === "web") {
      alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <Text style={styles.logo}>YAYA</Text>
        <Text style={styles.headerSubtitle}>Recargas de tiempo aire</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>¡Recarga tu celular!</Text>
        <Text style={styles.subtitle}>
          Fácil, rápido y desde un solo lugar.
        </Text>

        <Text style={styles.label}>Selecciona tu compañía</Text>

        <View style={styles.operators}>
          <TouchableOpacity
            style={[
              styles.operatorButton,
              operador === "Telcel" && styles.selectedOperator,
            ]}
            onPress={() => setOperador("Telcel")}
            accessibilityRole="radio"
            accessibilityState={{ selected: operador === "Telcel" }}
          >
            <Text style={styles.operatorName}>Telcel</Text>
            <Text style={styles.operatorDescription}>
              {operador === "Telcel" ? "✓ Seleccionado" : "Elegir"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.operatorButton,
              operador === "Movistar" && styles.selectedOperator,
            ]}
            onPress={() => setOperador("Movistar")}
            accessibilityRole="radio"
            accessibilityState={{ selected: operador === "Movistar" }}
          >
            <Text style={styles.operatorName}>Movistar</Text>
            <Text style={styles.operatorDescription}>
              {operador === "Movistar" ? "✓ Seleccionado" : "Elegir"}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Número de celular</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej. 3312345678"
          keyboardType="number-pad"
          maxLength={10}
          value={telefono}
          onChangeText={(valor) =>
            setTelefono(valor.replace(/\D/g, "").slice(0, 10))
          }
          accessibilityLabel="Número de celular"
        />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={iniciarRecarga}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Continuar</Text>
        </TouchableOpacity>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Recarga segura y sencilla</Text>
          <Text style={styles.infoText}>
            Esta versión es una demostración. Todavía no se realizan
            recargas ni pagos reales.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECF2",
  },
  logo: {
    fontSize: 30,
    fontWeight: "900",
    color: "#4426A8",
    letterSpacing: 2,
  },
  headerSubtitle: {
    color: "#74778A",
    fontSize: 14,
    marginTop: 3,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#20213A",
  },
  subtitle: {
    fontSize: 15,
    color: "#74778A",
    marginTop: 8,
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#292A40",
    marginBottom: 12,
  },
  operators: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 26,
  },
  operatorButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E2E4EE",
    borderRadius: 14,
    padding: 18,
  },
  selectedOperator: {
    borderColor: "#6040C8",
    backgroundColor: "#F0ECFF",
  },
  operatorName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#292A40",
  },
  operatorDescription: {
    fontSize: 12,
    color: "#6040C8",
    marginTop: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#DADDEA",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 22,
  },
  primaryButton: {
    backgroundColor: "#5132B5",
    borderRadius: 13,
    paddingVertical: 17,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  infoCard: {
    marginTop: 28,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E9ECF2",
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#292A40",
  },
  infoText: {
    fontSize: 13,
    lineHeight: 20,
    color: "#74778A",
    marginTop: 7,
  },
});