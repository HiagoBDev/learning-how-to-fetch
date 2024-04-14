import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <section className=" flex flex-col gap-2 bg-stone-900 p-12 rounded-lg drop-shadow-[4px_4px_16px_#1d1c1c]">
      <h2 className=" text-2xl">Search for a user</h2>
      <p className=" text-xl text-slate-400">
        Discover their best repositories
      </p>
      <div className=" flex gap-4">
        <input
          className=" focus:outline-none rounded pl-2 w-40 text-md text-slate-800 bg-slate-200"
          type="text"
          placeholder="write the username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className=" bg-stone-800 text-blue-400 p-[0.3rem] rounded hover:opacity-85"
          onClick={() => loadUser(userName)}
        >
          <BsSearch />
        </button>
      </div>
    </section>
  );
};
