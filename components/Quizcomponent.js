const QuizComponent = () => {
    return (
      <div className="max-w-md mx-auto bg-green-400 rounded-lg overflow-hidden shadow-lg">
        <div className="px-10 py-8">
          <div className="font-bold text-2xl mb-4">Question 1</div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded relative top-[-4px]">
              Option 1
            </button>
            <button className="flex items-center bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded relative top-[-4px]">
              Option 2
            </button>
            <button className="flex items-center bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded relative top-[-4px]">
              Option 3
            </button>
            <button className="flex items-center bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded relative top-[-4px]">
              Option 4
            </button>
          </div>
        </div>
        <div className="px-10 py-6 bg-green-400">
          <button className="flex align-middle bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default QuizComponent;
  
  