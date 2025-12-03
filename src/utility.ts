export type PickPartial<TObj, TPicks extends keyof TObj> = Partial<Pick<TObj, TPicks>> &
	Omit<TObj, TPicks>;
