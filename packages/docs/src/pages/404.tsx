import React from 'react';
import { Button, Page, Text } from '@app/components';

const Error: React.FC = () => {
    return (
        <Page layout="error">
            <Text size="body">
                404 | Page Not Found
            </Text>
            <Button text to="ROUTE:HOME">
                GO TO Home
            </Button>
        </Page>
    )
}

export default Error;