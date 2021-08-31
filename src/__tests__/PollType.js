import React from "react";
import PollType from "../components/Poll/CreatePoll/PollType/PollType";
import renderer from "react-test-renderer";

describe("Testing Snapshot for PollType.js",()=>{
    it("Renders",()=>{
        const tree = renderer.create(<PollType clickHandler={[""]} handleChangeIndex={[""]} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})