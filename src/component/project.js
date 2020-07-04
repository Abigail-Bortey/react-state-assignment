import React from "react";

class UserItem extends React.Component {

    render() {
        const {name, email} = this.props
        return(
            <div>
                <h2 className='actual name'>{name}</h2>
                <h3 className='naadorsted'>{email}</h3>
                <hr></hr>
            </div>
        )
    }
}



    




    export default UserItem;