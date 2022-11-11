import style from "./style.module.css";

const DescriptiveText = ({
  description,
  discountPercentage,
  brand,
  category,
}) => {
  return (
    <div className={style.container}>
      <div className={style.descriptionContent}>
        <h5>Description</h5>
        <p>{description}</p>
      </div>

      <div className={style.discountPercentage}>
        <h5 className="topic">Discount Percentage</h5>
        <p>{`${discountPercentage} %`}</p>
      </div>

      <div className={style.brand}>
        <h5 className="topic">Brand</h5>
        <p>{brand}</p>
      </div>

      <div className={style.category}>
        <h5 className="topic">Category</h5>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default DescriptiveText;
