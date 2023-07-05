import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ContextApi } from "../Context/CitiesProider";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { Cities } = ContextApi();
  const [postion, setposition] = useState([40, 0]);
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");
  useEffect(() => {
    lat & lng && setposition([lat, lng]);
  }, [lng, lat]);
  console.log(lng, lat);
  return (
    <div
      className="map"
      onClick={(e) => {
        e.preventDefault();
        navigate("form");
      }}
    >
      <MapContainer
        center={postion}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          flex: 1,
          backgroundColor: "white",
          position: "relative",
          height: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Cities.map((val, i) => (
          <Marker position={[val.position.lat, val.position.lng]} key={i}>
            <Popup>{val.cityName}</Popup>
          </Marker>
        ))}
        <ChangePosition position={[lat || 40, lng || 0]} />
      </MapContainer>
    </div>
  );
};
export function ChangePosition({ position }) {
  const change = useMap();
  change.setView(position);

  return null;
}
export default Map;
