import styled from "styled-components";

export const Container = styled.ul`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

export const ListItem = styled.li`
    margin: 10px 0;
    width: 480px;
    border: 0.5px solid rgb(0, 0, 0, 0.232);
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    background-color: white;
`;