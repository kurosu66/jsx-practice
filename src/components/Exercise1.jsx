import { users } from "../data/data.js";

const Exercise1 = () => {
  return (
    <ul>
      {users.map((user) => {
        const isAdult = user.age >= 18;

        return (
          <li key={user.id}>
            {user.name} {isAdult && "（成人）"}
          </li>
        );
      })}
    </ul>
  );
};

export default Exercise1;
