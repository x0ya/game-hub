import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import Theme from '../components/Theme'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='5px'>
        <Image src={logo} boxSize='60px'/>
        <Theme/>
    </HStack>
  )
}

export default NavBar