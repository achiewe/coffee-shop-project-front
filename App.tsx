import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './components/Login';
import MainPage from './components/MainPage/MainPage';

function App(): React.JSX.Element {
  // create state for show the login component
  const [showLogin, setShowLogin] = useState(true);

  // useEffect for set the screen login page at the beggining
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogin(false);
    }, 2000); // Change 3000 to the desired delay in milliseconds

    // Clear the timeout if the component is unmounted before the delay completes
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.mainDiv}>{showLogin ? <Login /> : <MainPage />}</View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});

export default App;
