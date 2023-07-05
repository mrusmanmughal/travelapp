import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className="map"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      map
      {lat}
      {lng}
    </div>
  );
};

export default Map;
