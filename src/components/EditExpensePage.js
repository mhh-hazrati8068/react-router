import React from "react";

const EditExpensePage = (props) =>{
    console.log(props);
    return(
        <div>
        editing the expense from edit {props.match.params.id}
    </div>
    );
    };
 export default EditExpensePage;