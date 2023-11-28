/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export const CardLoco = ({ statusFilter, title }) => {
  return (
    <div>
      <Card
        direction={{ sm: "column" }}
        overflow="auto"
        variant="outline"
        minH="150px"
        borderRadius="12px"
      >
        <CardBody>
          <Stack sx={{ flexDirection: "column" }}>
            <Heading size="xl" textAlign="center">
              {statusFilter}
            </Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text fontWeight={"bold"}>{title}</Text>
        </CardFooter>
      </Card>
    </div>
  );
};
