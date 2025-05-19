
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories, getServicesByCategory } from '../components/projects/htdata';
import {
    Calendar,
    FileText,
    Building,
    Users,
    Video,
    DollarSign,
    UserCircle,
    BarChart,
    ArrowRight,
    MapPin,
    Star,
    CheckCircle,
    Zap
} from 'lucide-react';


import AppointmentModal from '../components/utility/AppointmentModal';



const iconMap = {
    calendar: Calendar,
    'file-medical': FileText,
    building: Building,
    users: Users,
    video: Video,
    'dollar-sign': DollarSign,
    'user-circle': UserCircle,
    'bar-chart': BarChart
};

const HTServices: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <div className="min-h-screen bg-white font-work-sans-slab">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple via-purple/90 to-purple/80 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">Best HealthTech Company in Delhi NCR</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-pt-serif mb-6 leading-tight">
                            RNA HealthTech Services
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                            As the best healthtech company in Delhi NCR, RNA HealthTech delivers comprehensive digital solutions that transform healthcare delivery, enhance patient care, and optimize practice operations across the healthcare ecosystem.
                        </p>

                        {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">500+</span>
                <span className="block text-sm">Healthcare Clients</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">8</span>
                <span className="block text-sm">Core Services</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">99.9%</span>
                <span className="block text-sm">Uptime</span>
              </div>
            </div> */}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const section = document.getElementById('services');
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' })
                                    }
                                }}
                                className="bg-white text-purple px-8 py-4 rounded-lg font-semibold hover:bg-grey transition-colors duration-300 shadow-lg">
                                Explore All Services
                            </button>
                            <button
                                onClick={openModal}
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />



            {/* Services by Category */}
            {Object.entries(serviceCategories).map(([category, serviceIds], categoryIndex) => (
                <section key={category} id='services' className={`py-16 lg:py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-lavender/20'}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif text-black mb-4">
                                    {category}
                                </h2>
                                <p className="text-lg text-black/70 max-w-3xl mx-auto">
                                    {category === 'Practice Management'
                                        ? 'Streamline operations with intelligent automation and workflow optimization solutions'
                                        : category === 'Clinical Solutions'
                                            ? 'Advanced clinical tools that enhance patient care and provider efficiency'
                                            : 'Data-driven insights and growth strategies for modern healthcare practices'}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {getServicesByCategory(category).map((service) => {
                                    const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Star;
                                    return (
                                        <div key={service.id} className="group bg-white hover:bg-verylight border border-lavender rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                                            <div className="p-6">
                                                {/* Service Header */}
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-purple/10 group-hover:bg-purple/20 p-3 rounded-lg mr-4 transition-colors duration-300">
                                                        <IconComponent className="h-8 w-8 text-purple" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold font-pt-serif text-black group-hover:text-purple transition-colors duration-300 line-clamp-2">
                                                            {service.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Service Description */}
                                                <p className="text-black/70 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {service.description}
                                                </p>

                                                {/* Key Features Preview */}
                                                <div className="mb-6">
                                                    <h4 className="font-semibold text-black mb-3 flex items-center text-sm">
                                                        <Zap className="h-4 w-4 mr-2 text-purple" />
                                                        Key Features
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {service.keyFeatures.slice(0, 3).map((feature, index) => (
                                                            <li key={index} className="flex items-start text-xs">
                                                                <CheckCircle className="h-4 w-4 text-purple mr-2 mt-0.5 flex-shrink-0" />
                                                                <span className="text-black/60 line-clamp-1">
                                                                    {feature.length > 60 ? feature.substring(0, 60) + '...' : feature}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {service.keyFeatures.length > 3 && (
                                                        <p className="text-xs text-purple mt-2">
                                                            +{service.keyFeatures.length - 3} more features
                                                        </p>
                                                    )}
                                                </div>

                                                {/* CTA Button */}
                                                <Link
                                                    to={`/healthtech-services-best-healthtech-company-in-delhi-ncr/${service.slug}`}
                                                    className="group/btn w-full bg-purple hover:bg-purple/90 text-white py-3 px-4 rounded-lg transition-colors duration-300 font-semibold text-center block"
                                                >
                                                    <span className="flex items-center justify-center">
                                                        Learn More
                                                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Trust Indicators  
      <section className="py-16 lg:py-20 bg-gradient-to-r from-purple/5 to-lightpurple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif text-black mb-4">
                Why RNA HealthTech is Delhi NCR's Choice
              </h2>
              <p className="text-lg text-black/70 max-w-3xl mx-auto">
                Trusted by leading healthcare providers for innovative, reliable, and scalable technology solutions
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: '500+',
                  label: 'Healthcare Providers',
                  description: 'Across Delhi NCR trust our solutions'
                },
                {
                  metric: '2M+',
                  label: 'Patients Served',
                  description: 'Through our platform annually'
                },
                {
                  metric: '99.9%',
                  label: 'System Uptime',
                  description: 'Ensuring uninterrupted operations'
                },
                {
                  metric: '24/7',
                  label: 'Support Available',
                  description: 'Round-the-clock technical assistance'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center border border-lavender shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-purple mb-2">{item.metric}</div>
                  <div className="font-semibold text-black mb-2">{item.label}</div>
                  <div className="text-sm text-black/60">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-purple to-purple/90">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif mb-6">
                            Ready to Transform Your Healthcare Practice?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                            Join the leading healthcare revolution in Delhi NCR. Get personalized consultation for your specific needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <button className="bg-white text-purple px-8 py-4 rounded-lg font-semibold hover:bg-grey transition-colors duration-300 shadow-lg">
                                Book Free Call
                            </button>

                        </div>

                        <div className="text-sm text-white/80">
                            <p>Contact RNA HealthTech today and discover how we can revolutionize your healthcare operations</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HTServices;