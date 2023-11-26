// fonts
import {Sora} from '@next/fonts/google';
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weights: [100, 200, 300, 400, 500, 600, 700, 800],
});

const Layout = ({children}) => {
    return <div>
        <TopLeftImg/>
        <Nav/>
        <Header/>
        {children}
    </div>;
};

export default Layout;
