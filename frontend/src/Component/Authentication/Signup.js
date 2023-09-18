import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Toast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from "react-router";
import axios from "axios"

const Signup = () => {
  const [userInfo , setuserInfo] = useState({name:"",email:"", password:"", confirmpassword:""}); 
  const [show, setShow] = useState(false);
  const [cshow, setcShow] = useState(false);
  const[loading , setLoading] = useState(false);

  const handleClick = () =>setShow(!show);
  const handleClick1 = () =>setcShow(!cshow);

  const postDetails = (pics) =>{};

  const onchange = (e) =>{
    setuserInfo({...userInfo , [e.target.name]:e.target.value })
  }

  return (
    <VStack spacing="15px">

      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name" name='name' onChange={onchange} value={userInfo.name} 
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email" name='email' value={userInfo.email} onChange={onchange}
          placeholder="Enter Your Email Address"
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"} name='password' value={userInfo.password} onChange={onchange}
            placeholder="Enter Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}  
            </Button>
          </InputRightElement> 
        </InputGroup>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={cshow ? "text" : "password"} name='confirmpassword' value={userInfo.confirmpassword}
            onChange={onchange}
            placeholder="Confirm password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick1}>
              {cshow ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        isLoading = {loading}
      >
        Sign Up
      </Button>
      
    </VStack>
  )
}

export default Signup
