import { Avatar, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div>
      <Flex
        as="nav"
        sx={{ p: "10px", justifyContent: "space-between", mt: "10px" }}
      >
        <Heading as="h4" size="md" sx={{ p: "10px" }}>
          Loco Summary Dashboard
        </Heading>
        <HStack>
          <Avatar name="Zuda" src="https://bit.ly/broken-link" />
          <Text display={{ base: "none", lg: "flex" }}>
            callmezydd@gmail.com
          </Text>
          <Button
            display={{ base: "none", lg: "flex" }}
            colorScheme="red"
            size="sm"
          >
            Logout
          </Button>
        </HStack>
      </Flex>
    </div>
  );
}
