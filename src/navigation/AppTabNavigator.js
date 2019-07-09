import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import screens from './screens';
import s from './styles';
import BrowseNavigator from './BrowseNavigator';
import ProfileNavigator from './ProfileNavigator';
import SavedNavigator from './SavedNavigator';
import InboxNavigator from './InboxNavigator';
import { Empty } from '../components';
import { colors } from '../styles';
import CustomTabBar from './components/CustomTabBar';

const routes = {
  [screens.BrowseTab]: {
    screen: BrowseNavigator,
    navigationOptions: {
      tabBarIcon: (props) => (
        <Ionicons
          name="ios-search"
          size={28}
          color={props.focused ? colors.primary : colors.textUnused}
        />
      ),
      tabBarLabel: (props) => (
        <Text
          style={[
            props.focused ? s.tabActive : s.tabInactive,
            s.labelCenter,
          ]}
        >
          Browse
        </Text>
      ),
    },
  },
  [screens.SavedTab]: {
    screen: SavedNavigator,
    navigationOptions: {
      tabBarIcon: (props) => (
        <Ionicons
          name="ios-bookmark"
          size={28}
          color={props.focused ? colors.primary : colors.textUnused}
        />
      ),
      tabBarLabel: (props) => (
        <Text
          style={[
            props.focused ? s.tabActive : s.tabInactive,
            s.labelCenter,
          ]}
        >
          Saved
        </Text>
      ),
    },
  },
  [screens.CreateItemTab]: {
    screen: Empty,
    navigationOptions: {
      tabBarIcon: (
        <View style={s.addButton}>
          <Ionicons
            name="ios-add-circle"
            size={80}
            color={colors.primary}
          />
        </View>
      ),
      tabBarLabel: <View />,
    },
  },
  [screens.InboxTab]: {
    screen: InboxNavigator,
    navigationOptions: {
      tabBarIcon: (props) => (
        <MaterialIcons
          name="inbox"
          size={28}
          color={props.focused ? colors.primary : colors.textUnused}
        />
      ),
      tabBarLabel: (props) => (
        <Text
          style={[
            props.focused ? s.tabActive : s.tabInactive,
            s.labelCenter,
          ]}
        >
          Inbox
        </Text>
      ),
    },
  },
  [screens.ProfileTab]: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: (props) => (
        <Ionicons
          name="ios-contact"
          size={28}
          color={props.focused ? colors.primary : colors.textUnused}
        />
      ),
      tabBarLabel: (props) => (
        <Text
          style={[
            props.focused ? s.tabActive : s.tabInactive,
            s.labelCenter,
          ]}
        >
          Profile
        </Text>
      ),
    },
  },
};

export default createBottomTabNavigator(routes, {
  tabBarComponent: CustomTabBar,
  initialRouteName: screens.BrowseTab,
});
