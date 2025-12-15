import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TodoDetailsScreen({ route }) {
    const { id, title, description } = route.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>ID de la tâche</Text>
                <Text style={styles.value}>#{id}</Text>
                
                <Text style={styles.label}>Titre</Text>
                <Text style={styles.title}>{title}</Text>
                
                {description && (
                    <>
                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.description}>{description}</Text>
                    </>
                )}
            </View>
            
            <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                    Cette tâche a été créée le {new Date().toLocaleDateString()}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    label: {
        fontSize: 14,
        color: "#666",
        marginTop: 12,
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#6200ee",
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: "#444",
        lineHeight: 22,
    },
    infoBox: {
        marginTop: 20,
        padding: 12,
        backgroundColor: "#e8f5e9",
        borderRadius: 6,
        borderLeftWidth: 4,
        borderLeftColor: "#4caf50",
    },
    infoText: {
        fontSize: 14,
        color: "#2e7d32",
        fontStyle: "italic",
    },
});