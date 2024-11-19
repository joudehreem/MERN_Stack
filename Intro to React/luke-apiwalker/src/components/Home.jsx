import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  // const [homeworld, setHomeworld] = useState("");
  const [resource, setResource] = useState("pepole");
  
  useEffect(() => {
    async function fetchswapi() {
      axios.get("https://swapi.dev/api/").then((response) => {
        setData(response.data);
        console.log(response);
      });
    }
    fetchswapi();
  }, []);

  function handelChangeId(e) {
    setId(e.target.value);
  }
  function handleChangeResource(e) {
    setResource(e.target.value);
  }
  function handelSearch(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handelSearch}>
        {" "}
        Search for{" "}
        <select
          name="resource"
          id="resource"
          onChange={handleChangeResource}
          value={resource}
        >
          {Object.keys(data).map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>{" "}
        ID{" "}
        <input type="search" value={id} name="id" onChange={handelChangeId} />{" "}
        <button type="submit">Search</button>
      </form>
      <div>{data.name} { data.hight}</div>
    </div>
  );
}
