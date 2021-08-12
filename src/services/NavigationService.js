import {
  StackActions,
  CommonActions,
  DrawerActions,
} from "@react-navigation/native";
import ScreenID from "common/ScreenID";

function getCurrentRouteData(navigationState) {

  if (!navigationState) {
    return null;
  }
  const route = navigationState?.routes?.[navigationState.index];
  // dive into nested navigators
  if (route?.routes) {
    return getCurrentRouteData(route);
  }
  return { name: route?.name, params: route?.params };
}
class NavigationService {
  navigator = null;
  currentRouterName = null;
  currentRouteParams = null;
  loading = null;
  bottomActionSheet = null;
  bottomSheet = null;
  primaryModal = null;
  adRequest = null;
  snackbar = null;

  showAlert = (body, source, onModalHide, isConfetti) => {
    this.primaryModal &&
      this.primaryModal.show(body, source, onModalHide, isConfetti);
  };

  hideAlert = () => {
    this.primaryModal && this.primaryModal.close();
  };

  showBottomSheet = (component, props, component2) => {
    this.bottomSheet && this.bottomSheet.show(component, props, component2);
  };

  hideBottomSheet = () => {
    this.bottomSheet && this.bottomSheet.hide();
  };

  pushToScreen = (name, params = null, resultCallback = null) => {
    this.navigator &&
      this.navigator.dispatch(
        CommonActions.navigate({
          name,
          params: params ? { ...params, resultCallback } : { resultCallback },
        })
      );
  };

  setParams = (params = null) => {
    this.navigator && this.navigator.dispatch(CommonActions.setParams({ ...params }));
  }

  forcePushScreen = (name, params = null) => {
    this.navigator &&
      this.navigator.dispatch(
        StackActions.push(name, params));
  };

  resetToScreen = name => {
    const resetActions = {
      type: CommonActions.NAVIGATE,
      name,
      action: {
        type: StackActions.RESET,
        index: 0,
        actions: [{ type: CommonActions.NAVIGATE, name }],
      },
    };
    this.navigator && this.navigator.dispatch(resetActions);
  };

  reset = (name, params = null) => {
    this.navigator && this.navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name,
            params,
          },
        ],
      }));
  };

  replace = (name, params = null) => {
    this.navigator &&
      this.navigator.dispatch(
        StackActions.replace({
          name,
          params,
          //actions: [CommonActions.navigate({ name, params })],
        })
      );
  };

  logout = () => {
    this.navigator &&
      this.navigator.dispatch(
        StackActions.reset({
          index: 1,
          actions: [
            CommonActions.navigate({ name: ScreenID.GetStarted }),
          ],
        })
      );
  };

  goBack = (n = 1) => {
    this.navigator &&
      this.navigator.dispatch(StackActions.pop(n));
  };

  popToTop = () => {
    this.navigator && this.navigator.dispatch(StackActions.popToTop());
  };

  openDrawer = () => {
    this.navigator && this.navigator.dispatch(DrawerActions.openDrawer());
  };

  closeDrawer = () => {
    this.navigator && this.navigator.dispatch(DrawerActions.closeDrawer());
  };

  onStateChange = (state) => {
    const { name, params } = getCurrentRouteData(state);
    console.log("🚀 Router name: ", name);
    this.currentRouterName = name;
    this.currentRouteParams = params;
  };

  showLoading() {
    this.loading && this.loading.show();
  }

  hideLoading() {
    this.loading && this.loading.hide();
  }

  onToggleSnackBar() {
    this.snackbar && this.snackbar.onToggle();
  }

  onDismissSnackBar() {
    this.snackbar && this.snackbar.onDismiss();
  }

  showActionSheet = options => {
    this.bottomActionSheet && this.bottomActionSheet.show(options);
  };

  close = () => {
    this.navigator && this.navigator.dispatch(CommonActions.back());
  };

  setTopLevelNavigator = (navigatorRef) => {
    this.navigator = navigatorRef;
  }
}

export default new NavigationService();
