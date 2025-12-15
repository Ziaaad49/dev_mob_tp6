import React, { useState, useEffect, useContext } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    StyleSheet,
    ActivityIndicator 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar"; // Importez l'AppBar

export default function TodoListScreen() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        console.log("Chargement des tâches...");

        // Simulation d'un appel API
        setTimeout(() => {
            setTodos([
                { id: 1, title: "Faire les courses", description: "Acheter du lait et des œufs" },
                { id: 2, title: "Sortir le chien", description: "Promenade au parc" },
                { id: 3, title: "Coder une app RN", description: "Terminer le TP React Native" },
                { id: 4, title: "Réunion d'équipe", description: "15h en salle B" },
                { id: 5, title: "Faire du sport", description: "30 minutes de course" },
            ]);
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#6200ee" />
                <Text style={styles.loadingText}>Chargement des tâches...</Text>
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.taskItem}
            onPress={() => 
                navigation.navigate("Details", { 
                    id: item.id, 
                    title: item.title,
                    description: item.description
                })
            }
        >
            <Text style={styles.taskTitle}>{item.title}</Text>
            {item.description && (
                <Text style={styles.taskDescription}>{item.description}</Text>
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* AppBar avec le titre "Mes tâches" */}
            <AppBar title="Mes tâches" />
            
            {/* Liste des tâches */}
            <View style={styles.listContainer}>
                {todos.length === 0 ? (
                    <Text style={styles.emptyText}>Aucune tâche à afficher</Text>
                ) : (
                    <FlatList
                        data={todos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#666",
    },
    taskItem: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    taskDescription: {
        fontSize: 14,
        color: "#666",
    },
    emptyText: {
        textAlign: "center",
        fontSize: 16,
        color: "#888",
        marginTop: 50,
    },
});