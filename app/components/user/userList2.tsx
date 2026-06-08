import { useRef, useState } from "react"
import UserList1 from "./userList1";
import CreateUser from "./createUser";

export default function UserList2(){
    // users의 변화를 주기 위해 (등록, 삭제, 수정) useState() 관리
    const [users, setUsers ] = useState([
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com',
            active:true
        },
        {
            id: 2,
            username: 'kim',
            email: 'kim@naver.com',
            active: false
        },
        {
            id: 3,
            username: 'lee',
            email: 'leeTest@gmail.com',
            active: false
        },
    ]);

    // users 객체가 있는 위치에서 useState() 구성
    // user 객체를 생성 => users 추가

    // id 설정 
    const nextId = useRef(4); // user 값을 추가할 때 사용할 id

    // createUser 값을 관리 useState()
    const [inputs, setInputs] = useState({
        username:'',
        email:''
    });

    const {username, email} = inputs;


    return(
        <div>
            <hr className="m-5" />
            {/* user를 등록할 input => CreateUser 컴포넌트 생성 */}
            <CreateUser username={username} email={email} />

            {/* 출력에 필요한 컴포넌트 UserList1 생성 */}
            <UserList1 users={users} />
        </div>
    )
}