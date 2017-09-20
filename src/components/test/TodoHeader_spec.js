import React from "react";
import TodoHeader from "../TodoHeader";
import { shallow } from "enzyme";

describe("TodoHeader - number 2", () => {
  const addtodo = () => (text = "Redux");
  const component = shallow(<TodoHeader addtodo={addtodo} />);

  it("should render componet", () => {
    expect(component).to.be.present();
  });

  it("should have correct classname and attribute", () => {
    expect(component).to.have.className("edit");
    expect(component).to.have.attr("type", "text");
  });

  it("handle change event", () => {
    const event = {
      target: {
        value: "Shaban"
      }
    };
    component.simulate("change", event);
    expect(component.state().text).to.eql(event.target.value);
  });

  it("handle onKeyPress change", () => {
    const addtodoSpy = sinon.spy();

    const actions = {
      addtodo: sinon.spy()
    };
    const component = shallow(<TodoHeader addtodo={actions.addtodo} />);

    expect(actions.addtodo).to.have.not.been.called;

    component.setState({ text: "shaban" });
    component.simulate("keypress", { key: "Enter" });

    expect(actions.addtodo).to.have.been.calledWith(
      sinon.match.string,
      sinon.match.number,
      sinon.match.number,
      sinon.match.string,
      sinon.match.any
    );
  });

  it("Render a todoheader with searchbox", () => {
    expect(component).to.be.present();
    expect(component).to.have.className("edit");
    expect(component).to.have.attr("type", "text");

    const event = {
      target: {
        value: "Shaban"
      }
    };
    component.simulate("change", event);
    expect(component.state().text).to.eql(event.target.value);

    //     var input = findRenderedDOMComponentWithTag(component, "input");
    //     Simulate.change(input);
    //     Simulate.keyDown(input, { key: "Entrer", keyCode: 13, which: 13 });
  });
});
