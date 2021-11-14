import React from 'react';
import matter from 'gray-matter';
import nookies from 'nookies';
import { Markup, Page, Text } from '@app/components';

const Installation = (props) => {

    const { content, data } = props;

    return (
        <Page layout="default">
            <Text>{data.title}</Text>
            <Markup>{content}</Markup>
        </Page>
    )
}

export const getServerSideProps = async (context) => {

    const framework = nookies.get(context).framework || 'react';

    const file = await import(`../../content/en/getting-started/installation.${framework}.md`);

    const { content, data } = matter(file.default) || {};

    return {
        props: {
            content,
            data
        }
    }
}

export default Installation;