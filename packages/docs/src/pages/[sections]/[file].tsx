import React from 'react';
import * as glob from 'glob';
import matter from 'gray-matter';
import { Markup, Page, Text } from '@app/components';

const All: React.FC<any> = (props) => {

    const { content, data } = props;

    return (
        <Page layout="default">
            <Text>{data.title}</Text>
            <Markup>{content}</Markup>
        </Page>
    )
}

export default All;

export const getStaticProps = async ({ params }) => {

    const file = await import(`../../content/en/${params.sections}/${params.file}.md`);

    const { content, data } = matter(file.default) || {};

    return {
        props: {
            content,
            data
        }
    }
}

export const getStaticPaths = async () => {

    const base = './src/content/en';

    const paths = glob.sync(`${base}/**/*.md`).map((file) => file.replace(base, '').replace('.md', ''));

    return {
        paths,
        fallback: false,
    };
}