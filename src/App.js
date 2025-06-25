
import { PrimaryButton } from "./atoms/button/PrimaryButton";
import { SecondaryButton } from "./atoms/button/SecondaryButton";
import { SearchInput } from "./molecules/SearchInput";
import { UserCard } from "./organisms/user/UserCard";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SearchInput />
      <UserCard/>
    </div>
  );
}
