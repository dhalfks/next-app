import { useState } from "react"
import UserList1 from "./userList1";

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

    return(
        <div>
            {/* user를 등록할 input => CreateUser 컴포넌트 생성 */}

            {/* 출력에 필요한 컴포넌트 UserList1 생성 */}
            <UserList1 users={users} />
        </div>
    )
}