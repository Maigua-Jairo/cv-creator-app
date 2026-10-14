import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useCVContext } from "../context/CVContext";
import { CVColors, TuTiColors } from "../src/constants/theme";

export default function HomeScreen() {
  const router = useRouter();
  const { cvData } = useCVContext();

  const isPersonalInfoComplete =
    Boolean(cvData.personalInfo.fullName.trim()) &&
    Boolean(cvData.personalInfo.email.trim());
  const hasExperience = cvData.experiences.length > 0;
  const hasEducation = cvData.education.length > 0;

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Crea tu CV Profesional</Text>
      <Text style={styles.subtitle}>
        Completa cada sección para preparar tu próximo paso profesional.
      </Text>

      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>1. Información Personal</Text>
          <Text
            style={[
              styles.status,
              isPersonalInfoComplete && styles.statusComplete,
            ]}
          >
            {isPersonalInfoComplete ? "✓ Completado" : "Pendiente"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/personal-info")}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>2. Experiencia</Text>
          <Text
            style={[styles.status, hasExperience && styles.statusComplete]}
          >
            {hasExperience
              ? `✓ ${cvData.experiences.length} agregada(s)`
              : "Pendiente"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/experience")}
        >
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>3. Educación</Text>
          <Text style={[styles.status, hasEducation && styles.statusComplete]}>
            {hasEducation
              ? `✓ ${cvData.education.length} agregada(s)`
              : "Pendiente"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/education")}
        >
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          style={[styles.button, styles.previewButton]}
          onPress={() => router.push("/preview")}
        >
          <Text style={[styles.buttonText, styles.previewButtonText]}>
            Ver Vista Previa del CV
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: CVColors.background,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: CVColors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: CVColors.primary,
  },
  subtitle: {
    color: CVColors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  section: {
    backgroundColor: CVColors.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: CVColors.border,
  },
  sectionHeading: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: CVColors.text,
    marginBottom: 6,
  },
  status: {
    fontSize: 14,
    color: CVColors.textSecondary,
  },
  statusComplete: {
    color: CVColors.success,
  },
  button: {
    backgroundColor: TuTiColors.accentYellow,
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  previewButton: {
    backgroundColor: TuTiColors.primaryBlue,
  },
  previewButtonText: {
    color: TuTiColors.textWhite,
  },
  buttonText: {
    color: TuTiColors.primaryBlue,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
