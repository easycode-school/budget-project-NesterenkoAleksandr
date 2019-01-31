/**
 * Интерфейс описывающий элемент бюджетной строки (доход/расход)
 */
export interface IBudgetItem {
    type: string;
    description: string;
    value: number;
}
