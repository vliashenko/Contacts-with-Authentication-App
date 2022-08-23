import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 48px;
    text-align: center;
`;

const HomeView = () => {
    return (
        <Container>
            <Title>
                Welcome page of this service
                <span role="img" aria-label="Иконка приветствия">
                    💁‍♀️
                </span>
            </Title>
        </Container>
    );
};

export default HomeView;