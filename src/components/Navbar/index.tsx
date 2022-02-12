import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar: React.FC<Props> = () => {


    return (
        <div style={{ position: "fixed", width: '100%', marginRight: 'auto', zIndex: 1000}}>
        <div style={{ width: '100%', height: 85, backgroundColor: "#FFFFFF", border: '1px solid #C4C4C4', display: 'flex', flexDirection: "column" }} >
            <div style={{ height: 40, width: '80%', backgroundColor: "#FFFFFF", margin: 'auto', flexDirection: "row", flex: 1, display: 'flex' }} >
                <div style={{ flex: 0.5  }} >
                    <h2  style={{ marginTop: 5}} >LOGO</h2>
                </div  >
                <div className="input-group mb-3  inner-addon left-addon" style={{flex: 3 , marginTop: 7, marginLeft: 5 }}>
                <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" className="form-control" placeholder="ค้นหน้า" aria-label="Username" aria-describedby="basic-addon1" style={{backgroundColor: "#E5E5E5", padding: '0.27rem' ,borderRadius: "0.3rem", border: 'none',}} />
                </div>
                <div style={{ flex: 6  }} >
                   
                </div  >
                <div style={{ flex: 1,  marginTop: 5, marginLeft: 'auto', flexDirection: "row", display: 'flex',  }} >
                   <div style={{ marginLeft: 10, flex: 1 , }}>
                   <button type="button" className="btn btn-secondary" style={{width: 80 , backgroundColor: "#E5E5E5", color: "#000000", fontSize: 18, height: 32,  borderRadius: 8 , lineHeight: 1}} >Register</button>
                   </div>
                   <div style={{ marginLeft: 10, flex: 1 , }}>
                   <button type="button" className="btn btn-secondary" style={{width: 80, backgroundColor: "#FFFFFF", color: "#000000", fontSize: 18, height: 32,  borderRadius: 8, lineHeight: 1}} >Sign In</button>
                   </div>
                  
                </div >
            </div>
            <div style={{ height: 40, width: '80%', margin: 'auto', flexDirection: "row", flex: 1, display: 'flex',   }} >
                <h4 style={{ marginRight: 20 , marginTop: 7 , fontSize: 28 }} >หนังล่าสุด</h4>
                <h4 style={{ marginRight: 20 , marginTop: 7 , fontSize: 28}} >แอคชั่น</h4>
                <h4 style={{ marginRight: 20 , marginTop: 7, fontSize: 28}} >ซี่รีส์</h4>
                <h4 style={{ marginRight: 20 , marginTop: 7, fontSize: 28}} >การ์ตูน</h4>
                <h4 style={{ marginRight: 20 , marginTop: 7, fontSize: 28}} >อนิเมะ</h4>
                <h4 style={{ marginRight: 20 , marginTop: 7, fontSize: 28}} >หนังไทย</h4>
                <h4 style={{ marginRight: 20 , marginTop: 7, fontSize: 28}} >หนังฝรั่ง</h4>
            </div>
        </div>
        </div>
    )
}

export default NavBar