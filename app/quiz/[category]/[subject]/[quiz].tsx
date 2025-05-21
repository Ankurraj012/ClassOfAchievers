// app/quiz/[category]/[subject]/[quiz].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

// 🔁 Replace this with real dynamic data later
const sampleQuestions = [
  {
    question: 'Which gas is essential for us to breathe?',
    options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Helium'],
    answer: 'Oxygen',
  },
  {
    question: 'What is the boiling point of water?',
    options: ['50°C', '90°C', '100°C', '150°C'],
    answer: '100°C',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars',
  },
];

export default function QuizAttempt() {
  const { category, subject, quiz } = useLocalSearchParams();
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const current = sampleQuestions[currentIndex];

  const handleOptionSelect = (option: string) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === current.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < sampleQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Title>✅ Quiz Completed!</Title>
        <Paragraph>
          Score: {score} / {sampleQuestions.length}
        </Paragraph>
        <Button onPress={handleRestart} mode="contained" style={{ marginTop: 20 }}>
          Try Again
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>{`Q${currentIndex + 1}. ${current.question}`}</Title>
          {current.options.map((option) => (
            <Button
              key={option}
              mode={selected === option ? (option === current.answer ? 'contained' : 'outlined') : 'outlined'}
              onPress={() => handleOptionSelect(option)}
              style={{ marginVertical: 4 }}
              disabled={selected !== null}
            >
              {option}
            </Button>
          ))}
          {selected && (
            <Paragraph style={{ marginTop: 10 }}>
              {selected === current.answer
                ? '✅ Correct!'
                : `❌ Wrong. Correct answer: ${current.answer}`}
            </Paragraph>
          )}
        </Card.Content>
      </Card>
      {selected && (
        <Button mode="contained" onPress={handleNext} style={{ marginTop: 20 }}>
          Next
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
});
