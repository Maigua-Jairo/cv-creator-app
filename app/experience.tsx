import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { InputField } from "../components/InputField";
import { NavigationButton } from "../components/NavigationButton";
import { useCVContext } from "../context/CVContext";
import { Experience } from "../types/cv.types";
import { CVColors } from "../src/constants/theme";
import { showConfirmation, showMessage } from "../utils/dialogs";

export default function ExperienceScreen() {
  const router = useRouter();
  const { cvData, addExperience, deleteExperience } = useCVContext();

  const [formData, setFormData] = useState<Omit<Experience, "id">>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleAdd = () => {
    if (
      !formData.company.trim() ||
      !formData.position.trim() ||
      !formData.startDate.trim()
    ) {
      showMessage(
        "Error",
        "Por favor completa al menos empresa, cargo y fecha de inicio"
      );
      return;
    }

    const newExperience: Experience = {
      id: Date.now().toString(),
      company: formData.company.trim(),
      position: formData.position.trim(),
      startDate: formData.startDate.trim(),
      endDate: formData.endDate.trim(),
      description: formData.description.trim(),
    };

    addExperience(newExperience);

    // Limpiar formulario
    setFormData({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });

    showMessage("Éxito", "Experiencia agregada correctamente");
  };

  const handleDelete = (id: string) => {
    showConfirmation(
      "Confirmar",
      "¿Estás seguro de eliminar esta experiencia?",
      () => deleteExperience(id),
    );
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Agregar Nueva Experiencia</Text>

        <InputField
          label="Empresa *"
          placeholder="Nombre de la empresa"
          value={formData.company}
          onChangeText={(text) => setFormData({ ...formData, company: text })}
        />

        <InputField
          label="Cargo *"
          placeholder="Tu posición"
          value={formData.position}
          onChangeText={(text) => setFormData({ ...formData, position: text })}
        />

        <InputField
          label="Fecha de Inicio *"
          placeholder="Ej: Enero 2020"
          value={formData.startDate}
          onChangeText={(text) => setFormData({ ...formData, startDate: text })}
        />

        <InputField
          label="Fecha de Fin"
          placeholder="Ej: Diciembre 2023 o 'Actual'"
          value={formData.endDate}
          onChangeText={(text) => setFormData({ ...formData, endDate: text })}
        />

        <InputField
          label="Descripción"
          placeholder="Describe tus responsabilidades y logros..."
          value={formData.description}
          onChangeText={(text) =>
            setFormData({ ...formData, description: text })
          }
          multiline
          numberOfLines={4}
          style={{ height: 100, textAlignVertical: "top" }}
        />

        <NavigationButton title="Agregar Experiencia" onPress={handleAdd} />

        {cvData.experiences.length > 0 && (
          <>
            <Text style={styles.listTitle}>Experiencias Agregadas</Text>
            {cvData.experiences.map((exp) => (
              <View key={exp.id} style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{exp.position}</Text>
                  <Text style={styles.cardSubtitle}>{exp.company}</Text>
                  <Text style={styles.cardDate}>
                    {exp.startDate} - {exp.endDate || "Actual"}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(exp.id)}
                >
                  <Text style={styles.deleteButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </>
        )}

        <NavigationButton
          title="Volver"
          onPress={() => router.back()}
          variant="secondary"
          style={{ marginTop: 16 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CVColors.background,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: CVColors.primary,
    marginBottom: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: CVColors.text,
    marginTop: 24,
    marginBottom: 12,
  },
  card: {
    backgroundColor: CVColors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: CVColors.border,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: CVColors.text,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: CVColors.textSecondary,
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: CVColors.textSecondary,
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: CVColors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
