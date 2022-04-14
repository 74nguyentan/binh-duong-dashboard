export interface ChartSingle {
    name: string;
    title: string;
    value: number;
}

export interface ChartMultiple {
    name: string;
    title: string;
    value: number;
    series: Array<ChartSingle>;
}
