import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../common/Button';
import {
    MiddleBlockSection,
    // Content,
    ContentWrapper,
    ProjectGrid,
    ProjectCard,
    ProjectImage,
    ProjectTitle,
    ProjectDescription,
} from './styles';

interface Project {
    name: string;
    image: string;
    description: string;
    link: string;
}

interface MiddleBlockProps {
    title: string;
    projects: Project[];
    t: TFunction;
}

const MiddleBlock = ({ title, projects, t }: MiddleBlockProps) => {
    return (
        <MiddleBlockSection>
            <Slide direction="up" triggerOnce>
                <Row justify="center" align="middle">
                    <ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <h6>{t(title)}</h6>
                            <ProjectGrid>
                                {projects.map((project, index) => (
                                    <ProjectCard key={index}>
                                        <ProjectImage
                                            src={project.image}
                                            alt={project.name}
                                        />
                                        <ProjectTitle>
                                            {t(project.name)}
                                        </ProjectTitle>
                                        <ProjectDescription>
                                            {t(project.description)}
                                        </ProjectDescription>
                                        <Button
                                            name="view-project"
                                            onClick={() =>
                                                window.open(
                                                    project.link,
                                                    '_blank'
                                                )
                                            }
                                        >
                                            {t('View Project')}
                                        </Button>
                                    </ProjectCard>
                                ))}
                            </ProjectGrid>
                        </Col>
                    </ContentWrapper>
                </Row>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
