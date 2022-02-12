import React from "react";
import { styles } from "./styles";

const Header = () => {
  return (
    <div>
      <div style={styles.header_container}>
        <div style={styles.text_container}>
          <h1 style={styles.header_text}>CRM-LINE</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
