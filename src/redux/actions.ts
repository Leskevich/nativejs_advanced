export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


// const CHANGE_CHANGE_ACTION = "CHANGE_CHANGE_ACTION"


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload: {
            amountOfBYN,
            amountOfCurrency
        }
    }as const
};

export const ChangeActionAC = (isBuying: boolean) => {
    return {
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload: {
            isBuying
        }
    } as const
};
export const СhangeCurrentCurrencyAC = (currentCurrency: string) => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        payload: {
            currentCurrency
        }
    } as const
};
export type CurrencyReducersTypes = ReturnType<typeof ChangeCurrencyFieldAC>
    | ReturnType<typeof ChangeActionAC>
    | ReturnType<typeof СhangeCurrentCurrencyAC>;