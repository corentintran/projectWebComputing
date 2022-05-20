import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";
import { useEffect, useState } from "react";
import MyMap from "../components/Map";
import BarChart from "../components/BarChart";
/*
const Abu = {
  name: "Abu",
  country: "Japan",
  region: "Japan, Taiwan, Marianas",
  subregion: "Honshu",
  last_eruption: "6850 BCE",
  summit: 641,
  elevation: 2103,
  latitude: "34.5000",
  longitude: "131.6000",
  population_5km: 3597,
  population_10km: 9594,
  population_30km: 117805,
  population_100km: 4071152
};
*/
export default function Volcano() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = localStorage.getItem("token");
  //return (<p> the volcqno id is :{id}</p>)
  const { volcano } = useVolcanoById(id);
  //const volcano = Abu;

  return (
    <div className="container">
      <div className="volcPresentation">
        <h1> {volcano.name} </h1>
        <p> Country: {volcano.country}</p>
        <p> Region: {volcano.region}</p>
        <p> Subregion: {volcano.subregion}</p>
        <p> Last eruption: {volcano.last_eruption}</p>
        <p> Summit: {volcano.summit}</p>
        <p> Elevation: {volcano.elevation}</p>

        <Button
          color="info"
          size="sm"
          className="mt-3"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </div>
      <div className="Map">
        <MyMap latitude={volcano.latitude} longitude={volcano.longitude} />
      </div>
      <div className="BarChart">
        {token === "null" ? (
          <p>Login to see the population density around the volcano</p>
        ) : (
          <BarChart
            pop_5km={volcano.population_5km}
            pop_10km={volcano.population_10km}
            pop_30km={volcano.population_30km}
            pop_100km={volcano.population_100km}
          />
        )}
      </div>
    </div>
  );
}

function useVolcanoById(id) {
  const [volcano, setVolcano] = useState([]);
  const url = "http://sefdb02.qut.edu.au:3001/volcano/" + id;
  const token = localStorage.getItem("token");
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };

  useEffect(() => {
    if (token === "null") {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setVolcano(res))
        .then((data) =>
          data.map((volc) => ({
            name: volc.name,
            country: volc.country,
            region: volc.region,
            subregion: volc.subregion,
            last_eruption: volc.last_eruption,
            summit: volc.summit,
            elevation: volc.elevation,
            latitude: volc.latitude,
            longitude: volc.longitude
          }))
        )
        .then((volc) => {
          setVolcano(volc);
        });
      return {
        volcano
      };
    } else {
      fetch(url, { headers })
        .then((res) => res.json())
        .then((res) => setVolcano(res))
        .then((data) =>
          data.map((volc) => ({
            name: volc.name,
            country: volc.country,
            region: volc.region,
            subregion: volc.subregion,
            last_eruption: volc.last_eruption,
            summit: volc.summit,
            elevation: volc.elevation,
            latitude: volc.latitude,
            longitude: volc.longitude,
            population_5km: volc.population_5km,
            population_10km: volc.population_10km,
            population_30km: volc.population_30km,
            population_100km: volc.population_100km
          }))
        )
        .then((volc) => {
          setVolcano(volc);
        });

      return {
        volcano
      };
    }
  });
}
