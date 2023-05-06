import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //comentário
  return (
    <View style={styled.constainer}>
      <Text key={1} style={styled.text}>
        Nome do Evento
      </Text>
      <Text key={2} style={styled.text2}>
        Sexta, 27 de Abril de 2023
      </Text>
    </View>
  );
}

const styled = StyleSheet.create({
  constainer: {
    backgroundColor: '#131016',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 25
  },

  text: {
    color: '#FDFCFE',
    fontSize: 24,
    lineHeight: 28.13,
    fontWeight: '700',
  },

  text2: {
    color: '#6B6B6B',
    lineHeight: 18.75,
    fontWeight: "400",
  }
})