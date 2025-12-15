// /components/AppBarWithIcons.js (optionnel)
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Si vous utilisez Expo
import { AuthContext } from "../context/AuthContext";

const AppBarWithIcons = ({ title }) => {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            {/* Menu icon à gauche (optionnel) */}
            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
            
            {/* Titre au centre */}
            <Text style={styles.title}>{title}</Text>
            
            {/* Bouton Logout avec icône */}
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={logout}
            >
                <Ionicons name="log-out-outline" size={20} color="white" />
                <Text style={styles.logoutText}>  Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "#6200ee",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    iconButton: {
        padding: 8,
        marginRight: 12,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
    },
    logoutText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },
});

export default AppBarWithIcons;