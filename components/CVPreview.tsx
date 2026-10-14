import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CVData } from "../types/cv.types";
import { CVColors } from "../src/constants/theme";

interface CVPreviewProps {
  cvData: CVData;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ cvData }) => {
  const { personalInfo, experiences, education } = cvData;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header con información personal */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.fullName || "Tu Nombre"}
          </Text>
          <View style={styles.contactInfo}>
            {personalInfo.email.trim().length > 0 && (
              <Text style={styles.contactText}>📧 {personalInfo.email}</Text>
            )}
            {personalInfo.phone.trim().length > 0 && (
              <Text style={styles.contactText}>📱 {personalInfo.phone}</Text>
            )}
            {personalInfo.location.trim().length > 0 && (
              <Text style={styles.contactText}>📍 {personalInfo.location}</Text>
            )}
          </View>
        </View>

        {/* Resumen profesional */}
        {personalInfo.summary.trim().length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>RESUMEN PROFESIONAL</Text>
            <Text style={styles.summaryText}>{personalInfo.summary}</Text>
          </View>
        )}

        {/* Experiencia laboral */}
        {experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCIA LABORAL</Text>
            {experiences.map((exp) => (
              <View key={exp.id} style={styles.item}>
                <Text style={styles.itemTitle}>{exp.position}</Text>
                <Text style={styles.itemSubtitle}>{exp.company}</Text>
                <Text style={styles.itemDate}>
                  {exp.startDate} - {exp.endDate || "Actual"}
                </Text>
                {exp.description.trim().length > 0 && (
                  <Text style={styles.itemDescription}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Educación */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCACIÓN</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.item}>
                <Text style={styles.itemTitle}>{edu.degree}</Text>
                {edu.field.trim().length > 0 && (
                  <Text style={styles.itemSubtitle}>{edu.field}</Text>
                )}
                <Text style={styles.itemInstitution}>{edu.institution}</Text>
                {edu.graduationYear.trim().length > 0 && (
                  <Text style={styles.itemDate}>{edu.graduationYear}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Mensaje si no hay datos */}
        {!personalInfo.fullName &&
          experiences.length === 0 &&
          education.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                No hay información para mostrar.{"\n"}
                Completa las secciones para ver tu CV.
              </Text>
            </View>
          )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CVColors.surface,
  },
  content: {
    padding: 20,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: CVColors.primary,
    paddingBottom: 16,
    marginBottom: 24,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: CVColors.text,
    marginBottom: 12,
  },
  contactInfo: {
    gap: 4,
  },
  contactText: {
    fontSize: 14,
    color: CVColors.textSecondary,
    marginBottom: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: CVColors.primary,
    marginBottom: 12,
    letterSpacing: 1,
    borderLeftWidth: 4,
    borderLeftColor: CVColors.accent,
    paddingLeft: 8,
  },
  summaryText: {
    fontSize: 14,
    color: CVColors.text,
    lineHeight: 20,
  },
  item: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: CVColors.border,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: CVColors.text,
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: CVColors.textSecondary,
    marginBottom: 4,
  },
  itemInstitution: {
    fontSize: 14,
    color: CVColors.textSecondary,
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 12,
    color: CVColors.textSecondary,
    fontStyle: "italic",
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 13,
    color: CVColors.text,
    lineHeight: 18,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: CVColors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
  },
});
