"use client" // 상위폴더에서 관리
import Hello from "./components/Hello";
import Start from "./components/Start";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import HelloProps from "./components/HelloProps";
import InputSample from "./components/inputSample";
import InputSample2 from "./components/inputSample2";
import UserList from "./components/user/userList";
import UserList2 from "./components/user/userList2";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-3xl font-bold my-5">Hello Next.js World~!!</h1>
        
        <Hello />
        <Start />
        <Counter />
        <Counter2 num={100} />

        <HelloProps name={"홍길동"} age={20} />
        <hr />
        <InputSample />

        <hr />
        <InputSample2 />

        <hr />
        <UserList />

        <hr />
        <UserList2 />
        
        <hr />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

    </div>
  );
}
