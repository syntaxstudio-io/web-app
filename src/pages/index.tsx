import { Box, Text } from '@chakra-ui/core'
import CustomHead from '@components/CustomHead'
import React from 'react'

const Home: React.FC = (): JSX.Element => {
  return (
    <Box>
      <CustomHead title="Index Page" description="This is a description" />
      <Text>Syntax Studio Web App</Text>
    </Box>
  )
}

export default Home
