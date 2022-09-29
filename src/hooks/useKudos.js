import { useEffect, useState } from "react";
import { getKudos, patchKudos } from "../utils/api";

const useKudos = (path, id) => {
  const [kudos, setKudos] = useState(0);
  const [kudosClicked, setKudosClicked] = useState(false);

  useEffect(() => {
    getKudos(path, id).then((data) => {
      setKudos(data);
    });
  }, [path, id]);

  const changeKudos = (change) => {
    setKudos((currKudos) => currKudos + change);
    patchKudos(path, id, change).catch((err) => {
      setKudos((currKudos) => currKudos - change);
    });
  };

  return { kudos, kudosClicked, setKudosClicked, changeKudos };
};

export default useKudos;
