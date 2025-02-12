import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { LuSun } from 'react-icons/lu';
import { IoMoon } from 'react-icons/io5';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();  

    return (
        <Container maxW="1140px" px={4}>
            <Flex
                h={16}
                alignItems="center"
                justifyContent="space-between"
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Text
                    bgGradient="linear(to-r, rgb(40, 170, 202), rgb(38, 0, 255))"
                    bgClip="text"
                    fontSize={{ base: "22px", sm: "28px" }}
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    textAlign="center"
                >
                    <Link to="/">Product store</Link>
                </Text>
                <HStack spacing={2} alignItems="center">
                    <Link to="/create">
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />} 
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;
