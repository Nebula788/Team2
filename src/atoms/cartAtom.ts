import { atomWithStorage } from "jotai/utils";
import { Book } from "@/app/product/page";
export const cartAtom = atomWithStorage<Book[]>("Cart", []);
