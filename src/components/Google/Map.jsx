import React from 'react'
import GoogleMapReact from 'google-map-react'
import {GrLocation} from 'react-icons/gr'

import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
   <GrLocation/>
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
   

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDlNvZTVmFZplMvCGccQWoH54nkYd5B6gc' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map