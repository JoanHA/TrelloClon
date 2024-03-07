import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { SlOptions } from "react-icons/sl";

import { IoCloseSharp } from "react-icons/io5";
import trello from "../assets/trello.svg";
import { useContexto } from "../context/ContextProvider";
const AddBtn = ({ callback }: { callback: CallableFunction }) => {
  return (
    <>
      <form action="">
        <div>
          <textarea
            cols={cols}
            className=" appearance-none  bg-white rounded-lg h-auto m-0 overflow-hidden break-words overflow-y-auto  py-[8px] px-[12px] min-h-[36px] max-h-[160px] focus:outline-none focus:border-indigo-500  "
            style={{
              border: "0",
              boxShadow: " 0px 1px 1px #091e424f",
            }}
            placeholder="Añada un titulo para esta tarjeta..."
          ></textarea>
        </div>

        <div className="flex gap-5 py-1">
          <button className="bg-[#0055CC] hover:bg-[#0C66E4] text-white px-2 py-1 rounded font-bold">
            Añadir tarjeta
          </button>
          <button
            type="button"
            className="hover:bg-neutral-300 p-1 rounded"
            onClick={() => {
              callback(false);
            }}
          >
            <IoCloseSharp size={20} />
          </button>
        </div>
      </form>
    </>
  );
};
const cols = 30;
const Cards = () => {
  const [addingTask, setAddingTask] = useState(false);
  const [addingProcess, setAddingProcess] = useState(false);
  const [addingDone, setAddingDone] = useState(false);
  const { tasks } = useContexto();
  const ondrag = (e:any)=>{
    console.log(e)

  }
  return (
    <div className="flex gap-3">
      {/* tareas */}
      <div>
        <div className="bg-[#f1f2f4] rounded-2xl w-[280px]  p-2 text-[#2d3440] shadow">
          <div className="card-header py-1">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Tareas</h2>
              <span className="hover:bg-neutral-300 w-[30px]  rounded-xl flex items-center justify-center h-[30px]">
                <SlOptions />
              </span>
            </div>
          </div>
          <div className="card-body">
            <div>
              {tasks?.map((task) => (
                <div
                  className="bg-[#ffff] rounded-xl shadow-md p-2"
                  draggable
                  style={{ cursor: "pointer" }}
                >
                  <div>{task}</div>
                </div>
              ))}
            </div>
          </div>
          {addingTask ? (
            <>
              <div className="card-footer flex justify-between">
                <AddBtn callback={setAddingTask}></AddBtn>
              </div>
            </>
          ) : (
            <>
              <div className="card-footer flex justify-between ">
                <div className="hover:bg-neutral-300 flex-1 rounded p-2">
                  <button
                    className="flex items-center gap-2"
                    onClick={() => {
                      setAddingTask(true);
                    }}
                  >
                    <GoPlus size={20} /> Añada una tarjeta
                  </button>
                </div>
                <div className="w-[32px] hover:bg-neutral-300 flex items-center justify-center">
                  <img src={trello} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/*  Proceso*/}
      <div>
        <div className="bg-[#f1f2f4] rounded-2xl  w-[280px] p-2 text-[#2d3440] shadow">
          <div className="card-header py-1">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">En proceso</h2>
              <span className="hover:bg-neutral-300 w-[30px] rounded flex items-center justify-center h-[30px]">
                <SlOptions />
              </span>
            </div>
          </div>
          <div className="card-body"></div>
          {addingProcess ? (
            <>
              <div className="card-footer flex justify-between">
                <AddBtn callback={setAddingProcess}></AddBtn>
              </div>
            </>
          ) : (
            <>
              <div className="card-footer flex justify-between ">
                <div className="hover:bg-neutral-300 flex-1  rounded-xl p-2">
                  <button
                    className="flex items-center gap-2"
                    onClick={() => {
                      setAddingProcess(true);
                    }}
                  >
                    <GoPlus size={20} /> Añada una tarjeta
                  </button>
                </div>
                <div className="w-[32px] hover:bg-neutral-300 flex items-center justify-center">
                  <img src={trello} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Hecho */}
      <div>
        <div className="bg-[#f1f2f4] rounded-2xl  w-[280px] p-2 text-[#2d3440] shadow">
          <div className="card-header py-1">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Hechas</h2>
              <span className="hover:bg-neutral-300 w-[30px] rounded flex items-center justify-center h-[30px]">
                <SlOptions />
              </span>
            </div>
          </div>
          <div className="card-body"></div>
          {addingDone ? (
            <>
              <div className="card-footer flex justify-between">
                <AddBtn callback={setAddingDone}></AddBtn>
              </div>
            </>
          ) : (
            <>
              <div className="card-footer flex justify-between ">
                <div className="hover:bg-neutral-300  flex-1 rounded-xl p-2">
                  <button
                    className="flex items-center gap-2"
                    onClick={() => {
                      setAddingDone(true);
                    }}
                  >
                    <GoPlus size={20} /> Añada una tarjeta
                  </button>
                </div>
                <div className="w-[32px] hover:bg-neutral-300 flex items-center justify-center">
                  <img src={trello} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
