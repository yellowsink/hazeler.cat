import {createEngine} from "mingine-engine";
import {buildScene} from "./scene.ts";

import "./styles.sass";

const engine = createEngine(buildScene());

const root = document.getElementById("mingine-root")!;
engine.mount(root);

const onResize = () => {
	try { engine.stop(); } catch {}
	engine.scene = buildScene(engine.scene);
	engine.start();
};

setTimeout(onResize, 1000);

// set canvas size from the screen size
addEventListener("resize", onResize);

// @ts-expect-error
window.engine = engine;