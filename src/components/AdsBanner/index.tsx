import React, {useState} from "react";

const AdsBanner = () => {

  const [show, setShow] = useState(true);

  return (
    <>
      <div
        style={{
          display:  show === true ? "flex" : "none",
          zIndex: 1,
          position: "fixed",
          flexDirection: "column",
          marginTop: 100,

        }}
      >
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              width: 150,
              zIndex: 1200,
              flex: 1,
            }}
          >
           
            <div
              style={{ width: 130, height: 570, backgroundColor: "#C4C4C4" }}
            >
              <div style={{ marginLeft: 95 }}>
             <button type="button" className="close" aria-label="Close" onClick={()=> setShow(false) }  >
                <span aria-hidden="true">X</span>
              </button>
             </div>
            </div>{" "}
          </div>
          <div
            style={{
              width: 150,
              zIndex: 1200,
              flex: 1,
            }}
          >
            
            <div
              style={{
                width: 130,
                height: 570,
                backgroundColor: "#C4C4C4",
                marginLeft: "auto",
              }}
            >   <div>
            <button type="button" className="close" aria-label="Close" onClick={()=> setShow(false) }   >
               <span aria-hidden="true">X</span>
             </button>
            </div> </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AdsBanner;
