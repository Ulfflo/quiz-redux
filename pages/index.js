import Layout from "@/components/Layout";
import { StartQuizButton } from "@/components/Button";
export default function Home() {
  return (
    <main>
      <Layout>
        <div>
          <StartQuizButton>Start Quiz</StartQuizButton>{" "}
        </div>
      </Layout>
    </main>
  );
}
