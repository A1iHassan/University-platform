import { Outlet } from "react-router";
import NavigationBar from "../components/navBar";
import Footer from "../components/footer";

const MainLayout = () => {

	return (
		<main className="">
		  <NavigationBar />
		  <div>
		    <Outlet />
		  </div>
		  <Footer />
		</main>
	);

}

export default MainLayout;
