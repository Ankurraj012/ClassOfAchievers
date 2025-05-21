// app/subjects/[category].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const subjectsMap: Record<string, string[]> = {
  'class-6': ['Science', 'Maths', 'English', 'Social Science', 'Hindi'],
  'class-7': ['Science', 'Maths', 'English', 'Social Science', 'Hindi'],
  'class-8': ['Science', 'Maths', 'English', 'Social Science', 'Hindi'],
  'class-9': ['Science', 'Maths', 'English', 'Social Science', 'Hindi'],
  'class-10': ['Science', 'Maths', 'English', 'Social Science', 'Hindi'],
  'class-11': ['Physics', 'Chemistry', 'Maths', 'Biology', 'English'],
  'class-12': ['Physics', 'Chemistry', 'Maths', 'Biology', 'English'],
  jee: ['Physics', 'Chemistry', 'Maths'],
  neet: ['Physics', 'Chemistry', 'Biology'],
  cuet: ['Maths', 'General Knowledge', 'Logical Reasoning', 'English'],
  // Add more as needed
};

export default function CategorySubjects() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const slug = String(category).toLowerCase();
  const subjects = subjectsMap[slug] || [];

  const handleSubjectSelect = (subject: string) => {
    const subjectSlug = subject.toLowerCase().replace(/\s+/g, '-');
    router.push(`/qa/${slug}/${subjectSlug}`); // ✅ Navigate to Q&A screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>📚 Subjects for {String(category).toUpperCase()}</Title>

      {subjects.length === 0 && <Title>No subjects found for this category.</Title>}

      {subjects.map((subject) => (
        <Button
          key={subject}
          mode="outlined"
          style={styles.button}
          onPress={() => handleSubjectSelect(subject)}
        >
          {subject}
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
    marginBottom: 10,
  },
  button: {
    marginVertical: 6,
  },
});
