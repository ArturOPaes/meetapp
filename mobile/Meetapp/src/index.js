import React from "react";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import FlashMessage from "react-native-flash-message";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import "./config/ReactotronConfig";

import { store, persistor } from "./store";

import App from "./App";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "RCTRootView cancelTouches" // https://github.com/kmagiera/react-native-gesture-handler/issues/746
]);

export default function Index() {
  Icon.loadFont();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#22202c" />
        <App />
        <FlashMessage position="bottom" />
      </PersistGate>
    </Provider>
  );
}
