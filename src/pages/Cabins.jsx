import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Layout/Row";
import { getCabins } from "../services/db/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
