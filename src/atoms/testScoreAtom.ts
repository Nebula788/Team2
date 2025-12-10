import { atomWithStorage } from "jotai/utils";

export const testScoreAtom = atomWithStorage<number | null>("score", null);
