import React, {useState, useEffect, useRef} from "react";
import {CloseIcon, TriangleUpIcon} from "@chakra-ui/icons";
import {IconButton} from "@chakra-ui/react";

const useAudio = (url: string) => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);

  useEffect(() => {
    const currentAudio = audio.current;

    currentAudio.volume = 0.4;
    currentAudio.addEventListener("ended", () => setPlaying(false));

    return () => {
      currentAudio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle] as [boolean, VoidFunction];
};

interface Props {
  url: string;
}

const Player = ({url}: Props) => {
  const [playing, toggle] = useAudio(url);

  return (
    <IconButton
      aria-label={playing ? "Pause" : "Play"}
      colorScheme="teal"
      icon={playing ? <CloseIcon /> : <TriangleUpIcon />}
      transform={playing ? "" : "rotate(90deg)"}
      onClick={toggle}
    />
  );
};

export default Player;
