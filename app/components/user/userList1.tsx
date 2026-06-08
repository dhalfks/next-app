import { userType } from "@/app/type/user"
import User from "./user";

type userProps = {
    users: userType[];
}

export default function UserList1({users}:userProps){
    return(
        <div>
            <hr />
            <h2 className="font-bold m-2">User List</h2>
            {
                users.map( user => (
                    <User user={user} key={user.id} />
                ))
            }
        </div>
    )
}