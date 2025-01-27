import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { ContactProps, ValidationTypeProps } from './types';
import { useForm } from '../../common/utils/useForm';
import validate from '../../common/utils/validationRules';
import { Button } from '../../common/Button';
import Block from '../Block';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = ({ title, content, id, t }: ContactProps) => {
    const { values, errors, handleChange, handleSubmit } = useForm(validate);

    const ValidationType = ({ type }: ValidationTypeProps) => {
        const ErrorMessage = errors[type as keyof typeof errors];
        return <Span>{ErrorMessage}</Span>;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Replace with your EmailJS Service ID, Template ID, and User ID
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
        const userId = process.env.REACT_APP_EMAILJS_USER_ID!;

        emailjs
            .send(
                serviceId,
                templateId,
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                },
                userId
            )
            .then(
                (response) => {
                    console.log(
                        'Email sent successfully!',
                        response.status,
                        response.text
                    );
                    alert('Your message has been sent!');
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    alert('Failed to send your message. Please try again.');
                }
            );
    };

    return (
        <ContactContainer id={id}>
            <Row justify="space-between" align="middle">
                <Col lg={12} md={11} sm={24} xs={24}>
                    <Slide direction="left" triggerOnce>
                        <Block title={title} content={content} />
                    </Slide>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Slide direction="right" triggerOnce>
                        <FormGroup autoComplete="off" onSubmit={sendEmail}>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={values.name || ''}
                                    onChange={handleChange}
                                />
                                <ValidationType type="name" />
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    value={values.email || ''}
                                    onChange={handleChange}
                                />
                                <ValidationType type="email" />
                            </Col>
                            <Col span={24}>
                                <TextArea
                                    placeholder="Your Message"
                                    value={values.message || ''}
                                    name="message"
                                    onChange={handleChange}
                                />
                                <ValidationType type="message" />
                            </Col>
                            <ButtonContainer>
                                <Button name="submit">{t('Submit')}</Button>
                            </ButtonContainer>
                        </FormGroup>
                    </Slide>
                </Col>
            </Row>
        </ContactContainer>
    );
};

export default withTranslation()(Contact);
