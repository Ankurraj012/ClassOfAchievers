// app/qa/[category]/[subject].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';


// ✅ Sample chapter links — replace with your real Google Doc URLs
const chapterLinks: Record<string, string[]> = {
  'class-10-science': [
    'https://www.google.com/',
    'https://docs.google.com/document/d/CHAPTER_2_LINK',
    'https://docs.google.com/document/d/CHAPTER_3_LINK',
    'https://docs.google.com/document/d/CHAPTER_4_LINK',
    // Add more up to Chapter 15
  ],
  // Add more subjects here later
};

export default function SubjectChapters() {
  const { category, subject } = useLocalSearchParams();
  const router = useRouter();

  const key = `${category}-${subject}`.toLowerCase();
  const links = chapterLinks[key] || [];

  const openPDF = async (url: string) => {
  try {
    await WebBrowser.openBrowserAsync(url); // ✅ now you're using it
  } catch (error) {
    console.error('❌ Failed to open PDF:', error);
  }
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>
        📘 {String(subject).toUpperCase()} - Chapters ({String(category).toUpperCase()})
      </Title>

      {links.length === 0 ? (
        <Title>No chapters found for this subject yet.</Title>
      ) : (
        links.map((url, index) => (
          <Button
            key={index}
            mode="outlined"
            style={styles.button}
            onPress={() => router.push(`/reader?url=${encodeURIComponent(url)}`)}

          >
            Chapter {index + 1}
          </Button>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    marginVertical: 6,
  },
});
