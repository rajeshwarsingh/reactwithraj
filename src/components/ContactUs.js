import { useEffect } from "react";

export default () => {
  return (
    <div>
      <h1 className="m-4 p-4 font-bold text-lg"> This is contact us page</h1>
      <form>
        <input type="text" placeholder="Name" className="m-2 p-2 border border-black" />
        <input type="text" placeholder="Message" className="m-2 p-2 border border-black" />
        <button className="p-2 m-2 border border-black bg-gray-400 rounded-lg">submit</button>
      </form>
    </div>
  );
};
