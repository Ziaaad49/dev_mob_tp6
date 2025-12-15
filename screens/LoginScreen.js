import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, useColorScheme, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
    const [name, setName] = useState("");
    const { login } = useContext(AuthContext);
    const scheme = useColorScheme();
    const isDark = scheme === "dark";

    return (
        <View style={[styles.container, { backgroundColor: isDark ? '#0f1720' : '#ffffff' }]}>
            <Text style={[styles.title, { color: isDark ? '#fff' : '#111' }]}>Connexion</Text>
            <TextInput
                style={[styles.input, { backgroundColor: isDark ? '#0b1220' : '#fff', color: isDark ? '#fff' : '#000', borderColor: isDark ? '#213040' : '#ccc' }]}
                placeholder="Votre nom"
                placeholderTextColor={isDark ? '#9aa6b2' : '#666'}
                value={name}
                onChangeText={setName}
            />
            <TouchableOpacity style={[styles.button, { backgroundColor: '#6200ee' }]} onPress={() => login(name)}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: { 
        fontSize: 28, 
        marginBottom: 20, 
        textAlign: "center" 
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
        padding: 10,
        borderRadius: 6,
    },
    button: {
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});