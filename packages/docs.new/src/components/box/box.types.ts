export type Spacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export interface BoxProps {
    hidden?: boolean,
    textAlign?: 'center' | 'start' | 'end' | 'right' | 'left' | 'justify'
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    p?: Spacing;
    pt?: Spacing;
    pr?: Spacing;
    pb?: Spacing;
    pl?: Spacing;
    px?: Spacing;
    py?: Spacing;
    m?: Spacing | 'auto';
    mt?: Spacing | 'auto';
    mr?: Spacing | 'auto';
    mb?: Spacing | 'auto';
    ml?: Spacing | 'auto';
    mx?: Spacing | 'auto';
    my?: Spacing | 'auto';
    style?: any;
}
