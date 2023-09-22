import React from "react"
import { CustomText } from "../../component";
import { useMatches } from "react-router-dom"

const User = () => {
    const matches = useMatches();
    console.log("user id -", matches[matches.length-1].params.id);
    const userName =matches[matches.length-1].params.id;
    return (
        <div>
            <CustomText screenName={`User - ${userName}`} />
        </div>
    )
}

export default User;