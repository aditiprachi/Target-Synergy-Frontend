import React from "react";
import ContentScales from "../components/Poll/CreatePoll/ContentType/ContentScales";
import renderer from "react-test-renderer";

describe("Testing Snapshot for ContentScales.js",()=>{
    it("Renders",()=>{
        const tree = renderer.create(<ContentScales setData5 = {["abc"]} data5 = {["xyz"]} setInputList={["ab"]} inputList={["ab"]} handleChangeIndex={["ab"]} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})