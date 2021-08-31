import React from "react";
import Scales from "../components/Poll/CreatePoll/PollType/Scales";
import renderer from "react-test-renderer";

describe("Testing Snapshot for Scales.js",()=>{
    it("Renders",()=>{
        const tree = renderer.create(<Scales data5={[""]} inputList={[""]} textcolor={[""]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})