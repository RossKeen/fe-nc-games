import { useEffect, useState } from "react";
import { getKudos, incKudosByOne } from "../utils/api";

const useKudos = (path, id) => {
  const [kudos, setKudos] = useState(0);

  useEffect(() => {
    getKudos(path, id).then((data) => {
      setKudos(data);
    });
  }, [path, id]);

  const incKudos = () => {
    setKudos((currKudos) => currKudos + 1);
    incKudosByOne(path, id).catch((err) => {
      setKudos((currKudos) => currKudos - 1);
    });
  };

  return { kudos, incKudos };
};

export default useKudos;
