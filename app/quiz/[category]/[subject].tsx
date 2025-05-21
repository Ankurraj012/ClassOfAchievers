// app/quiz/[category]/[subject].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

export default function QuizListScreen() {
  const { category, subject } = useLocalSearchParams();
  const router = useRouter();

  const quizCount = 5; // You can increase to 10 or 20 later

  const handleQuizSelect = (quizNumber: number) => {
    // 🔁 Later we'll create this screen with real questions
    router.push(`/quiz/${category}/${subject}/quiz-${quizNumber}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>
        📝 {String(subject).toUpperCase()} Quizzes ({String(category).toUpperCase()})
      </Title>

      {Array.from({ length: quizCount }, (_, i) => (
        <Button
          key={i}
          mode="outlined"
          style={styles.button}
          onPress={() => handleQuizSelect(i + 1)}
        >
          Quiz {i + 1}
        </Button>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    marginVertical: 4,
  },
});
