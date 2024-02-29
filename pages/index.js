import Layout from "@/components/Layout";
import { StartQuizButton } from "@/components/Button";
export default function Home() {
  return (
    <main>
      <Layout>
        <div>
          <StartQuizButton>Let's Quiz</StartQuizButton>{" "}
        </div>
      </Layout>
    </main>
  );
}
