import { useState } from "react"; 
import Navbar from "./Navbar";

function Popup() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* <Navbar /> */}
      {visible && (
        <>
          <div className="h-screen w-screen absolute top-0 bg-black/20 flex justify-center items-center z-50">
            <div className="h-[40%] w-[30%] bg-white z-50 flex justify-center flex-col items-center border-2 rounded-lg">
              <div className="w-full h-[20%] flex flex-col justify-center items-center">
                Are you Mad?
              </div>
              <div className="w-full h-[20%] flex flex-row justify-center items-center">
                
                <button
                  onClick={() => setVisible(false)} 
                  className="bg-red-600 p-2 m-2 text-white rounded-md w-20"
                >
                  No
                </button>
                <button
                  onClick={() => setVisible(false)}
                  className="bg-green-600 p-2 m-2 text-white rounded-md w-20"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <button
          onClick={() => setVisible(true)} // Reopen the popup when clicked
          className="bg-yellow-500 p-3 text-white w-32 rounded-md"
        >
          Sudo rm
        </button>
      </div>
    </>
  );
}

export default Popup;
