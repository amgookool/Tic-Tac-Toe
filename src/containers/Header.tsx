import ReactLogo from "../assets/react-logo.svg";
const Header = () => {
  return (
    <section className="flex flex-row items-center justify-center pb-2 ">
      <span className="flex">
        <img
          className={`w-16 h-16 animate-spin-slow`}
          src={ReactLogo}
          alt="React Logo"
          // width={400}
          // height={400}
        />
        <div className="flex items-center">
          <h1 className="text-cyan-600 dark:text-cyan-400 text-4xl">
            React Tic-Tac-Toe
          </h1>
        </div>
      </span>
    </section>
  );
};

export default Header;
