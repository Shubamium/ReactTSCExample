import { createContext, useContext } from "react";

type User = {
  userId: number;
  name: string;
  email: string;
};

const UserContext = createContext<User | null>(null);

function ContextSample() {
  const userValue: User = {
    userId: 23443,
    name: "Sabbheed Dervi",
    email: "sabheed.karheed@gmail.com",
  };
  return (
    <div>
      <h2>This is parent component</h2>
      <UserContext.Provider value={userValue}>
        <ContextChild />
      </UserContext.Provider>
    </div>
  );
}

function ContextChild() {
  const userData = useContext(UserContext);
  return (
    <>
      <h3>This is child component</h3>
      {userData && (
        <>
          <h2>
            Hello, {userData.name}: User No.{userData.userId}
          </h2>
          <p>Email confirmation has been sent to {userData.email}</p>
        </>
      )}
    </>
  );
}

export default ContextSample;
