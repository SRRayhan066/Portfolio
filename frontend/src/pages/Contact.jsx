import React from 'react';
import { useEffect } from 'react';
import mail from '../assets/gmail.png';
import url from '../assets/link.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import linkedIcon from '../assets/linkedin.png';

import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, Input, ConfigProvider } from 'antd';

const Contact = ({setShow}) => {
    const [state, handleSubmit] = useForm("xnnayjrd");
    const {TextArea} = Input;

    const facebookLink = 'https://www.facebook.com/srrayhan066/';
    const linkedInLink = 'https://www.linkedin.com/in/s-r-rayhan066/';
    const instaLink = 'https://www.instagram.com/s_r_rayhan66';

    useEffect(() => {
        if (state.succeeded) {
          setShow(true);
    
          // Automatically set show to false after 2 seconds
          const timer = setTimeout(() => {
            setShow(false);
          }, 2000);
    
          // Cleanup the timer if component unmounts
          return () => clearTimeout(timer);
        }
      }, [state.succeeded, setShow]);

    return (
        <div className='py-[6vh]' id='contact'>
            <div className='flex flex-col justify-center items-center space-y-5 px-[8vw] pt-1'>
                <div>
                    <h1 className='font-silkscreen
                                  sm:text-5xl
                                  xs:text-4xl'>Contact Me</h1>
                </div>
                <div>
                    <p className='lg:text-lg lg:w-[55vw] lg:text-center
                                  md:text-xl md:w-[65vw] md:text-center
                                  xs:text-md xs:w-[70vw] xs:text-center
                                  '>
                        Here I provide my mails and social acounts to connect with me. If you are interested to hire me, you can connect me via mail or linkedin.
                    </p>
                </div>
            </div>
            <div className='flex justify-center mt-5 font-serif w-[auto] 
                            xl:gap-x-[18vw]
                            lg:gap-x-[10vw] lg:flex-row lg:items-center lg:px-0 lg:gap-y-0
                            md:flex-col md:items-start md:px-[15vw] md:gap-y-7
                            xs:flex-col xs:items-start xs:px-[15vw] xs: gap-y-5'>
                <div className='flex flex-col items-start  '>
                    <div className='flex justify-center items-center gap-x-2'>
                        <img className='w-6' src={mail}></img>
                        <h2 className='font-semibold text-lg'>Mails</h2>
                    </div>
                    <div className='my-3'>
                        <p>shafikulrahman66@gmail.com</p>
                        <p>shafikulrahmanrayhan@gmail.com</p>
                    </div>
                    
                    <div className='flex justify-center items-center gap-x-2'>
                        <img className='w-6' src={url}></img>
                        <h2 className='font-serif font-semibold text-lg'>Social Accounts</h2>
                    </div>
                    <div className='my-3 flex items-center gap-x-2'>
                        <img className='w-8 cursor-pointer' src={facebookIcon} onClick={() => window.open(facebookLink, '_blank', 'noopener noreferrer')}></img>
                        <img className='w-8 cursor-pointer' src={instagramIcon} onClick={() => window.open(instaLink, '_blank', 'noopener noreferrer')}></img>
                        <img className='w-8 cursor-pointer' src={linkedIcon} onClick={() => window.open(linkedInLink, '_blank', 'noopener noreferrer')}></img>
                    </div>
                </div>

                <div className=' w-[auto] font-serif flex flex-col items-start gap-y-1'>
                    <div>
                        <h2 className='font-serif font-semibold text-lg'>Provide your information to send message.</h2>
                    </div>
                    <div className='w-[100%]'>
                        <Form  labelAlign='left' onFinish={handleSubmit} autoComplete='off'
                            labelCol={{
                                md:{span:4},
                                xs:{span:24}
                            }}
                            wrapperCol={{
                                md:{offset:1}
                            }}>
                            <Form.Item className='md:mb-3 xs:mb-1' label={<span className="font-serif">E-mail</span>}  name='email' rules={[
                                {required:true,message:'Enter your e-mail'},
                                {type:'email',message:'Please enter a valid e-mail'}]} hasFeedback>
                                <Input className='border-black hover:border-emerald-500' placeholder='E-mail'></Input>
                            </Form.Item>

                            <Form.Item className='md:mb-3 xs:mb-1' label={<span className="font-serif">Name</span>} style={{sm:{ marginBottom: '1vh' }}} name='name' rules={[
                                {required:true,message:'Enter your Name'}]} hasFeedback>
                                <Input className='border-black hover:border-emerald-500' placeholder='Name'></Input>
                            </Form.Item>

                            <Form.Item label={<span className="font-serif">Message</span>} name='message' rules={[
                                {required:true,message:'Enter your Message'},
                                {message:'Please enter a valid e-mail'}]} hasFeedback>
                                <TextArea className='border-black hover:border-emerald-500' placeholder='Message...'></TextArea>
                            </Form.Item>
                            
                            <ConfigProvider
                                theme={{
                                    token: {
                                    colorPrimary: '#50C878',
                                    },
                                }}
                                >
                                <Form.Item wrapperCol={{
                                    md:{ offset: 5, span: 5 },
                                    xs:{span:12}
                                    }}>
                                    <Button size='large' type='primary' htmlType='submit' block>
                                    Submit
                                    </Button>
                                </Form.Item>
                            </ConfigProvider>
                        </Form>
                    </div>
                    
                </div>
            </div>  
        </div>
    );
};

export default Contact;