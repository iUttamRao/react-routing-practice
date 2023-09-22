import React from "react"; 
import { customTextStyles as styles } from "./CustomText.style";
const CustomText =(props) =>{
    const {screenName} = props;
    return(
        <p style={styles.screenNameText}>
            This is an {screenName}'s Screen.
        </p>
    )
}

export default CustomText;