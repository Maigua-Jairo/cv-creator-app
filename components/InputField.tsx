import React from 'react';
import{
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps,
} from 'react-native';
import { CVColors } from '../src/constants/theme';

interface InputFieldProps extends TextInputProps{
    label: string;
    error?: string;
}

export const InputField = ({label, error, ...props} : InputFieldProps)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
             style={[styles.input, error && styles.inputError]}
             placeholderTextColor={CVColors.textSecondary}
             {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginBottom: 16,
    },
    label:{
        fontSize: 16,
        fontWeight: "600",
        color: CVColors.text,
        marginBottom: 8,
    },
    input: {
            borderWidth: 1,
            borderColor: CVColors.border,
            borderRadius: 12,
            padding: 14,
            fontSize: 16,
            color: CVColors.text,
            backgroundColor: CVColors.surface,
        },
        inputError:{
            borderColor: CVColors.danger,
        },
        errorText:{
            color: CVColors.danger,
            fontSize: 12,
            marginTop: 4, 
        },
    },
);