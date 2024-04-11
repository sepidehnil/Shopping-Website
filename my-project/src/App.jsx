import SubCategoryItems from "./components/UI/SubCategoryItems";
import Header from "./components/UI/Header";
import { HomePage } from "./components/UI/HomePage";
import Sidebar from "./components/UI/Sidebar";

export default function App() {
  return (
    <>
      <Header />
      <SubCategoryItems />
      <div className="px-6 flex lg:px-8">
        <Sidebar />
        <HomePage />
      </div>
    </>
  );
}
