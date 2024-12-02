import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  StatusBar,
} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => setSplashVisible(false), 3000);
    return () => clearTimeout(splashTimeout);
  }, []);

  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <Image
          source={{
            uri: 'https://xpafy.com/static/media/logo.7b260bbbc2263725a4b1.png',
          }}
          style={styles.splashLogo}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* WebView ekranında durum çubuğu rengini değiştirme */}
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
      <WebView
        source={{uri: 'https://www.xPafy.com'}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  splashLogo: {
    width: 200,
    height: 220,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default App;
