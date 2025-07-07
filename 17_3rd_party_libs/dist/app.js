import _ from "lodash";
import fs from "node:fs";
import { z } from "zod";
const numbers = [1, 2, 3, 4, 5];
// split into multiple arrays
const chunkedArray = _.chunk(numbers, 2);
const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()])),
});
function output(data) {
    console.log(data);
}
const content = JSON.parse(fs.readFileSync("data.json").toString());
const parsedData = dataSchema.parse(content);
output(parsedData);
//# sourceMappingURL=app.js.map