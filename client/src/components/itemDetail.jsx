import {
  Heading,
  Flex,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Container,
  Spacer,
  HStack,
  Box,
  Text,
  Table,
  Td,
  Tr,
  Tbody,
  SimpleGrid,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function ItemDetail({ _id, product, unit, quantity, price }) {
  const commas = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div>
      <div>
        <button className="btn btn-secondary m-2">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="btn btn-secondary">
          <Link to={`/${_id}`}>Buy/Sell</Link>
        </button>
        <button className="btn btn-secondary m-2">
          <Link to={`/${_id}/edit`}>Edit</Link>
        </button>
        <Box
          p="6px"
          borderRadius="4"
          position="absolute"
          right={"0"}
          marginTop={"-14"}
        >
          <button className="btn btn-danger btn-sm">
            <Link to="">Delete Item</Link>
          </button>
        </Box>
      </div>
      <Container maxWidth={"95%"} my="10">
        <Text as="span" className="table">
          <SimpleGrid columns={2} spacing={2}>
            <Text as="span">
              <Heading as="h2">{`${product}==>`}</Heading>
            </Text>
            <Text as="span" className="h5">
              <Text>{`●${quantity} ${unit} in store`}</Text>
              <Text as="span" className="h5">
                ●{commas} Birr per {unit}
              </Text>
            </Text>
          </SimpleGrid>
        </Text>
      </Container>
    </div>
  );
}
