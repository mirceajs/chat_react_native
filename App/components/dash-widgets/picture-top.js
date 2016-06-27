/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  TouchableHighlight,
  Text,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/MaterialIcons';


export default class PictureTop extends Component {
  constructor(props){
    super(props)
    console.log(this.props)

  }

  render() {
    return(<View>
<View style={{flexDirection:'row', height:90, justifyContent:'space-between'}}> 
          <View  style={{flexDirection:'row',}}>
          <TouchableHighlight style={{flex: 1,}}>
          <IconI name="close" style ={{margin:20, alignSelf:'center'}} size={30} color="#fff" />
            </TouchableHighlight>
            </View>
            <View  style={{flexDirection:'row',}}>
           <TouchableHighlight style={{flex: 1, }} >
          <IconI name="note" style ={{margin:20,marginLeft:0, alignSelf:'center'}} size={30} color="#fff" />
          </TouchableHighlight>
           <TouchableHighlight style={{flex: 1,}} >
          <IconI name="title" style ={{margin:20,marginLeft:0, alignSelf:'center'}} size={35} color="#fff" />
          </TouchableHighlight>
           <TouchableHighlight style={{flex: 1,}} >
          <IconI name="colorize" style ={{margin:20,marginLeft:0, alignSelf:'center'}} size={35} color="#fff" />
          </TouchableHighlight>
          </View>
          </View>
      </View>);
  }
}       
