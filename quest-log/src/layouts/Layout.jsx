import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
