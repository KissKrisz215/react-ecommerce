import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

export function Layout(){

    const {layout, setLayout} = useContext(LayoutContext);

    const setLayoutSize = (size) => {
      setLayout(size);
    }

    return(
        <div>
        <div className="card w-100">
        <div className="card-header py-3 d-flex justify-content-end d-flex gap-2">
         <label htmlFor="">Change Layout:</label>
         <div className="d-flex gap-2">
        <div onClick={() => setLayoutSize("small")} className={layout === "small" ? "layout-mode active" : "layout-mode"}>
          <div className="layout-box">
          </div>
          <div className="layout-box">
          </div>
          <div className="layout-box">
          </div>
        </div>
        <div onClick={() => setLayoutSize("large")} className={layout === "large" ? "layout-mode mode active" : "layout-mode "}>
          <div className="layout-box">
          </div>
          <div className="layout-box">
          </div>
          <div className="layout-box">
          </div>
          <div className="layout-box">
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
}