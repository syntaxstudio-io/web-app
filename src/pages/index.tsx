import { Flex, Link, Text } from '@chakra-ui/react'
import CustomHead from '@components/CustomHead'
import React from 'react'

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <CustomHead title="Home Page" description="Home page description" />

      <Flex justify="center" direction="column" align="center" height="100vh">
        <Text>Syntax Studio - Web App 🌐</Text>
        <Text mt=".5rem">
          <Link href="https://syntaxstudio.io/">www.syntaxstudio.io</Link>
        </Text>
      </Flex>
    </React.Fragment>
  )
}

export default Home
