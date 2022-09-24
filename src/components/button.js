export const BtnOutline = ({ children, px, py, text, colour }) => {
  return (
    <button
      className={`tracking-wide px-${px} py-${py} text-${text} rounded-lg shadow ease-in-out duration-150 hover:outline outline-offset-2 outline-yellow-500 shadow-orange-300 hover:scale-110 active:scale-95 bg-transparent text-white hover:bg-gradient-to-br from-${colour}-700 via-${colour}-400 to-${colour}-200`}
    >
      {children}
    </button>
  );
};
