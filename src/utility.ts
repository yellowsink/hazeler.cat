import {v} from "mingine-engine";

export type PickPartial<TObj, TPicks extends keyof TObj> = Partial<Pick<TObj, TPicks>> &
	Omit<TObj, TPicks>;

export const aspectRatio = () => innerWidth / innerHeight;

const simulationSize = 3;


export const screenSize = () => v(simulationSize * aspectRatio(), simulationSize);

export const renderScale = () => innerHeight / simulationSize;