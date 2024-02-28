import Layout from "@/components/Layout";
import quizData from "@/data/quizData";

// {
//     id: 1,
//     question: "What is the capital of France?",
//     options: [
//       { answer: "London", isCorrect: false },
//       { answer: "Berlin", isCorrect: false },
//       { answer: "Paris", isCorrect: true },
//       { answer: "Rome", isCorrect: false },
//     ],
//   },

export default function Admin() {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-2xl font-bold mb-4">Admin page</h1>
          <div className="flex-col">
            {quizData.map((item, index) => (
              <div
                className="bg-green-400 w-[400px] p-8 mb-8 rounded-xl relative"
                key={index}
                id={item.id}
              >
                <p className="mb-2">
                  Question {item.id}: {item.question}
                </p>
                <ul className="list-none">
                  {item.options.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      className={option.isCorrect ? "font-bold" : ""}
                    >
                      {option.answer} {option.isCorrect ? "(correct)" : ""}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-4 right-4">
                  <button className="whitespace-nowrap bg-transparent border-solid border-green-600 text-green-700 rounded-lg px-4 py-1 active:opacity-50">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
