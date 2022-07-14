export interface ExampleProps {
  value?: {
    links?: Array<{
      icon?: string;
      key?: string;
      title?: string;
      url?: string;
    }>;
    tabs?: Array<{
      content?: string;
      disabled?: boolean;
      key?: string;
      title?: string;
    }>;
    title?: string;
  };
}
