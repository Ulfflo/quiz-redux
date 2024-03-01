import { useSelector } from "react-redux";
import playerScore from "@/data/playerScore";

function ScoreBoard() {
  const darkMode = useSelector((state) => state.darkMode);

  const sortedScores = playerScore.slice().sort((a, b) => b.score - a.score);
  return (
    <div
      className={`${
        darkMode ? "bg-sky-950" : " bg-green-400"
      } w-[400px] p-8 m-20 rounded-xl relative flex-col`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Top 5 Scores! </h2>
      <ul>
        {sortedScores &&
          sortedScores.map((player, index) => (
            <li key={index}>
              {player.name}: {player.score}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ScoreBoard;
