// app/(tabs)/explore.tsx
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>🔍 Explore Learning Resources</Title>

      <Card style={styles.card}>
        <Card.Title title="Featured Videos" />
        <Card.Content>
          <Paragraph>Watch our curated YouTube lectures by toppers & experts.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/videos')}>Go to Videos</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Practice Quizzes" />
        <Card.Content>
          <Paragraph>Test your knowledge with our daily practice sets.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/quiz')}>Start Quiz</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    marginVertical: 8,
  },
});
