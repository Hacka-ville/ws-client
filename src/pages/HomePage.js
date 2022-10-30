import React from 'react';
import {DoubleHeader} from "../components/Header";

const HomePage = () => {
    return <React.Fragment>
        <DoubleHeader mainLinks={[{
            label: "Home",
            link: "/home/user"
        },
            {
                label: "User",
                link: "/user"
            }]} userLinks={[{ label: "Login", link: "/login"}]}/>
    <div>
        Home page!
    </div>
    </React.Fragment>
}

export default HomePage;