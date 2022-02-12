import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar: React.FC<Props> = () => {


    return (
        <div style={{ position: "fixed", width: '100%', marginRight: 'auto', zIndex: 1000}}>
        <div style={{ width: '100%', height: 50, backgroundColor: "#FFFFFF", border: '1px solid #C4C4C4', display: 'flex', flexDirection: "column" }} >
            <div style={{ height: 40, width: '80%', backgroundColor: "#FFFFFF", margin: 'auto', flexDirection: "row", flex: 1, display: 'flex' }} >
                <div style={{ flex: 0.5  }} >
                    <h2  style={{ marginTop: 5}} >LOGO</h2>
                </div  >
                <div style={{ flex: 6  }} >
                </div  >
                <div style={{ flex: 1,  marginTop: 5, marginLeft: 'auto', flexDirection: "row", display: 'flex',  }} >
                  
                </div >
            </div>
           
        </div>
        </div>
    )
}

export default NavBar