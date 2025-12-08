import { atom} from "jotai"
import { Book } from "@/app/product/page"
export const cartAtom = atom<Book[]>([])