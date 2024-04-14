import { BsPinMap } from "react-icons/bs";
import { UserProps } from "../../types/user";
import { Link } from "react-router-dom";

export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
  bio,
}: UserProps) => {
  return (
    <div className="flex items-center flex-col gap-3 pt-3 bg-stone-900 mt-6 rounded-lg drop-shadow-[4px_4px_16px_#1d1c1c] mb-10 p-6">
      <p className=" text-xl">{login}</p>
      <img
        className=" h-52 w-52 rounded-lg"
        src={avatar_url}
        alt={login + " picture"}
      />
      <p className=" text-lg">{bio}</p>

      {location && (
        <div className=" flex gap-2 text-xl">
          <p className=" text-emerald-300">{location}</p>
          <span className=" text-emerald-300">
            <BsPinMap />
          </span>
        </div>
      )}
      <div className=" text-xl flex my-2">
        <p className=" border-r-[1px] border-slate-500 pr-5">
          Followers: <span className=" text-emerald-300">{followers}</span>
        </p>
        
        <p className=" pl-5">
          Following: <span className=" text-emerald-300">{following}</span>
        </p>
      </div>
      <div className=" text-xl hover:opacity-90 bg-emerald-500 text-slate-900 p-2 rounded-md">
        <Link to={`https://github.com//${login}`}>See on GitHub</Link>
      </div>
    </div>
  );
};
