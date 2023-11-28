import { List, ListItem } from "@chakra-ui/react";

export const SideBar = () => {
  return (
    <div>
      <List color="white" fontSize="1.2rem" spacing={6}>
        <ListItem color="navy">Dashboard</ListItem>
        <ListItem>New Task</ListItem>
        <ListItem>Profile</ListItem>
      </List>
    </div>
  );
};
