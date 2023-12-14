import Link from "next/link";
import React from "react";

const UsersPage = () => {
  return (
    <>
      <div> This is the users page </div>
      <Link href="/users/chat-room">Chat Room</Link>
    </>
  );
};

export default UsersPage;
