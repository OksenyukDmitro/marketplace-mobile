import { NavigationActions } from 'react-navigation';
import screens from '../navigation/screens';

class NavigationService {
  constructor() {
    this.navigation = null;
  }

  init(ref) {
    if (this.navigation) return;
    this.navigation = ref;
  }

  navigate(route) {
    this.navigation.dispatch(NavigationActions.navigate(route));
  }

  navigateToApp() {
    this.navigate({ routeName: screens.MainApp });
  }

  navigateToNewItem() {
    this.navigate({ routeName: screens.AddNewItem });
  }

  navigateToAuth() {
    this.navigate({ routeName: screens.Auth });
  }

  navigateToRegister() {
    this.navigate({ routeName: screens.Register });
  }

  navigateToLogin() {
    this.navigate({ routeName: screens.Login });
  }

  navigateToSettings() {
    this.navigate({ routeName: screens.Settings });
  }

  navigateBrowse() {
    this.navigate({ routeName: screens.Browse });
  }

  navigateToProfile(id) {
    this.navigate({ routeName: screens.Profile, params: { id } });
  }

  navigateToInbox() {
    this.navigate({ routeName: screens.Inbox });
  }

  navigateToFilter() {
    this.navigate({ routeName: screens.Filter });
  }
  navigateToLocation(locationSetter) {
    this.navigate({
      routeName: screens.Location,
      params: { locationSetter },
    });
  }

  navigateToProduct(id) {
    this.navigate({
      routeName: screens.Product,
      params: {
        id,
      },
    });
  }
  navigateToChat(id) {
    this.navigate({
      routeName: screens.Chat,
      params: {
        id,
      },
    });
  }

  goBack() {
    this.navigation.dispatch(NavigationActions.back());
  }
  pop() {
    this.navigation.dispatch(NavigationActions.pop());
  }
}

export default new NavigationService();
