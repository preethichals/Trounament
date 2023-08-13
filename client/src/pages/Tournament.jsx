import React from 'react'
import CompletedEvents from '../components/CompletedEvents'
import Layout from '../components/layout/Layout'
import OnGoingEvents from '../components/OngoingEvents'
import UpComingEvents from '../components/UpComingEvents'


function Tournament() {
  return (
    <>
     <Layout title={"Tournaments"}>
    <OnGoingEvents/>
    <UpComingEvents/>
    <CompletedEvents/>
    </Layout>
    </>
  )
}

export default Tournament