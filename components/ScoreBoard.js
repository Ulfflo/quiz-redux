import { useSelector } from "react-redux";
import { selectPlayerScores } from "@/redux/addToScoreboard";

function ScoreBoard() {
  const darkMode = useSelector((state) => state.darkMode);
  const playerScores = useSelector(selectPlayerScores);

  const sortedScores = Array.isArray(playerScores)
    ? [...playerScores].sort((a, b) => b.score - a.score)
    : [];

  const topFiveScores = sortedScores.slice(0, 5);
  return (
    <div
      className={`${
        darkMode ? "bg-sky-950" : " bg-green-400"
      } w-[400px] p-8 m-20 rounded-xl relative flex-col`}
    >
      <h2 className="text-2xl font-bold mb-10 text-center">Top 5 Scores! </h2>
      <ul className="list-none">
        {topFiveScores &&
          topFiveScores.map((player, index) => (
            <li key={index} className="m-5 text-xl">
              <span>{index + 1}. </span>
              {player.name}: {player.score} <span>p</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ScoreBoard;
