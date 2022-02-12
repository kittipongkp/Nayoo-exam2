import React, { useState } from "react";

const AdsBanner = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        style={{
          display: show === true ? "flex" : "none",
          zIndex: 1000,
          position: "fixed",
          flexDirection: "column",
          marginTop: 540,
        }}
      >
        <div
          style={{
            flex: 1,
            flexDirection: "column",
            display: "flex",
          }}
        >
              <div
              style={{ width: "80%", height: 130, backgroundColor: "#C4C4C4" }}
            >
              <div style={{ marginLeft: 5 }}>
             <button type="button" className="close" aria-label="Close" onClick={()=> setShow(false) }  >
                <span aria-hidden="true">X</span>
              </button>
             </div>
            </div>

            <div
              style={{ width: "80%", height: 130, backgroundColor: "#C4C4C4", marginTop: 10 }}
            >
            
            </div>

        </div>
      </div>
    </>
  );
};

export default AdsBanner;
