import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { SlOptions } from "react-icons/sl";

import { IoCloseSharp } from "react-icons/io5";
import trello from "../assets/trello.svg";
const AddBtn = () => {

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
          <button type="button" className="hover:bg-neutral-300 p-1 rounded">
            <IoCloseSharp size={20} />
          </button>
        </div>
      </form>
    </>
  );
};
const cols = 30;
const Cards = () => {
    const [adding, setAdding] = useState(false);  
  return (
    <div className="flex gap-3">
      {/* tareas */}
      <div>
        <div className="bg-[#f1f2f4] rounded-2xl w-[280px] p-4 text-[#2d3440] shadow">
          <div className="card-header py-1">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Tareas</h2>
              <span className="hover:bg-neutral-300 w-[30px] rounded flex items-center justify-center h-[30px]">
                <SlOptions />
              </span>
            </div>
          </div>
          <div className="card-body"></div>
          {adding ? (
            <>
              <div className="card-footer flex justify-between">
                <AddBtn></AddBtn>
              </div>
            </>
          ) : (
            <>
              <div className="card-footer flex justify-between ">
                <div className="hover:bg-neutral-300 flex-1 rounded p-2">
                  <button className="flex items-center gap-2">
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
        <div className="bg-[#f1f2f4] rounded-2xl  w-[280px] p-4 text-[#2d3440] shadow">
          <div className="card-header py-1">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">En proceso</h2>
              <span className="hover:bg-neutral-300 w-[30px] rounded flex items-center justify-center h-[30px]">
                <SlOptions />
              </span>
            </div>
          </div>
          <div className="card-body"></div>
          {adding ? (
            <>
              <div className="card-footer flex justify-between">
                <AddBtn></AddBtn>
              </div>
            </>
          ) : (
            <>
              <div className="card-footer flex justify-between ">
                <div className="hover:bg-neutral-300 flex-1 rounded p-2">
                  <button className="flex items-center gap-2">
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
        <div className="bg-[#f1f2f4] rounded-2xl  w-[280px] p-4 text-[#2d3440] shadow">
          <div className="card-header py-1">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Hechas</h2>
              <span className="hover:bg-neutral-300 w-[30px] rounded flex items-center justify-center h-[30px]">
                <SlOptions />
              </span>
            </div>
          </div>
          <div className="card-body"></div>
          {adding ? (
            <>
              <div className="card-footer flex justify-between">
                <AddBtn></AddBtn>
              </div>
            </>
          ) : (
            <>
              <div className="card-footer flex justify-between ">
                <div className="hover:bg-neutral-300 flex-1 rounded p-2">
                  <button className="flex items-center gap-2">
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
