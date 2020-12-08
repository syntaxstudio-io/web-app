import { Flex, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const Hero: FC = (): JSX.Element => {
  return (
    <Flex justify="center" direction="column" align="center" height="100vh">
      <Text>Syntax Studio - Web App 🌐</Text>
      <Text mt=".5rem">
        <Link href="https://syntaxstudio.io/">www.syntaxstudio.io</Link>
      </Text>
    </Flex>
  )
}

export default Hero
