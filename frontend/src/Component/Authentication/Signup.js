import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const [Name , setName] = useState();
  const [Email , setEmail] = useState();
  const [Password , setPassword] = useState();
  const [Cpassword , setCpassword] = useState();
  const [Images , setImages] = useState();


  return (
    <VStack spacing="1.5"> 
      <FormControl id='first-Name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Enter Your name' onChange={(e)=>setName(e.target.value)}/>
      </FormControl>

      <FormControl id='first-Name' isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
      </FormControl>

      <FormControl id='first-Name' isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
      </FormControl>
      
    </VStack>
  )
}

export default Signup
