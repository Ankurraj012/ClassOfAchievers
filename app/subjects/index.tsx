// app/subjects/index.tsx
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Divider, Title } from 'react-native-paper';

const classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
const exams = ['JEE', 'NEET', 'CUET'];

export default function SubjectsScreen() {
  const router = useRouter();

  const handleSelect = (value: string) => {
    const slug = value.toLowerCase().replace(/\s+/g, '-'); // "Class 10" → "class-10"
    router.push(`/subjects/${slug}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>🎯 Choose Your Class or Exam</Title>

      <Divider style={styles.divider} />
      <Title style={styles.subtitle}>K–12 Classes</Title>
      {classes.map((item) => (
        <Button
          key={item}
          mode="outlined"
          style={styles.button}
          onPress={() => handleSelect(item)}
        >
          {item}
        </Button>
      ))}

      <Divider style={styles.divider} />
      <Title style={styles.subtitle}>Competitive Exams</Title>
      {exams.map((item) => (
        <Button
          key={item}
          mode="outlined"
          style={styles.button}
          onPress={() => handleSelect(item)}
        >
          {item}
        </Button>
      ))}
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
  subtitle: {
    marginTop: 10,
    fontSize: 18,
  },
  divider: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 4,
  },
});
