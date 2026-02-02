import { Text, View, StyleSheet } from 'react-native';

export default function Card({text}){
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create(

{
    card: {
        width: 200,
        height: 100,
        margin: 8,
        padding: 16,
        backgroundColor: '#eee',
        borderRadius: 8,},
    cardText: {
        fontSize: 12
    }
 })