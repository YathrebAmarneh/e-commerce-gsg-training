import FeaturedCart from "../featured-cart";
import MainTitle from "../shared-components/main-title";
import style from "./style.module.css";
// const featuredCarts = [
//   {
//     id: "1",
//     brandNew: true,
//     imageName: "bd561c2928429cbbcc3ae1c05f4b3138d9c46ece",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
//   {
//     id: "2",
//     brandNew: true,
//     imageName: "88c6c728579097bb456b8880636063dd6d65bd1f",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
//   {
//     id: "3",
//     brandNew: true,
//     imageName: "57b25a954dd33a3587278bc87740a355f0c5bf8e",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
//   {
//     id: "4",
//     brandNew: false,
//     imageName: "87fe02beb67abf5c4fda69d148562a5b053f66a1",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
//   {
//     id: "5",
//     brandNew: true,
//     imageName: "bce7a2a190a22802b2cf58aa91c42939b9bd5973",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
//   {
//     id: "6",
//     brandNew: false,
//     imageName: "a18e6a7585aba0a670d755708b53fb0d50be1417",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
//   {
//     id: "7",
//     brandNew: true,
//     imageName: "a2e693fe23793c9f533e32a42546e0a2a7cfbd03",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
//   {
//     id: "8",
//     brandNew: false,
//     imageName: "74eddefbf8804508dc61eaff6a9f65257fdf4fa9",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//   },
// ];

const Featured = ({ data }) => {
  return (
    <div className={style.container}>
      <MainTitle content="Featured" />
      <div className={style.featuredImages}>
        {data.products.map((productItem) => {
          const { id } = productItem;
          return (
            <>
              <FeaturedCart key={id} {...productItem} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
