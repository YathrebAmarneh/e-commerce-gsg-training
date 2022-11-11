import Modal from "react-modal";
import "./style.css";

import ProductDetails from "../product-details";

const QuickViewModal = ({
  productItem,
  modalIsOpen,
  onClick,
  onRequestClose,
}) => {
  // console.log("productItem from QuickViewModal", productItem);
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onRequestClose}>
      <ProductDetails productItem={productItem} onClick={onClick} />
    </Modal>
  );
};

export default QuickViewModal;
