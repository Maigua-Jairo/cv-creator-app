# Skill: Paleta de Colores Marca TuTi (React Native + TypeScript)

Esta skill define la paleta de colores oficial extraída del logotipo de **TuTi** y proporciona constantes tipadas y estilos reutilizables en **React Native** con **TypeScript**.

## 1. Definición de Constantes y Tipos (TypeScript)

Crea un archivo de constantes o tokens en tu proyecto (por ejemplo, `tutiTheme.ts`) para mantener la consistencia en toda tu app móvil.

```typescript
// tutiTheme.ts

export const TuTiColors = {
  primaryBlue: '#001fbc',
  accentYellow: '#ffe600',
  textWhite: '#ffffff',
} as const;

export type TuTiColorType = keyof typeof TuTiColors;
```

---

## 2. Estilos Reutilizables (React Native `StyleSheet`)

A continuación, tienes un objeto de estilos estructurado para componentes comunes (`View`, `Text`, `TouchableOpacity` / Botones) usando los colores de TuTi.

```typescript
// tutiStyles.ts
import { StyleSheet } from 'react-native';
import { TuTiColors } from './tutiTheme';

export const tutiStyles = StyleSheet.create({
  // --- FONDOS Y CONTENEDORES ---
  containerPrimary: {
    backgroundColor: TuTiColors.primaryBlue,
    padding: 16,
    borderRadius: 12,
  },
  containerAccent: {
    backgroundColor: TuTiColors.accentYellow,
    padding: 16,
    borderRadius: 12,
  },

  // --- BOTONES ---
  buttonPrimary: {
    backgroundColor: TuTiColors.accentYellow,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimaryText: {
    color: TuTiColors.primaryBlue,
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonSecondary: {
    backgroundColor: TuTiColors.primaryBlue,
    borderWidth: 2,
    borderColor: TuTiColors.accentYellow,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryText: {
    color: TuTiColors.accentYellow,
    fontWeight: 'bold',
    fontSize: 16,
  },

  // --- TEXTOS ---
  textTitle: {
    color: TuTiColors.primaryBlue,
    fontSize: 24,
    fontWeight: '800',
  },
  textHighlight: {
    color: TuTiColors.accentYellow,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBodyLight: {
    color: TuTiColors.textWhite,
    fontSize: 14,
  },
});
```

---

## 3. Ejemplo de Componente en React Native (TSX)

Aquí tienes un ejemplo de cómo integrar esta skill en un componente de tu aplicación:

```tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { tutiStyles } from './tutiStyles';

export const TuTiWelcomeCard: React.FC = () => {
  return (
    <View style={tutiStyles.containerPrimary}>
      <Text style={tutiStyles.textHighlight}>¡Bienvenido a TuTi!</Text>
      <Text style={[tutiStyles.textBodyLight, { marginVertical: 8 }]}>
        Disfruta de la experiencia móvil con la identidad visual oficial.
      </Text>

      <TouchableOpacity 
        style={[tutiStyles.buttonPrimary, { marginTop: 12 }]}
        onPress={() => console.log('Botón principal presionado')}
      >
        <Text style={tutiStyles.buttonPrimaryText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};
```