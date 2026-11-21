import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md'
import { BsNintendoSwitch, BsGlobe } from 'react-icons/bs'
import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

  const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }
  return (
    <>
      <HStack marginY={2}>
          {platforms.map((platform) => (
            <Icon as={iconMap[platform.slug]} color='gray.500'/>
          ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;


//useGames
// export interface Platform{
//   id: number;
//   name: string;
//   slug: string;
// }

// export interface Game {
//   id: number;
//   name: string;
//   background_image
// : string;
//   parent_platforms: { platform: Platform} [];
// }


//GameCard
//<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>