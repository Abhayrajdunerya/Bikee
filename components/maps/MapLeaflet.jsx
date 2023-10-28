'use client'

import React, {useState, useEffect, useRef} from 'react'
import Head from 'next/head'

import { TileLayer, MapContainer } from 'react-leaflet'
import { maptiler } from '@/constants/mapConfig'
// import 'leaflet/dist/leaflet.css';

const MapLeaflet = () => {

    const mapRef = useRef();

    const [center, setCenter] = useState({
        lat: 13.084622,
        lng: 80.248357,
    });

    const zoomLevel = 9;

  return (
    <>
    <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    </Head>
    <div className='h-1/2 w-1/2'>
        <MapContainer ref={mapRef} center={center} zoom={zoomLevel}>
        {/* <MapContainer center={center} zoom={zoomLevel} style={{height: '600px', width: '100%'}} > */}
            <TileLayer url={maptiler.url} attribution={maptiler.attribution} />
        </MapContainer>
    </div>
    </>
  )
}

export default MapLeaflet