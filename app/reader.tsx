import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ReaderScreen() {
  const { url } = useLocalSearchParams();

  if (!url) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <WebView
      source={{ uri: String(url) }}
      startInLoadingState
      style={styles.webview}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
