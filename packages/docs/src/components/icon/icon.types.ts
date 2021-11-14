import { Colors } from '@app/types';

export interface IconProps {
    color?: Colors;
    name: Icons,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export type Icons = 'arrow-right' | 'intersection' | 'copy' | 'animations' | 'components' | 'features' | 'getting-started' | 'introduction' | 'aspect-ratio' | 'dependency-free' | 'sandbox' | 'cross-framework' | 'dialog' | 'drawer' | 'grid' | 'lightweight' | 'performance' | 'simple' | 'zero-config' | 'menu' | 'linkedin' | 'next' | 'prev' | 'code' | 'download' | 'git' | 'github' | 'instagram' | 'twitter' | 'htmlplus';
