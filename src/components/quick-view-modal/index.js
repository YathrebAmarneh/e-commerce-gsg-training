import "./style.css";
import Modal from "react-modal";
import ProductDetails from "../product-details";

const QuickViewModal = ({
  productItem,
  modalIsOpen,
  onClick,
  onRequestClose,
}) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onRequestClose}>
      <ProductDetails productItem={productItem} onClick={onClick} />
    </Modal>
  );
};

export default QuickViewModal;
