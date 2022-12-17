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
  console.log("productItem from quick view modal", productItem);
  console.log("id from quick view modal", id);
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
