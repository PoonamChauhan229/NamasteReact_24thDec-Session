// step1:
import { createContext } from "react";
// step2:
const UserContext = createContext({
  user: { name: "DummyName", email: "dummy@gmail.com" },
});
// step3:
export default UserContext;
