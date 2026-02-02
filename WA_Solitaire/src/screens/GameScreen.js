import { Text, View, StyleSheet, Pressable } from 'react-native';
import Deck from '../components/Deck';
export default function GameScreen({onGoBack}) {

    return (
        <View style={styles.container}>
             <Pressable style={styles.backButton} onPress={onGoBack}>
                <Text style={styles.buttonText}>Takaisin</Text>
            </Pressable>
            <Deck></Deck>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff7ae2',
},
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,},
        
    subtitle: {
        fontSize: 18,
        marginBottom: 10},
        
    backButton: {
        position: "absolute",  
        top: 60,
        left: 25,
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20,
        zIndex: 10,

    },
    buttonText: {
        color: "#fff",
        fontSize: 12    
    }

});