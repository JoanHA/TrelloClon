import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  tasks: string[] | null;
  setTasks: React.Dispatch<React.SetStateAction<string[] | null>>;
  setProcess: React.Dispatch<React.SetStateAction<string[] | null>>;
  setDone: React.Dispatch<React.SetStateAction<string[] | null>>;
  done: string[] | null;
  process: string[] | null;
}
const context = createContext<ContextProps | null>(null);
export const useContexto = () => {
  const AuthContext = useContext(context);
  if (!AuthContext) {
    throw new Error("Context must be inside a Context provider");
  }
  return AuthContext;
};
interface Props {
  children: ReactNode;
}
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<string[] | null>(["Tarea sin realizar"]);
  const [process, setProcess] = useState<string[] | null>(null);
  const [done, setDone] = useState<string[] | null>(null);

  return (
    <context.Provider
      value={{
        tasks,
        setTasks,
        process,
        setProcess,
        done,
        setDone,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
