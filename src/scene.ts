import * as mg from "mingine-engine";
import {renderScale, screenSize} from "./utility.ts";
import {createHazel} from "./hazeler.ts";

export function buildScene(previousScene?: mg.Scene) {
	let screenSz = screenSize();

	const objects = [
		mg.createObject({
			id: "FLOOR",
			pos: mg.vo(),
			blOffset: mg.vo(),
			mass: Infinity,
			momentOfInertia: Infinity,
			// big giant rect
			collider: mg.createColliderRect(
				mg.v(screenSz.x / 2, -50),
				mg.v(screenSz.x, 100),
				0
			)
		}),

		mg.createObject({
			id: "WALL_LEFT",
			pos: mg.vo(),
			blOffset: mg.vo(),
			mass: Infinity,
			momentOfInertia: Infinity,
			// big giant rect
			collider: mg.createColliderRect(
				mg.v(-50, screenSz.y / 2),
				mg.v(100, screenSz.y * 1.2),
				0
			)
		}),

		mg.createObject({
			id: "WALL_RIGHT",
			pos: mg.vo(),
			blOffset: mg.vo(),
			mass: Infinity,
			momentOfInertia: Infinity,
			// big giant rect
			collider: mg.createColliderRect(
				mg.v(screenSz.x + 50, screenSz.y / 2),
				mg.v(100, screenSz.y * 1.2),
				0
			)
		}),

		mg.createObject({
			id: "CEILING",
			pos: mg.vo(),
			blOffset: mg.vo(),
			mass: Infinity,
			momentOfInertia: Infinity,
			// big giant rect
			collider: mg.createColliderRect(
				mg.v(screenSz.x / 2, screenSz.y + 50),
				mg.v(screenSz.x, 100),
				0
			)
		}),
	];

	// create hazelers
	if (!previousScene) {
		objects.push(
			createHazel(renderScale(), {
				id: "HAZEL_0",
				pos: mg.v(1, 0.75),
				angle: 1
			}),
			createHazel(renderScale(), {
				id: "HAZEL_1",
				pos: mg.v(.5, 0.75),
				velocity: mg.v(7, 0)
			}),
			createHazel(renderScale(), {
				id: "HAZEL_2",
				pos: mg.v(3, 0.75),
				velocity: mg.v(-15, 0)
			})
		);
	}
	else {
		const oldHazels = previousScene.getObjects().filter(h => h.id.startsWith("HAZEL_"));

		for (let i = 0; i < oldHazels.length; i++){
			const hazel = createHazel(renderScale(), { id: "HAZEL_" + i });
			hazel.physicsObj = {...oldHazels[i].physicsObj};
			objects.push(hazel)
		}
	}

	return mg.createScene({
		canvasSize: screenSz,
		scale: renderScale(),
		objects
	});
}