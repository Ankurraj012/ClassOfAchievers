// app/quiz/[category]/index.tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const subjectsMap: Record<string, string[]> = {
  'class-6': ['Maths', 'Science'],
  'class-7': ['Maths', 'Science'],
  'class-8': ['Maths', 'Science'],
  'class-9': ['Maths', 'Science'],
  'class-10': ['Science', 'Maths', 'English', 'Social Science', 'Hindi'],
  'class-11': ['Physics', 'Chemistry', 'Maths', 'Biology'],
  'class-12': ['Physics', 'Chemistry', 'Maths', 'Biology', 'English'],
  jee: ['Physics', 'Chemistry', 'Maths'],
  neet: ['Physics', 'Chemistry', 'Biology'],
  cuet: ['Maths', 'General Knowledge', 'Logical Reasoning', 'English'],
};

export default function QuizSubjectSelector() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const slug = String(category).toLowerCase();
  const subjects = subjectsMap[slug] || [];

  const handleSubjectSelect = (subject: string) => {
    const subjectSlug = subject.toLowerCase().replace(/\s+/g, '-');
    router.push(`/quiz/${slug}/${subjectSlug}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>📚 Select Subject for {slug.toUpperCase()}</Title>

      {subjects.length === 0 ? (
        <Title>No subjects found.</Title>
      ) : (
        subjects.map((subject) => (
          <Button
            key={subject}
            mode="outlined"
            style={styles.button}
            onPress={() => handleSubjectSelect(subject)}
          >
            {subject}
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
