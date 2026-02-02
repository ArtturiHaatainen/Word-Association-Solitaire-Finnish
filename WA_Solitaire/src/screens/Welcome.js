import { Text, View, StyleSheet, Pressable } from 'react-native';
export default function Welcome({onStartGame}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Word Solitaire Suomi</Text>
            <Text style={styles.subtitle}>Aloita peli napauttamalla alla olevaa painiketta.</Text>
            
        <Pressable style={styles.button} onPress={onStartGame}>
            <Text style={styles.buttonText}>Pelaa</Text>
        </Pressable>
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
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

});