import { addition } from "../operations/addition";
import { division } from "../operations/division";
import { multiplication } from "../operations/multiplication";
import { substraction } from "../operations/substraction";
import { Operation } from "../types/Operation";


//function to map the operation type to the arithmetic function correctly
export const operationsMap: Record<string, Operation> = {
    '+': addition,
    '-': substraction,
    '*': multiplication,
    '/': division,
};

