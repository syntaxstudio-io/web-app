import Head from '@components/common/Head'
import HeroContainer from '@containers/Hero'
import React from 'react'

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Head title="Home Page" description="Home page description" />

      <HeroContainer />
    </React.Fragment>
  )
}

export default Home
