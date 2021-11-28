import { ClassBody, ClassDeclaration, ClassMethod, ClassProperty, File } from '@babel/types';
export interface Context {
    ast?: File
    component?: ClassDeclaration;
    members: ClassBody['body'];
    content: string;
    filename: string;
    directory: string;
    name?: string;
    key?: string;
    tag: string;
    title?: string;
    stylePath?: string;
    attributes?: ClassBody['body'];
    events: Array<ClassProperty>;
    methods: Array<ClassMethod>;
    properties: Array<ClassProperty>;
    states: Array<ClassProperty>;
    hasMount?: boolean;
    hasUnmount?: boolean;
    render?: ClassMethod;
    // style?: string;
    styleParsed?: string;
    styleDependencies?: Array<string>;
}