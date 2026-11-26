import usePlatform from "@/hooks/usePlatform";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  if (error) return null;

  return (
    <Box marginX="40px">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">Platform</Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((platform) => (
                <Menu.Item value={platform.slug} key={platform.id}>
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default PlatformSelector;

//usePlatform
// const usePlatform = () => useData<Platform>("/platforms/lists/parents");