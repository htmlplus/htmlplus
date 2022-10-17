import { ClassBody, ClassDeclaration, ClassMethod, ClassProperty, File } from '@babel/types';

export interface Context {
  // TODO
  assets?: string;
  customElementNames?: Array<string>;
  dependencies?: Array<Context>;
  dependenciesUnresolved?: Array<string>;
  isInvalid?: boolean;
  script?: string;
  outputs?: Array<{
    name: string;
    options?: any;
    output?: any;
  }>;

  // readme
  readmeContent?: string;
  readmePath?: string;

  // component
  componentClassName?: string;
  componentInterfaceName?: string;
  componentKey?: string;
  componentTag?: string;

  // directory
  directoryName?: string;
  directoryPath?: string;

  // file
  fileAST?: File;
  fileContent?: string;
  fileExtension?: string;
  fileName?: string;
  filePath?: string;

  // style
  styleContent?: string;
  styleDependencies?: Array<string>;
  styleParsed?: string;
  stylePath?: string;

  // class
  class?: ClassDeclaration;
  classEvents?: Array<ClassProperty>;
  classHasMount?: boolean;
  classHasUnmount?: boolean;
  classMembers?: ClassBody['body'];
  classMethods?: Array<ClassMethod>;
  className?: string;
  classProperties?: Array<ClassProperty>;
  classRender?: ClassMethod;
  classStates?: Array<ClassProperty>;
}
