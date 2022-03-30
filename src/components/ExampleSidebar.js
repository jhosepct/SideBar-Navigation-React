import React, { useEffect, useState } from 'react'
import SidebarContent from './sidebar/Layout/SidebarContent';
import SidebarFooter from './sidebar/Layout/SidebarFooter';
import SiderbarHeader from './sidebar/Layout/SiderbarHeader';
import Menu from './sidebar/Menu/Menu';
import SideBar from './sidebar/SideBar';
import LogoImage from '../assets/img/logo.png';
import Content from './Content';
import Section from './sidebar/Section';

function ExampleSidebar(props) {
    const [inactive, setInactive] = useState(true);
    useEffect(() => {
        loadDarkMode();
    }, [])
    function sideBar(params) {
        setInactive(params);
    }
    function loadDarkMode() {
        const darkmode = localStorage.getItem('dark-mode');
        const body = document.body;

        if (!darkmode) {
            localStorage.setItem('dark-mode', 'false');
        } else if (darkmode === 'true') {
            body.classList.add('dark-mode');
        }
    }
    return (
        <>
            <Section>
                <SideBar /*background={Background} */ onCollapse={(inactive)}  >
                    <SiderbarHeader nameHeader="Jhosep CT" logo={LogoImage} sideBar={sideBar} />
                    <SidebarContent>
                        <Menu />
                    </SidebarContent>
                    <SidebarFooter />
                </SideBar>
                <Content inactive={(inactive)} sideBar={sideBar} />
            </Section>
        </>
    )
}

export default ExampleSidebar