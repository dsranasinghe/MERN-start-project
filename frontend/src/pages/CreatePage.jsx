import { Box, Button, Container, Heading, Input, VStack , useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react'



const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const {createProduct} = useProductStore();

    const toast = useToast();

    const handleAddProduct = async() => {
        const response = await createProduct(newProduct);
       if(response.success) {
           toast({
               title: "Product Created",
               description: response.message,
               status: "success",
               duration: 5000,
               isClosable: true,
           });
       } else {
           toast({
               title: "Error",
               description: response.message,
               status: "error",
               duration: 5000,
               isClosable: true,
       
       });
    };
    setNewProduct({
        name: "",
        price: "",
        image: "",
    });

    };
    return (
       <Container maxW="container.sm">
        <VStack spacing={8}>
            <Heading as={"h1"} size={'2xl'} textAlign={"center"} mb={8}>Create a New Product</Heading>
            <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
                <Input 
                placeholder="Product Name" 
                value={newProduct.name} 
                name='name' 
                onChange={(e) => setNewProduct ({...newProduct , name:e.target.value })  } />

                <Input 
                placeholder="Product Price" 
                type="number" 
                value={newProduct.price} 
                name='price' 
                onChange={(e) => setNewProduct ({...newProduct , price:e.target.value })  } />

                <Input 
                placeholder="Product Image URL" 
                value={newProduct.image} 
                name='image' 
                onChange={(e) => setNewProduct ({...newProduct , image:e.target.value })  } />

                <Button colorScheme="blue" onClick={handleAddProduct} w={'full'}> Submit</Button>

            </VStack>
            </Box>
        </VStack>
       </Container>
    );
} ;

export default CreatePage;
