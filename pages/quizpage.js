import Quizcomponent from "@/components/Quizcomponent";

const Quizpage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <h1 className="mb-8">Question 1</h1>
        <div>
          <Quizcomponent />
        </div>
      </div>
    </>
  );
}

export default Quizpage;
