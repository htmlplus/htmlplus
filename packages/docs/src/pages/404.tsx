import React from 'react';
import { Button, Text } from '@app/components';
import { LayoutError } from '@app/layouts';

const Error: React.FC = () => {
    return (
        <LayoutError>
            <Text size="body">
                404 | Page Not Found
            </Text>
            <Button text to="ROUTE:HOME">
                GO TO Home
            </Button>
        </LayoutError>
    )
}

export default Error;