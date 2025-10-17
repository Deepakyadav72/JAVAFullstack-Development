import { SearchParams } from "./params";

test("test the params",()=>{
    expect(
        SearchParams(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=10`,`_page`)
    ).toBe(10)
});