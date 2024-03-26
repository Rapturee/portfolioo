import { useTheme } from "./ThemeContext";

function Theme_Toggler() {
  const { state, dispatch } = useTheme();

  function toggleTheme() {
    dispatch({
      type: "TOGGLE_THEME",
      theme: state.theme === "light" ? "dark" : "light",
    });
  }

  return (
    <div className="fixed top-4 right-4">
      <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
        {state.theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
export default Theme_Toggler;
