import { userType } from "@/app/type/user"

type userProps = {
    user : userType;
}

export default function User({user}: userProps){
    return(
        <div>
            <b>{user.id} . {user.username}</b>
            <span className="mx-3">{user.email}</span>
            <button className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-700"
            >x</button>
        </div>
    )
}