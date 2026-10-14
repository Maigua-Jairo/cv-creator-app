/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const TuTiColors = {
  primaryBlue: '#001fbc',
  accentYellow: '#ffe600',
  textWhite: '#ffffff',
} as const;

export const CVColors = {
  primary: TuTiColors.primaryBlue,
  accent: TuTiColors.accentYellow,
  background: '#f4f6ff',
  surface: '#ffffff',
  text: '#17234a',
  textSecondary: '#5e6b8a',
  border: '#d9e0f2',
  success: '#1d7a50',
  danger: '#c62828',
} as const;

export const Colors = {
  light: {
    text: CVColors.text,
    background: CVColors.background,
    backgroundElement: CVColors.surface,
    backgroundSelected: '#e8ecff',
    textSecondary: CVColors.textSecondary,
  },
  dark: {
    text: TuTiColors.textWhite,
    background: '#0b1230',
    backgroundElement: '#141e45',
    backgroundSelected: '#1e2b5f',
    textSecondary: '#b9c4e7',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
