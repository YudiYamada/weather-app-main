import IconError from "../assets/icon-error.svg";
import IconRetry from "../assets/icon-retry.svg";

const Error = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={IconError} alt="Icon of Error" className="w-10 h-10" />
      <h1 className="text-5xl">Something went wrong</h1>
      <p>
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button className="flex gap-3 bg-neutral-400 rounded-xl p-3 hover:cursor-pointer">
        <img src={IconRetry} alt="Icon of Retry" />
        <span>Retry</span>
      </button>
    </div>
  );
};

export default Error;
