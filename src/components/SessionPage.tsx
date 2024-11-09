import { useNavigate } from "react-router-dom";


export default function SessionPage({nameState, setNameState}: {nameState: string, setNameState: (a: string)=>void}) {
  const navigate = useNavigate();
  return (
    <div className="flex align-center justify-center items-center h-full">
      <div className="card bg-base-200  w-full h-fit md:w-[600px] mt-24 md:shadow-xl">
        <div className="card-body items-center">
          <h1 className="card-title w-full justify-center">Start a session</h1>
          <figure>
            <img src="https://media.discordapp.net/attachments/1304748717076774912/1304857526164131961/Untitled.png?ex=6730eac5&is=672f9945&hm=2992ee4439321828261ed3706fc179d7772836c262020fdd1711e418f320bd0f&=&format=webp&quality=lossless"
            />
          </figure>
          <label className="input input-bordered md:w-[50%] flex items-center gap-2">
            Name
            <input type="text" className="grow" placeholder="Session name" onChange={e => setNameState(e.target.value)}/>
          </label>
          <div className="card-actions justify-end">
            <button 
              className="btn btn-primary w-full"
              onClick={() => {if (nameState != "") navigate('/restaurants')}}
            >Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}