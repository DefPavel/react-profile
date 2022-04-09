import React, { useState } from "react";
import clsx from "clsx";

const TabsLayout = ({ tabsArr = [], selectedTab }) => {
    const [activeTab, setActiveTab] = useState(1);

    const parseTabs = () => {
        const tabs = [];

        for (let i = 0; i < tabsArr.length; i++) {
            tabs.push(
                <li
                    key={i}
                    className={clsx(
                        "tabs__nav tabs__nav",
                        i + 1 === activeTab && "tabs__nav tabs__nav_active"
                    )}
                    onClick={() => changeTab(i + 1)}
                >
                    {tabsArr[i]}
                </li>
            );
        }

        return tabs;
    };

    const changeTab = (focusTab) => {
        setActiveTab(focusTab);
        selectedTab(focusTab);
    };

    return (
        <div className='tabs'>
            <ul>{parseTabs()}</ul>
        </div>
    );
};

export default TabsLayout;