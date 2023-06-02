export function Layout({layout, setLayout}){

    const changeLayoutSmall = () => {
        setLayout(true)
        console.log("clicked small")
    }

    const changeLayoutWide = () => {
        setLayout(false)
        console.log("clicked larger")
        console.log(layout)
    }

    return(
        <div>
        <div class="card w-100">
        <div class="card-header py-3 d-flex justify-content-end d-flex gap-2">
         <label htmlFor="">Change Layout:</label>
         <div className="d-flex gap-2">
        <div onClick={changeLayoutSmall} className={layout ? "layout-mode active" : "layout-mode"}>
          <div className="layout-box">
          </div>
          <div className="layout-box">
          </div>
          <div className="layout-box">
          </div>
        </div>
        <div onClick={changeLayoutWide} className={layout ? "layout-mode mode" : "layout-mode active"}>
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