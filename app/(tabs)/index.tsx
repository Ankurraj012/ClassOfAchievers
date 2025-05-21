import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { Button, Title } from 'react-native-paper';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Title style={{ textAlign: 'center', marginBottom: 20 }}>🎓 Class Of Achievers</Title>

      <Button icon="book" mode="contained" style={{ marginVertical: 6 }} onPress={() => router.push('/subjects')}>
        Choose Class / Exam
      </Button>

      <Button icon="brain" mode="contained" style={{ marginVertical: 6 }} onPress={() => router.push('/quiz')}>
        Practice Quiz
      </Button>

      <Button icon="video" mode="contained" style={{ marginVertical: 6 }} onPress={() => router.push('/videos')}>
        Watch Learning Videos
      </Button>

      <Button icon="file-document" mode="contained" style={{ marginVertical: 6 }} onPress={() => router.push('/pdfs')}>
        Download Notes / PDFs
      </Button>

      <Button icon="fire" mode="contained" style={{ marginVertical: 6 }} onPress={() => router.push('/challenge')}>
        Daily Challenge
      </Button>

      <Button icon="gift" mode="contained" style={{ marginVertical: 6 }} onPress={() => router.push('/rewards')}>
        Rewards & Unlocks
      </Button>

      <Button icon="cog" mode="contained" style={{ marginVertical: 6 }} onPress={() => router.push('/settings')}>
        Settings & Feedback
      </Button>
    </ScrollView>
  );
}
