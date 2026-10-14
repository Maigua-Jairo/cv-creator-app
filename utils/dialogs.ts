import { Alert, Platform } from "react-native";

export function showMessage(
  title: string,
  message: string,
  onConfirm?: () => void,
) {
  if (Platform.OS === "web") {
    globalThis.alert(`${title}\n\n${message}`);
    onConfirm?.();
    return;
  }

  Alert.alert(
    title,
    message,
    onConfirm ? [{ text: "OK", onPress: onConfirm }] : undefined,
  );
}

export function showConfirmation(
  title: string,
  message: string,
  onConfirm: () => void,
) {
  if (Platform.OS === "web") {
    if (globalThis.confirm(`${title}\n\n${message}`)) {
      onConfirm();
    }
    return;
  }

  Alert.alert(title, message, [
    { text: "Cancelar", style: "cancel" },
    { text: "Eliminar", style: "destructive", onPress: onConfirm },
  ]);
}
