import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <>
            <Section className="text-center pt-24 pb-12 bg-cream">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Contact Us</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Have questions? Get in touch with our team.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
                        <p className="text-gray-600">
                            We are here to assist you with registration, sponsorship, or general inquiries.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl"><FaPhone /></div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
                                <p className="text-lg font-medium">+91 81 3789 8323 | +91 95627 42433</p>
                                <p className="text-lg font-medium">+44 791 704 4585</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl"><FaEnvelope /></div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                                <p className="text-lg font-medium">londonquranfest@gmail.com</p>
                                <p className="text-lg font-medium">academy@alihsan.co.uk</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl"><FaMapMarkerAlt /></div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Address</p>
                                <p className="text-lg font-medium">Al Ihsan Academy, London, UK</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <a href="https://wa.me/918137898323" target="_blank" rel="noreferrer">
                                <Button variant="secondary" className="gap-2 flex items-center w-full md:w-auto justify-center bg-[#25D366] text-white hover:bg-[#128C7E] border-none">
                                    <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <Card className="p-0 h-[400px] w-full shadow-lg border-2 border-primary/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.90502179144!2d-0.12775838422973384!3d51.50735097963495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c541d11c9f%3A0x82b99216060c40e5!2sLondon!5e0!3m2!1sen!2suk!4v1628173456789!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </Card>

                </div>
            </Section>
        </>
    );
};

export default Contact;
