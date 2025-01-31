import React, {Component} from "react";
class UserForm extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Introduce tu nombre" name="nombre" />
                <input type="text" placeholder="Introduce tu email" name="email" />
                <input type="submit" name="name" />
            </form>
        )
    }
}
export default UserForm;