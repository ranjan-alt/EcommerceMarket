import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../assets/data";
const Footer = () => {
  return (
    <>
      <Link to="/">Shopee</Link>
      <div>
        {FOOTER_LINKS.map((col) => (
          <>
            <FooterColumn title={col.title} key={col.title}>
              <ul>
                {col.links.map((link) => (
                  <Link to={"/"}>{link}</Link>
                ))}
              </ul>
            </FooterColumn>
          </>
        ))}
      </div>
    </>
  );
};

const FooterColumn = ({title, children}) => {
  return (
    <>
      <h4>{title}</h4>
      {children}
    </>
  );
};

export default Footer;
