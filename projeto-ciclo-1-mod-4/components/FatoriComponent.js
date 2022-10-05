import { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

const FatoriComponent = () => {

    const [numero, setNumero] = useState(" ");

    function fatorial(numero) {
      let fatori = 1;
      if (numero == 1 || numero == 0) {
        return 1;
      } else {
        for (let cont = 1; cont <= numero; cont++) {
            fatori *= cont;
        }
      }
      return fatori;
    }
  
    let resultado = fatorial(numero)
  
    return (
      <View>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Fatorial</Text>
          <TextInput
            style={styles.input}
            value={resultado}
            onChangeText={setNumero}
            placeholder="Insira um numero"
            
          />
        </View>
        
        <View style={{alignItems: "center", marginTop:10}}>
          <Text>Fatorial: {resultado}</Text>
        </View>
      </View>
    );
  }
  
    const styles = StyleSheet.create({
        input: {
        height: 40,
        margin: 28,
        borderWidth: 2,
        padding: 10,
        width: 130,
        
        }
    });
    

export default FatoriComponent;


