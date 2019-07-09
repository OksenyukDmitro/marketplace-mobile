import React from 'react';
import { View, Text } from 'react-native';
import { NavigationService } from '../../../../services';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../../../styles';
import { Touchable } from '../../../../components';
import s from './styles';

function EmptyInbox() {
    return (  
      <View>
        <Touchable
          style={s.btnContainer} 
          containerStyle={s.btnContainer}
          onPress={() => NavigationService.navigateBrowse()}
          useOpacityAndroid
        >
          <AntDesign
            name="frowno"
            size={120}
            color={colors.textUnused}
          />
          <Text style={s.text}>No messages for you...</Text>
          <Text style={s.text}>Go to buy</Text>
        </Touchable>
      </View>
    );
  }

  export default EmptyInbox;