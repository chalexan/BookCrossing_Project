import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Test.css" 

const Test = () => {
  const position = [51.505, -0.09];
  const handleClick = (e) => {
  
        //e.latlng;
  }
  return ( 
    <div>
    <Map center={position} zoom={3} scrollWheelZoom={false} onClick={handleClick}>
     <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        "Незнайка на луне". <br /> by user 123.
      </Popup>
    </Marker>
    </Map>
    </div>
   );
}
 
export default Test;
