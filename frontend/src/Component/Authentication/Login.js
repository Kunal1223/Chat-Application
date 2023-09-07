import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Cpassword, setCpassword] = useState();
  const [show, setShow] = useState(false);
  const [cshow, setcShow] = useState(false);

  const handleClick = () =>setShow(!show);
  const handleClick1 = () =>setcShow(!cshow);

  return (
    <VStack spacing="15px">
    <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type="email"
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}  
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <Button
      colorScheme="red"
      width="100%"
      style={{ marginTop: 15 }}
    >
      Log in
    </Button>
  </VStack>
  )
}

export default Login
