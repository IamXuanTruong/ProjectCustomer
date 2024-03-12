import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Library from "./Library/Library";
import Profile from "./Profile/Profile";

function MasterLayout({ Page }) {
    return (
        <>
            <Header />
            {Page}
            <Library />
            <Profile />
            <Contact />
            <Footer />
        </>
    );
}
export default MasterLayout;