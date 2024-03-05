import React, { ReactNode } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { SiTrello } from "react-icons/si";
import { BsFillBellFill } from "react-icons/bs";
import {
  MdOutlineHelpOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { TbBellRinging2 } from "react-icons/tb";

import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";
import { MdKeyboardArrowDown, MdOutlineWorkspacePremium } from "react-icons/md";
import { TfiTrello } from "react-icons/tfi";

import { IoIosSettings } from "react-icons/io";
import { FaTableList, FaRegUser } from "react-icons/fa6";

interface Props {
  children: ReactNode;
}
//Estilos
const style = {
  background:
    "linear-gradient(97.78deg, var(--ds-background-accent-purple-bolder, #4423a3) 17.5%, var(--ds-background-accent-magenta-subtle, #aa63cb) 113.39%)",
  margin: 0,
};
const borders = {
  borderTop: "1px solid var(--dynamic-text-transparent, #DFE1E6)",
  borderBottom: "1px solid var(--dynamic-text-transparent, #DFE1E6)",
};
 const openSide = ()=>{
  document.getElementById("sidebar")?.classList.remove("Close");
  document
    .getElementById("links-container")
    ?.classList.remove("inactive");
    document
    .getElementById("openBtn")
    ?.classList.add("inactive");
 }
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col" id="layoutRoot">
      <header
        className="w-full h-[51px] text-gray-100 flex  "
        style={{
          backgroundColor: "hsl(69, 28.6%, 8.7%)",
          borderBottom: "1px solid var(--dynamic-text-transparent, #DFE1E6)",
        }}
      >
        <nav className="flex flex-row justify-between px-3 items-center self-center w-full">
          <ul className="flex flex-row items-center gap-3 ">
            <li className="self-center  hover:bg-neutral-700 p-1 rounded">
              <CgMenuGridR size={22} />
            </li>
            <li className="self-center flex gap-1  items-center font-bold  hover:bg-neutral-700 p-1 rounded">
              <SiTrello size={19} />{" "}
              <span style={{ fontSize: "22px" }}>Trello</span>
            </li>
            <li>
              <button className="flex flex-row items-center font-bold gap-1 hover:bg-neutral-700 p-1 rounded">
                Espacios de trabajo <MdKeyboardArrowDown size={25} />
              </button>
            </li>
            <li>
              <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded ">
                Reciente <MdKeyboardArrowDown size={25} />
              </button>
            </li>
            <li>
              <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded">
                Marcado <MdKeyboardArrowDown size={25} />
              </button>
            </li>
            <li>
              <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded">
                Plantilla <MdKeyboardArrowDown size={25} />
              </button>
            </li>
            <li>
              <button className="py-2 px-4 bg-[#6c757d] rounded font-bold hover:bg-[#5c636a]">
                Crear
              </button>
            </li>
          </ul>
          <ul className="flex flex-row items-center gap-3">
            <li>
              <input
                type="search"
                className="rounded text-left py-1 px-2  bg-slate-600 text-white"
                placeholder="Buscar"
              />
            </li>
            <li>
              <TbBellRinging2  size={20} />
            </li>
            <li>
              <MdOutlineHelpOutline size={20} />
            </li>
            <li>
              <FaUserCircle size={25} />
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-[92vh] w-full flex flex-row top-[0] bottom-[0] left-[0] ">
        <div
          className="grow-0 bg-[#2a2d19] h-full w-[260px] flex flex-col px-1   "
          id="sidebar"
          style={{
            borderRight: "1px solid var(--dynamic-text-transparent, #DFE1E6)",
          }}
        >
          <div
            className="openBtn inactive hover:bg-[#2a2d19]"
            id="openBtn"
            onClick={openSide}
          >
            <MdKeyboardArrowRight fill="#ffff" size={25} />
          </div>
          <div
            className="grow-0  h-full  flex flex-col px-1 w-full  "
            id="links-container"
          >
            <div
              className="flex items-center gap-1 p-1 py-2 border-solid  "
              style={borders}
            >
              <div>
                <BiSolidUserRectangle fill="#ffff" size={40} />
              </div>
              <div className="flex flex-col text-white">
                <p className="font-bold ">Espacio de trabajo de Trello</p>
                <p className="">Gratuito</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    document.getElementById("sidebar")?.classList.add("Close");
                    document
                      .getElementById("links-container")
                      ?.classList.add("inactive");
                      document
                .getElementById("openBtn")
                ?.classList.remove("inactive");
                  }}
                >
                  <MdKeyboardArrowLeft
                    fill="#ffff"
                    size={30}
                    className="hover:bg-[#6f747d24]"
                  />
                </button>
              </div>
            </div>
            <div className="flex w-full items-start justify-start  text-white flex-1">
              <div className="w-full py-4 gap-1">
                <div>
                  <ul className="flex flex-col">
                    <li>
                      <button className="flex  gap-4 items-center  hover:bg-[#6f747d24] w-full text-start py-2 px-3">
                        <TfiTrello size={13} /> Tableros
                      </button>
                    </li>
                    <li>
                      <button className="flex  gap-4 items-center hover:bg-[#6f747d24] w-full text-start py-2 px-3">
                        <FaRegUser size={14} /> Miembros
                      </button>
                    </li>
                    <li>
                      <button className="hover:bg-[#6f747d24] flex  gap-4 items-center w-full text-start py-2 px-3">
                        <IoIosSettings size={14} /> Ajustes del Espacio de
                        trabajo
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="my-3">
                  <label className="px-3 font-bold text-gray-100">
                    Vistas del Espacio de trabajo
                  </label>
                  <ul>
                    <li>
                      <button className="flex  gap-4 items-center hover:bg-[#6f747d24] w-full text-start py-3 px-3">
                        <FaTableList size={12} />
                        Tabla
                      </button>
                    </li>
                    <li>
                      <button className="flex  gap-4 items-center hover:bg-[#6f747d24] w-full text-start py-3 px-3">
                        <FaCalendarAlt size={12} />
                        Calendario
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <label htmlFor="" className="px-3 font-bold text-gray-100">
                    Sus tableros
                  </label>
                  <ul>
                    <li>
                      <button className="hover:bg-[#6f747d24] w-full text-start py-2 px-3">
                        {" "}
                        New
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="p-3 w-full" style={borders}>
                <button
                  className="w-full text-center flex items-center gap-2 justify-center p-2 rounded text-white hover:brightness-75"
                  style={style}
                >
                  <MdOutlineWorkspacePremium size={18} /> Pruebe premium gratis
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grow ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
