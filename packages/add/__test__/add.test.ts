import {add} from "../add";

describe("test add", () => {
    it("should add(1,1) return 2", () => {
        expect(add(1, 1)).toBe(2)
    })
})