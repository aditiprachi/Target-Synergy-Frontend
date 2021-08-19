import React from "react";

import Main from "./Main";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter:new Adapter()});

describe("testing main page",() => {

    test("welcome msg",()=> {
     
        const wrapper = shallow(<Main />)
        expect(wrapper.find('h1').text()).toContain("Welcome to Target Synergy")  ;
    });


    test("welcome msg 2",()=> {
     
        const wrapper = shallow(<Main />)
        expect(wrapper.find('p').text()).toContain("Helps provide instant solutions on opinions, feedback and polls from your targeted audience as their opinion matters.")    ;
    });

});