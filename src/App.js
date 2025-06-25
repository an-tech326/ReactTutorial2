
import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./atoms/button/PrimaryButton";
import { SecondaryButton } from "./atoms/button/SecondaryButton";
import { SearchInput } from "./molecules/SearchInput";
import { UserCard } from "./organisms/user/UserCard";
import "./styles.css";
import { HeaderOnly } from "./templates/HeaderOnly";
import { DefaultLayout } from "./templates/DefaultLayout";
export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <SearchInput />
        <UserCard/>
      </DefaultLayout>
    </BrowserRouter>
  );
}
