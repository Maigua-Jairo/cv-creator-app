import { Stack } from "expo-router";
import { CVProvider } from "../context/CVContext";
import { CVColors, TuTiColors } from "../src/constants/theme";

export default function RootLayout() {
  return (
    <CVProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: TuTiColors.primaryBlue,
          },
          headerTintColor: TuTiColors.textWhite,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: CVColors.background,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Crear CV",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="personal-info"
          options={{
            title: "Información Personal",
          }}
        />
        <Stack.Screen
          name="experience"
          options={{
            title: "Experiencia Laboral",
          }}
        />
        <Stack.Screen
          name="education"
          options={{
            title: "Educación",
          }}
        />
        <Stack.Screen
          name="preview"
          options={{
            title: "Vista Previa",
            presentation: "modal",
          }}
        />
      </Stack>
    </CVProvider>
  );
}