type CreateUserProps = {
    username:string;
    email:string;
}

export default function CreateUser({username, email}: CreateUserProps){
    return(
        <div>
            <input className="border border-gray-300 p-2 mr-2"
                type="text" 
                name="username" 
                value={username}
                placeholder="username..."
            />
            <input className="border border-gray-300 p-2 mr-2"
                type="text" 
                name="email" 
                value={email}
                placeholder="email..."
            />
            <button className="px-2 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-700"
            >create</button>
        </div>
    )
}