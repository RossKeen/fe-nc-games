import { useEffect, useState } from "react";
import { decKudosByOne, getKudos, incKudosByOne } from "../utils/api";

const useKudos = (path, id) => {
  const [kudos, setKudos] = useState(0);
  const [kudosClicked, setKudosClicked] = useState(false);

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

  const decKudos = () => {
    setKudos((currKudos) => currKudos - 1);
    decKudosByOne(path, id).catch((err) => {
      setKudos((currKudos) => currKudos + 1);
    });
  };

  return { kudos, incKudos, decKudos, kudosClicked, setKudosClicked };
};

export default useKudos;
