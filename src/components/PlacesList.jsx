import React from 'react'
import styled from 'styled-components'
import PanelItem from './PanelItem.jsx'

const SidePanel = styled.section`
  background-color: white;
  z-index: 1;
  width: 20%;
  overflow: auto;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  height: 70%;
  border-radius: 0.6rem;
  border: 3px solid #EA4A4A;

  @media only screen and (max-width: 700px) {
    bottom: 3rem;
    width: -webkit-fill-available;
    border-radius: 0;
    margin: 0 0 0.6rem 0;
    height: 10rem;
  }
`

const PlacesList = (props) => {
  const allPlaces = props.places.map((place, index) => {
    return <PanelItem key={index} place={place} map={props.map} />
  })

  return <SidePanel>{allPlaces}</SidePanel>
}

export default PlacesList