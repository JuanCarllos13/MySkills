import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Alert,
} from 'react-native'
import { Button } from '../components/button'
import { SkillCard } from '../components/Skills'


interface skillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkills, setNewSkills] = useState('')
  const [mySkills, setMySkills] = useState<skillData[]>([])

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkills
    }
    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Juan</Text>
      <TextInput
        style={styles.input}
        placeholder={'New Skill'}
        placeholderTextColor='#555'
        onChangeText={setNewSkills}
      />

      <Button onPress={handleAddSkill} title={'Adicionar'} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
      {/* {
        mySkills.map( (skill) => (
         <SkillCard skill={skill} key={skill}/>
        ))
      } */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
})