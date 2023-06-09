import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [members, setMembers] = useState<string[]>([]);

  /* Função 'find' procura o primeiro 'member' da lista trazendo aquele que
   é estritamente igual ao informado no input de nome e armazena na variável */
  const duplicateMember = members.find(m => m === name);

  // Salva Membro
  function handleSubmit() {
    if (name === '') {
      Alert.alert("Nome inválido", "O nome do usuário deve ser informado!");
    } else if (duplicateMember) { //verifica duplicidade de membros
      Alert.alert("Opsss!", "Esse usuário já existe na lista");
    } else {
      setMembers(parms => [name, ...parms]);

      setName('');
    }
  }

  // Remove Membro
  function handleRemoveMember(member: string) {
    // a variável recebe um novo array retirando o member passado
    const updatedItems = members.filter(m => m !== member);
    Alert.alert(
      'Remover',
      'Remover o ' + member + '?',
      [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          onPress: () => {

            setMembers(updatedItems);
            console.log("Usuário removido com sucesso!");
          },
        },
      ],
    );
  }

  return (
    <View style={styled.container}>
      <Text key={1} style={styled.titleEvent}>
        Nome do evento
      </Text>
      <Text key={2} style={styled.subTitle}>
        Sexta, 9 de Maio de 2023.
      </Text>

      <View style={styled.containerInput}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          style={styled.input}
          onChangeText={setName}
          value={name}
        />

        <TouchableOpacity style={styled.buttonAdd} onPress={handleSubmit}>
          <Text style={styled.labelButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Text key={3} style={styled.titleMembers}>
        Nome do evento
      </Text>

      {members.length > 0 ? (
        members.map((name, index) => (
          <View key={name + index} style={styled.member}>
            <Text style={styled.memberLabel}>{name}</Text>

            <TouchableOpacity
              style={styled.buttonRemove}
              onPress={() => handleRemoveMember(name)}>
              <Text style={styled.labelButton}>-</Text>
            </TouchableOpacity>
          </View>
        ))
        // operador ternário para verificar se n° de membros é maior que zero
      ) : (
        <Text key={4} style={styled.paragraph}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de
          presença.
        </Text>
      )}
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 25,
  },
  titleEvent: {
    color: '#FDFCFE',
    fontSize: 24,
    lineHeight: 28.13,
    fontWeight: '700',
  },
  titleMembers: {
    color: '#FDFCFE',
    fontSize: 20,
    lineHeight: 23.44,
    fontWeight: '700',
    marginTop: 42,
  },
  paragraph: {
    color: '#FDFCFE',
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: '400',
    marginTop: 42,
    textAlign: 'center',
  },
  subTitle: {
    color: '#6B6B6B',
    lineHeight: 18.75,
    fontSize: 16,
    fontWeight: '400',
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#1F1E25',
    color: '#FDFCFE',
    alignItems: 'center',
    paddingHorizontal: 16,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
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
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#31CF67',
  },
  buttonRemove: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#E23C44',
  },
  labelButton: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '400',
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 16,
    width: '100%',
    height: 60,
    marginTop: 16,
    borderRadius: 4,
    backgroundColor: '#1F1E25',
  },
  memberLabel: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 18.75,
  },
});