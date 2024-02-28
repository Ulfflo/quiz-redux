import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/darkMode";

function DarkModeButton() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <button className={``} onClick={handleToggleDarkMode}>
      {darkMode ? "Switch to light mode" : "Switch to dark mode"}
    </button>
  );
}

export default DarkModeButton;
