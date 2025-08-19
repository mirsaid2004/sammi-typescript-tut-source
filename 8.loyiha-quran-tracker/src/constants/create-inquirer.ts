import type { DistinctQuestion } from "inquirer";

export const CREATE_ENQUERY: Array<DistinctQuestion> = [
            {
                type: "input",
                name: "surah",
                message: "Enter Surah name",
            }, 
            {
                type: "input",
                name: "fromAyah",
                message: "From which Ayah?",
            }, 
            {
                type: "input",
                name: "toAyah",
                message: "To which Ayah?",
            }
        ]