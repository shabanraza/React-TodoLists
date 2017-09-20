import jsdom from "jsdom";
import chai from "chai";
import chaiImmutable from "chai-immutable";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chaienzyme from "chai-enzyme";
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
const win = doc.defaultView;
global.document = doc;
global.expect = chai.expect;
global.window = win;
global.sinon = sinon.sandbox.create();
chai.use(sinonChai);
chai.use(chaienzyme());

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
