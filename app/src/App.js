import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, View, RefreshControl } from 'react-native';
import Navbar from "./components/Navbar";
import PortfolioListScreen from "./containers/portfolio-list";
import { Provider as PortfolioProvider, Context as PortfolioContext } from './context/portfolio';

export default function App() {


  return (
    <PortfolioProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.safeArea}>
          <Navbar />
          <PortfolioListScreen />
        </SafeAreaView>
      </View>
    </PortfolioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fa',
  },
  screenContainer: {
    flex: 1,
    padding: 15,
  },
  safeArea: {
    flex: 1,
  },
});
