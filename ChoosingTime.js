
import React from 'react';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

export default class ChooseTime extends React.Component {
    static propTypes = {
      onSubmit : PropTypes.func
    }

    state = {
        minutes :25,
        secondes : 0,
        minutes2 : 5,
        secondes2 :0, 
    }

    getHandler = key => {
        return val => {
          this.setState({[key]: val})
        }
    }

    
    handleSubmit = () => {
      this.props.onSubmit(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon
                  name = 'home'
                  type='font-awesome'
                  size={100}
                  color='#f08080'
                />
                <Text  style = {{fontSize:20, marginLeft : 20}}>Temps de travail</Text>
                <TextInput 
                    keyboardType='numeric'
                    placeholder = 'minutes'
                    style ={styles.input}
                    onChangeText={this.getHandler('minutes')}>
                    </TextInput>
                <Text numberOfLines={5}></Text>  
                <TextInput 
                    keyboardType='numeric'
                    placeholder = 'secondes'
                    style = {styles.input}
                    onChangeText={this.getHandler('secondes')}
                    />
                <Text numberOfLines={5}></Text>  
                <Text  style = {{fontSize:20, marginLeft : 20}}>Temps de repos</Text> 
                <TextInput 
                    keyboardType='numeric'
                    placeholder = 'minutes'
                    style ={styles.input}
                    onChangeText={this.getHandler('minutes2')}
                    />
                <Text numberOfLines={5}></Text>  
                <TextInput 
                    keyboardType='numeric'
                    placeholder = 'secondes'
                    style = {styles.input}
                    onChangeText={this.getHandler('secondes2')}
                    />
                <Text numberOfLines={20}></Text>  
                <Button title = "Valider" color = '#f08080' onPress={this.handleSubmit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafad2',
      alignContent: 'center',
      justifyContent:'center',
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      minWidth: 100,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor:'#ffe4e1'
    },
  })