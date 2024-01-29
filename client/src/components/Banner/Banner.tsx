import "./Banner.css";
import Cross from "../../icons/Cross/Cross";
import { useBanner } from "./Banner.logic";

const Banner = () => {
  const logic = useBanner();

  return (
    <div className="banner-container">
      {logic.items.map((item) => (
        <div key={item.id} className="banner-box" data-is-success={item.success}>
          <div className="banner-left">
            <p>{item.txt}</p>
          </div>
          <div className="banner-right">
            <button onClick={() => logic.handleClose(item.id)}>
              <Cross />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
