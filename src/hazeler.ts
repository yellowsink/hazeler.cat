import * as mg from "mingine-engine";
import type { PickPartial } from "./utility";

function d(degrees: number) {
	return (degrees * Math.PI) / 180;
}

export type HazelCreator = PickPartial<
	Omit<mg.CustomObjectCreator, "blOffset" | "collider">,

	"mass" | "momentOfInertia" | "pos" | "restitutionCoeff"
>;

export function createHazel(renderScale: number, o: HazelCreator) {
	const width = 859 / 1670;

	return mg.createObject({
		mass: 1,
		momentOfInertia: (1 + width ** 2) / 12, // don't think too hard abt it
		pos: mg.v(1, 0.75),
		restitutionCoeff: 0.8,

		...o,

		blOffset: mg.v(width / 2, 1 / 2),
		styles: {
			...o.styles,
			width: `${width * renderScale}px`,
			height: `${1 * renderScale}px`,
			background: "url(https://cdn.hyrule.pics/30e82fed8.png",
			"background-size": "cover",
		},
		//mg.createColliderRect(mg.vo(), mg.v(width, 1), 0),
		collider: mg.createColliderComposite(
			// head and ears
			mg.createColliderComposite(
				// head
				mg.createColliderCircle(
					0.19535000610351563,
					mg.v(0.19405833435058595, 0.8516666641235352)
				),

				// ears
				mg.createColliderComposite(
					// left
					mg.createColliderComposite(
						mg.createColliderCircle(
							0.03673332214355469,
							mg.v(0.14071666717529296, 0.9772666625976563)
						),
						mg.createColliderCircle(
							0.0559666748046875,
							mg.v(0.1528000030517578, 0.9442666702270508)
						)
					),
					// right
					mg.createColliderComposite(
						mg.createColliderCircle(0.0437166748046875, mg.v(0.27425833129882815, 0.959)),
						mg.createColliderCircle(
							0.08216667175292969,
							mg.v(0.2640499954223633, 0.925091667175293)
						)
					)
				)
			),
			// body
			mg.createColliderComposite(
				// body legs and feet
				mg.createColliderComposite(
					mg.createColliderComposite(
						// body
						mg.createColliderRect(
							mg.v(0.17655833435058593, 0.6407666625976562),
							mg.v(0.1101303482055664, 0.2709556274414063),
							d(4.293711)
						),
						// legs
						mg.createColliderRect(
							mg.v(0.2080250015258789, 0.2719166870117187),
							mg.v(0.17481007385253905, 0.513941650390625),
							d(-5.3837697)
						)
					),

					// feet
					mg.createColliderRect(
						mg.v(0.22636666107177733, 0.026758346557617187),
						mg.v(0.19753538513183594, 0.04982087326049805),
						0
					)
				),

				mg.createColliderComposite(
					// arms
					mg.createColliderComposite(
						// left
						mg.createColliderComposite(
							mg.createColliderRect(
								mg.v(0.048508331298828124, 0.7181166687011719),
								mg.v(0.062057571411132814, 0.1791803436279297),
								d(-9.2486366)
							),
							mg.createColliderRect(
								mg.v(0.09876666259765625, 0.6988833312988281),
								mg.v(0.04020632171630859, 0.18792083740234375),
								d(32.75737)
							)
						),
						// right
						mg.createColliderRect(
							mg.v(0.29192500305175784, 0.5961916809082031),
							mg.v(0.05593922805786133, 0.2971771545410156),
							d(-29.129016)
						)
					),

					// tail
					mg.createColliderComposite(
						mg.createColliderCircle(
							0.2168000030517578,
							mg.v(0.4072999954223633, 0.32786666107177737)
						),
						mg.createColliderRect(
							mg.v(0.3115916519165039, 0.4309916534423828),
							mg.v(0.027095561981201173, 0.1625733642578125),
							0
						)
					)
				)
			)
		),
	});
}
