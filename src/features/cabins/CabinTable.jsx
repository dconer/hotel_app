import styled from "styled-components";
import Spinner from "../../ui/utils/Spinner";
import CabinRow from "./CabinRow";

import { useCabins } from "./hooks/useCabins";
import Table from "../../ui/DataPresentation/Table";
import Menus from "../../ui/DataPresentation/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // 1. Filtering
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins = cabins || [];

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount !== 0);

  // 2. Sorting
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, order] = sortBy.split("-");
  const modifier = order === "asc" ? 1 : -1;

  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
