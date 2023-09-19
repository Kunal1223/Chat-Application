import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {

  const [userInfor , setuserInfor] = useState({email:"" , password: ""})
  const [show, setShow] = useState(false);

  const handleClick = () =>setShow(!show);
  const onchange = (e) =>{
    setuserInfor({...userInfor , [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/user/login',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: userInfor.email, password: userInfor.password })
    });

    const json = await response.json();

    if(response.ok){
      alert("Login Successfully😎")
    }else{
      alert(json.error || "Registration failed");
    }
  }  

  return (
    <VStack spacing="15px">
    <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type="email" name='email' value={userInfor.email}
        placeholder="Enter Your Email Address"
        onChange={onchange}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"} value={userInfor.password}
          placeholder="Enter Password" name='password'
          onChange={onchange}
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
      style={{ marginTop: 15 }} onClick={handleSubmit}
    >
      Log in
    </Button>
  </VStack>
  )
}

export default Login
