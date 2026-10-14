import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from "react-native";
import {useRouter} from "expo-router";
import{InputField} from "../components/InputField";
import {NavigationButton} from "../components/NavigationButton";
import {useCVContext} from "../context/CVContext";
import {PersonalInfo}from "../types/cv.types";
import { CVColors } from "../src/constants/theme";
import { showMessage } from "../utils/dialogs";

export default function PersonalInfoScreen(){
    const router= useRouter();
    const {cvData, updatePersonalInfo} =useCVContext();

    const [formData, setFormData]= useState<PersonalInfo>(cvData.personalInfo);

    const handleSave = () =>{
        const fullName = formData.fullName.trim();
        const email = formData.email.trim();
        if(!fullName || !email){
            showMessage("Error", "Por favor completa al menos el nombre y email");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showMessage("Error", "Por favor ingresa un email válido");
            return;
        }
        updatePersonalInfo({ ...formData, fullName, email });
        showMessage(
            "Éxito",
            "Información guardada correctamente",
            () => router.back(),
        );
    };

    return(
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <InputField
             label="Nombre Completo *"
             placeholder=" Juan Perez"
             value={formData.fullName}
             onChangeText={(text) => setFormData ({... formData, fullName: text})}
            />

            <InputField
             label="Email *"
             placeholder="juan@email.com"
             value={formData.email}
             onChangeText={(text) => setFormData ({... formData, email: text})}
             autoCapitalize="none"
            />


            <InputField
             label="Teléfono"
             placeholder="+593 99 999 9999"
             value={formData.phone}
             onChangeText={(text) => setFormData ({... formData, phone: text})}
             keyboardType="phone-pad"
            />
            
            <InputField
             label="Ubicacion"
             placeholder="Quito, Ecuador"
             value={formData.location}
             onChangeText={(text) => setFormData ({... formData, location: text})}
            />

            <InputField
             label="Resumen Profesional"
             placeholder="Describe brevemente tu perfil profesional"
             value={formData.summary}
             onChangeText={(text) => setFormData ({... formData, summary: text})}
             multiline
             numberOfLines={4}
             style={{minHeight: 120, textAlignVertical: "top"}}
            />
            <NavigationButton title ="Guardar Informacion" onPress={handleSave}/>
            
            <NavigationButton
              title="Cancelar"
              onPress={()=> router.back()}
              variant="secondary"
            />
            
          </View>
</ScrollView>
    );
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: CVColors.background,
    },
    content:{
        padding:20,
    },
});