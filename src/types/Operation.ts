export type Operation = (number1: number, number2: number) => Promise<number | string>;

export type OperationResult = {
    operation: string;
    inputs: {
        number1: number;
        number2: number;
    };
    result: number | string;
    timestamp: string;
    responseTime: string;
};
