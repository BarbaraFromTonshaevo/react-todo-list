import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;
    padding: 20px;
`

const Code = styled.div`
    font-size: 120px;
    font-weight: 700;
    line-height: 1;
    color: #4682b4;
`

const HomeLink = styled(Link)`
    padding: 12px 28px;
    border-radius: 24px;
    background-color: #4682b4;
    color: #fff;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`

export const NotFound = () => {
    return (
        <Wrapper>
            <Code>404</Code>
            <h1>Страница не найдена</h1>
            <p>Такой страницы нет или задача была удалена.</p>
            <HomeLink to="/">На главную</HomeLink>
        </Wrapper>
    )
}
