/* eslint-disable prettier/prettier */
import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

interface Props{
    placeholder?: string,
    keyboardType: KeyboardTypeOptions,
    value?: string,
    onChangeText?: (username: any)=> void;

}
 const InputComponent = (props: Props) => {
     const {placeholder, keyboardType, onChangeText, value} = props;
    return (
        <TextInput placeholder= {placeholder} keyboardType={keyboardType}  onChangeText={onChangeText} value={value} style={styles.Input} numberOfLines={1}/>
    );
};

const styles = StyleSheet.create({
    Input: {
        width: '70%',
        borderWidth: 1,
        height: 45,
        marginTop: 20,
        borderRadius: 6,
        paddingLeft: 15,
        fontSize: 16,
        borderColor: '#979B97',
        letterSpacing: 2,
        color: '#090B0B',
      },
});
export default InputComponent;
