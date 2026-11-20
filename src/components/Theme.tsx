import { useColorMode } from "@/components/ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const Theme = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton onClick={toggleColorMode} variant='outline'>
      {colorMode === "light" ? <LuSun /> : <LuMoon />}
    </IconButton>
  );
};

export default Theme;
