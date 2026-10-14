import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from "react-native";
import { CVColors, TuTiColors } from '../src/constants/theme';

interface NavigationButtonProps{
    title: string;
    onPress: ()=> void;
    variant?: "primary" | "secondary" | "danger";
    style?: ViewStyle;
}

export const NavigationButton=({
    title,
    onPress,
    variant= "primary",
     style,
}: NavigationButtonProps)=>{
   return(
    <TouchableOpacity 
    style={[styles.button, styles[variant], style]}
    onPress={onPress}
    activeOpacity={0.8}
    >
    <Text  
      style={[
        styles.text,
        variant === "secondary" && styles.textSecondary,
        variant === "danger" && styles.textDanger,
      ]}
    >
    {title}
    </Text>
    </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
    button:{
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    },
    primary:{
        backgroundColor: TuTiColors.accentYellow,
    },
    secondary:{
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: TuTiColors.primaryBlue,
    },
    danger:{
        backgroundColor: CVColors.danger,

    },
    text:{
        color: TuTiColors.primaryBlue,
        fontSize: 16,
        fontWeight: "600",
    },
    textSecondary:{
        color: TuTiColors.primaryBlue,
    },
    textDanger: {
        color: TuTiColors.textWhite,
    },
});