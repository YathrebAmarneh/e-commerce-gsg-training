import style from "./style.module.css";
import FooterItem from "./footer-item";
import SubscribeItem from "./subscribe-item";
const footerData = [
  {
    id: "1",
    title: "Categories",
    content: [
      "About us",
      "Testimonials",
      "Contact",
      "Journal",
      "Privacy Policy",
    ],
  },
  {
    id: "2",
    title: "Partners ",

    content: ["Support", "Shipping & Returns", "Size Guide", "Product Care,"],
  },
  {
    id: "3",
    title: "Contact us",
    content: [
      "26A Pagoda St, TANGS,",
      "Singapore, 058187",
      "                ",
      "+65 6221 5462",
    ],
  },
];
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.topFooter}>
        <div className={style.topThree}>
          {footerData.map((footerdata, index) => {
            const { id, title, content } = footerdata;
            return (
              <div className={style.footerData}>
                <FooterItem key={index} id={id} title={title} content={content} />
              </div>
            );
          })}
        </div>
        <SubscribeItem />
      </div>

      <p style={{ textAlign: "center" }}>
        &copy; Copyright Matter PTE LTD 2017
      </p>
    </div>
  );
};

export default Footer;
