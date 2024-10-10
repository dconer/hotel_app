import PropTypes from "prop-types";

import { formatCurrency } from "../../utils/helpers";

import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";

import { useState } from "react";
import { useDeleteCabin } from "./hooks/useDeleteCabin";
import { AiOutlineDelete, AiOutlineDiff, AiOutlineEdit } from "react-icons/ai";
import { useCreateCabin } from "./hooks/useCreateCabin";
import Modal from "../../ui/DataPresentation/Modal";
import ConfirmDelete from "../../ui/Input/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copia de ${cabin.name}`,
      description,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }

  return (
    <TableRow role="row">
      <Img src={image} alt={name} />
      <Cabin>{name}</Cabin>
      <div>Aloja hasta {maxCapacity} invitados</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button
          title="Duplicar"
          onClick={handleDuplicate}
          disabled={isCreating}
        >
          <AiOutlineDiff />
        </button>

        <Modal>
          <Modal.Open opens="edit-form">
            <button title="Editar">
              <AiOutlineEdit />
            </button>
          </Modal.Open>
          <Modal.Window name="edit-form">
            <CreateCabinForm cabinToEdit={cabin} setShowForm={setShowForm} />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens="delete-confirmation">
            <button title="Borrar" disabled={isDeleting}>
              <AiOutlineDelete />
            </button>
          </Modal.Open>
          <Modal.Window name="delete-confirmation">
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </TableRow>
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    maxCapacity: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    discount: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default CabinRow;
