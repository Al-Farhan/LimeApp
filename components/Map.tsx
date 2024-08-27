import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Mapbox, { Camera, LocationPuck, MapView, ShapeSource, SymbolLayer, Images } from '@rnmapbox/maps'
import { featureCollection, point } from '@turf/helpers'

import pin from '~/assets/pin.png'
import scooters from '~/data/scooters.json'

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

const Map = () => {

  const points = scooters.map((scooter) => point([scooter.long, scooter.lat]));

  return (
      <MapView style={{ flex: 1 }} styleURL='mapbox://styles/mapbox/dark-v11'>
        <Camera followZoomLevel={18} followUserLocation />
        <LocationPuck puckBearingEnabled puckBearing='heading' pulsing={{ isEnabled: true }} />

        <ShapeSource id='scooters' shape={featureCollection(points)}>
          <SymbolLayer
          id='scooter-icons'
          style={{
            iconImage: 'pin',
            iconSize: 0.3,
            iconAllowOverlap: true
          }}
          />
          <Images images={{ pin }} />
        </ShapeSource>
      </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})