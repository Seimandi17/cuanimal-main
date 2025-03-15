import { Outlet, Link } from "react-router-dom";
import '../styles/PagesStyles.css'
import NavBar from "../components/NavBar";
import ModalBar from "../components/ModalBar";
import Footer from '../components/layout/Footer';

export default function PageLayout() {
  return (
    <>
      <NavBar />
      <div className="">
        <ModalBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
