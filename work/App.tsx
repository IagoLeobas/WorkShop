import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {

  //comentário
  return (
    <View style={styled.constainer}>
      <Text key={1} style={styled.title}>
        Nome do Evento
      </Text>

      <Text key={2} style={styled.subTitle}>
        Sexta, 27 de Abril de 2023
      </Text>

      <View style={styled.containerInput}>
        <TextInput
          placeholder='Nome do Participante'
          placeholderTextColor={'#6B6B6B'}
          style={styled.input}
        />

        <TouchableOpacity style={styled.buttonAdd}>
          <Text
            style={styled.labelButton}>+</Text>
        </TouchableOpacity>
      </View>
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

  title: {
    color: '#FDFCFE',
    fontSize: 24,
    lineHeight: 28.13,
    fontWeight: '700',
  },

  subTitle: {
    color: '#6B6B6B',
    lineHeight: 18.75,
    fontSize: 16,
    fontWeight: "400",
  },

  input: {
    flex: 1,
    height: 56,
    width: 317,
    borderRadius: 4,
    backgroundColor: '#1F1E25',
    color: '#FDFCFE',
    alignItems: 'center',
    paddingHorizontal: 16,
    fontSize: 14,
  },

  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 34,
    gap: 7,
  },

  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    borderRadius: 4,
    backgroundColor: '#31CF67',
  },

  labelButton: {
    color: '#fff',
    fontSize: 24,
  },
})