import { GoogleMap, LoadScript } from '@react-google-maps/api'
import React from 'react'

const GoogleMapView = () => {

    const containerStyle = {
        width: '100%',
        height: '70vh'
    }

    const coordinate = { lat: -34.397, lng: 150.644 }

  return (
    <div>
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            mapIds={['920369774b95a6f']}
        >
            <GoogleMap
                mapContainerClassName={containerStyle}
                center={coordinate}
                options={{mapId: '920369774b95a6f'}}
                zoom={12}
            >

            </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default GoogleMapView