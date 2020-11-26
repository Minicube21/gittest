import React from 'react';
import {StyleSheet, Switch, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import {vibrate} from './utils'
import ChooseTime from './ChoosingTime'



export default class App extends React.Component {
  state = {
    minutes :25,
    secondes : 0,
    minutes2 : 5,
    secondes2 :0,
    compteur2 : 300,
    compteur: 1500,
    abled : true,
    active : false,
    update: false,
    formulaire : true,
  }
  
  startTimer = () => {
    this.setState ({
      active : true,
      compteur : 60*+this.state.minutes + +this.state.secondes -1,
      abled : true,
      compteur2 : 60*+this.state.minutes2 + +this.state.secondes2 -1,
      update: false,
    });
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval();
  }
  
  tick = () => {
    if (this.state.active & this.state.abled & !this.state.update)  {
      this.setState (prevState => ({
        compteur: prevState.compteur - 1,
        minutes: ~~(prevState.compteur/60),
        secondes: prevState.compteur%60,
      })
     )}
    if (this.state.active & this.state.abled & this.state.update)  {
      let compteurActuel2 = this.state.compteur2
      this.setState ({
        compteur2: compteurActuel2 - 1,
        minutes2: ~~(compteurActuel2/60),
        secondes2: compteurActuel2%60,
      })
    }
    if (this.state.compteur<0 ) { 
      vibrate() 
   }
  }

  toggleSwitch = () => {
    this.setState(prevState => ({update: !prevState.update}))
  } 

  toggleForm = () => {
      this.setState(prevState => ({formulaire: !prevState.formulaire}))
  }
 
  form = (formu) => {
    this.setState({
      minutes : formu.minutes,
      minutes2 : formu.minutes2,
      secondes : formu.secondes,
      secondes2 : formu.secondes2,
      formulaire : true,
    })
  }

  render() {
    if (!this.state.formulaire) return <ChooseTime onSubmit = {this.form} />
    return (
      <View style={styles.container}>

        <View style={styles.container6}>
          <Text  style = {{fontSize:20}}>Let's start working !</Text>
          <Text numberOfLines={5}></Text>
          <Button 
            onPress={this.startTimer}
            title="Start Timer" 
            color="#FC5D5D"
          />
        </View >
        
        <View style={styles.container2}>
          <Text style = {{fontSize:20}}>
            Travail
          </Text>   
          <Text numberOfLines={5}></Text>     
          <Text style = {{fontSize:20}}>
            {this.state.minutes}min  {this.state.secondes}s             
          </Text>
        </View>

        <View style={styles.container4}>
          <Text style = {{fontSize:20}}>
            Chill
          </Text>   
          <Text numberOfLines={5}></Text>     
          <Text style = {{fontSize:20}}>
           {this.state.minutes2}min  {this.state.secondes2}s             
          </Text>
        </View>

        <View style={styles.container1}>
          <Switch 
          trackColor={{ false: "#769577", true: "#81b0ff" }}
          thumbColor = '#48D1CC'
          onValueChange={this.toggleSwitch}
          value={this.state.update}
          />
        </View>

        <View style={styles.container3}>
          <View style ={{flexDirection:'row'}}>
          <Button
            onPress={() => this.setState({
              abled : false
            })}
            title = "Pause"
            color={(!this.state.abled)?'tomato':'#3cb371'}
          />
          <Button
            onPress={() => this.setState({
              abled : true
            })}
            title = "Reprendre"
            color={(this.state.abled)?'tomato':'#3cb371'}
          />
          </View>
          <Text numberOfLines={5}></Text>     
          <View>
          <Button 
            onPress={() => this.setState({compteur: 1500, compteur2 : 300, minutes :25, secondes : 0, minutes2 : 5,  secondes2 :0})}
            title = "reset"
            color="red"
          />
          </View>
        </View>

        <View style={styles.container5}>
            <Button
            title = 'Settings'
            color = '#f08080'
            onPress={this.toggleForm}
            />
        </View>

     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 50,
  },
  container1:{
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  container2:{
    flex: 1,
    backgroundColor: '#ffe4e1',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  container3: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
        
  },
  container4:{
    flex: 1,
    backgroundColor: '#fafad2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container5: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    alignItems: 'stretch'
  },
  container6: {
    flex: 2,
    marginTop :30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  });

