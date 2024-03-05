import { CiStar } from "react-icons/ci";
import { BsPeople, BsLightningFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdAccountCircle } from "react-icons/md";
import { GoRocket, GoFilter } from "react-icons/go";
import { HiOutlineUserAdd } from "react-icons/hi";
import { SlOptions } from "react-icons/sl";
import Cards from "./Cards";
const size = 16;
const Board = () => {
  return (
    <div>
      {/* Mini header */}
      <div>
        <div className="w-full">
          <nav className="flex flex-row w-full justify-between items-center h-[56px] backdrop-filter backdrop-blur-sm bg-[#0000004d] text-white px-6 ">
            <ul className="flex flex-row  items-center gap-4">
              <li>
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded text-xl">
                  New
                </button>
              </li>
              <li>
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded ">
                  <CiStar size={20} />
                </button>
              </li>
              <li>
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded ">
                  <BsPeople size={18} />
                </button>
              </li>
              <li className="flex flex-row gap-2">
                <button className="flex flex-row items-center font-bold gap-1 bg-[#DFE1E6] text-neutral-700 hover:brightness-125 px-3 py-1 rounded ">
                  <svg
                    width="20"
                    height="20"
                    role="presentation"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Tablero
                </button>
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded ">
                  <MdKeyboardArrowDown size={25} />
                </button>
              </li>
              <li></li>
            </ul>
            <ul className="flex flex-row gap-2">
              <li className="px-2">
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded w-[32px} h-[32px]">
                  <GoRocket size={size} />
                </button>
              </li>
              <li className="px-2">
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded w-[32px} h-[32px] ">
                  <BsLightningFill size={size} />
                </button>
              </li>
              <li>
                <button className="flex flex-row items-center font-bold gap-3 hover:bg-neutral-700 p-1 rounded w-[32px} h-[32px] ">
                  <GoFilter size={size} /> Filtros
                </button>
              </li>

              <li className="flex">
                <span id="divider"></span>
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded w-[32px} h-[32px] ">
                  <MdAccountCircle size={28} />
                </button>
              </li>
              <li className="bg-[#DFE1E6] rounded  py-0 px-2 flex hover:brightness-125">
                <button className="flex flex-row items-center font-bold gap-1   p-1 rounded text-[#172B4D] ">
                  <HiOutlineUserAdd /> Compartir
                </button>
              </li>
              <li >
                <button className="flex flex-row items-center font-bold gap-1  hover:bg-neutral-700 p-1 rounded w-[32px} h-[32px] px-2">
                  <SlOptions size={size} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Board */}
      <div className="p-6">
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Board;
