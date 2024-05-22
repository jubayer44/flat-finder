import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar>
                {children}
            </Navbar>
            <Footer />
        </div>
    );
};

export default CommonLayout;