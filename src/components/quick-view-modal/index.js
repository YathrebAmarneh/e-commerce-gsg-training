import "./style.css";
import Modal from "react-modal";
import ProductDetails from "../product-details";

const QuickViewModal = ({
  id,
  productItem,
  modalIsOpen,
  onClick,
  onRequestClose,
}) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onRequestClose}>
      <ProductDetails
        id={productItem.id}
        productItem={productItem}
        onClick={onClick}
      />
    </Modal>
  );
};

export default QuickViewModal;
