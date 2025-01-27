import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    padding: 7.5rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        padding: 5.5rem 0 3rem;
    }
`;

export const Content = styled('p')`
    padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled('div')`
    max-width: 1200px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const ProjectGrid = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ProjectCard = styled('div')`
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const ProjectImage = styled('img')`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
`;

export const ProjectTitle = styled('h3')`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled('p')`
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
`;
