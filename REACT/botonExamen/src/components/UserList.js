import React, {Component} from "react";
import User from "./User";
class UserList extends Component{
    render(){
        return(
            <ul>
                {this.props.users.map(
                    u=> <User 
                    key={u.id}
                    name={u.name}
                    email={u.email}
                    ></User>
                )}
            </ul>
        )
    }
}
export default UserList;