import ScoreBoard from "@/components/ScoreBoard";

export default function topScores() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="m-10 text-center">Leaderboard Legends</h1>
        <p className="text-center w-2/3">
          Enter the battleground of champions. Crush your opponents, dominate
          the scores, and carve your name into the halls of glory on the
          Leaderboard of Legends
        </p>
        <ScoreBoard />
      </div>
    </>
  );
}
