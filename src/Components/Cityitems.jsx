import { Link, useSearchParams } from "react-router-dom";

const formatdate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

const Cityitems = (val, key) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { cityName, country, date, emoji, position, id } = val.val;
  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className="link">
      <div className="country_list" key={key}>
        <div>
          <span>{emoji}</span> <span> {cityName}</span>
        </div>
        <div>
          <time>{formatdate(date)}</time> <button> * </button>
        </div>
      </div>
    </Link>
  );
};

export default Cityitems;
