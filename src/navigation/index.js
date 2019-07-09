import React from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationService } from '../services';
import Navigator from './Navigator';

const NavigatorContainer = createAppContainer(Navigator);

export default () => (
  <NavigatorContainer ref={(nav) => NavigationService.init(nav)} />
);
