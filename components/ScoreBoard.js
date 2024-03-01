import { useSelector } from "react-redux";

function ScoreBoard() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      className={`${
        darkMode ? "bg-sky-950" : " bg-green-400"
      } w-[400px] p-8 m-20 rounded-xl relative flex-col`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Top 5 Scores! </h2>
      <div></div>
    </div>
  );
}

export default ScoreBoard;
