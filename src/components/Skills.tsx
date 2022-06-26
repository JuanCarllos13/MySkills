import React from "react";
import {Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from 'react-native'


interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({skill, ...reset}: SkillCardProps){
  return(
    <TouchableOpacity style={styles.buttonSkills} {...reset} >
    <Text style={styles.TextSkill}>
      {skill}
    </Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1F1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center', 
    marginVertical: 10
  },
  TextSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
})