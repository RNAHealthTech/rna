import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../components/projects/htdata';
import { 
  Calendar, 
  FileText, 
  Building, 
  Users, 
  Video, 
  DollarSign, 
  UserCircle, 
  BarChart,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Award,
  Users2,
  Lightbulb
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

interface HServiceTemplateProps {
  serviceId?: string;
}

const HServiceTemplate: React.FC<HServiceTemplateProps> = ({ serviceId }) => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = serviceId 
    ? getServiceBySlug(serviceId) 
    : (slug ? getServiceBySlug(slug) : null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-verylight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Service Not Found</h1>
          <p className="text-lg text-black/70">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Star;

  return (
    <div className="min-h-screen bg-white font-work-sans-slab">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple via-purple/90 to-purple/80 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Best HealthTech Company in Delhi NCR</span>
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <IconComponent className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-pt-serif mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-white text-purple px-8 py-4 rounded-lg font-semibold hover:bg-grey transition-colors duration-300 shadow-lg">
                  Get Started Today
                </button> */}
                <button
                onClick={openModal}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Key Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif text-black mb-4">
                Comprehensive Features
              </h2>
              <p className="text-lg text-black/70 max-w-3xl mx-auto">
                Our {service.title.toLowerCase()} includes everything you need to transform your healthcare operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {service.keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-verylight hover:bg-lightpurple transition-colors duration-300 rounded-xl p-6 border border-lavender">
                  <div className="flex items-start">
                    <div className="bg-purple/10 group-hover:bg-purple/20 p-3 rounded-lg mr-4 transition-colors duration-300">
                      <Zap className="h-6 w-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2 group-hover:text-purple transition-colors duration-300">
                        {feature.split(':')[0] || feature.split('-')[0] || feature.substring(0, 30)}
                      </h3>
                      <p className="text-sm text-black/70 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-lavender/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif text-black mb-4">
                Transformative Benefits
              </h2>
              <p className="text-lg text-black/70 max-w-3xl mx-auto">
                See how RNA HealthTech's solutions drive measurable improvements in your practice
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-lavender hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-purple/10 p-3 rounded-lg mr-4">
                      <TrendingUp className="h-6 w-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-3 text-lg">
                        {benefit.split(' by ')[0] || benefit.split(' through ')[0] || benefit.substring(0, 50)}
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif text-black mb-4">
                Perfect For Your Practice
              </h2>
              <p className="text-lg text-black/70 max-w-3xl mx-auto">
                Trusted by healthcare providers across Delhi NCR for diverse medical practice needs
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.useCases.map((useCase, index) => (
                <div key={index} className="bg-verylight rounded-xl p-6 border border-lavender hover:border-purple transition-colors duration-300">
                  <div className="text-center">
                    <div className="bg-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users2 className="h-8 w-8 text-purple" />
                    </div>
                    <h3 className="font-semibold text-black mb-3">
                      {useCase.split(' ')[0] + ' ' + useCase.split(' ')[1] || 'Healthcare Providers'}
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed">
                      {useCase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RNA HealthTech */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-purple/5 to-lightpurple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif text-black mb-4">
                Why RNA HealthTech Leads Delhi NCR
              </h2>
              <p className="text-lg text-black/70 max-w-3xl mx-auto">
                As the best healthtech company in Delhi NCR, we combine innovation with reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Legally Compliant',
                  description: 'Bank-grade security ensuring complete data protection and privacy compliance'
                },
                {
                  icon: Clock,
                  title: '24/7 Support',
                  description: 'Round-the-clock technical assistance for uninterrupted healthcare operations'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation First',
                  description: 'Cutting-edge technology solutions designed specifically for Indian healthcare'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-lavender hover:shadow-md transition-shadow duration-300">
                  <div className="bg-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-purple" />
                  </div>
                  <h3 className="font-semibold text-black mb-3">{item.title}</h3>
                  <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-pt-serif text-black mb-4">
                Simple Implementation Process
              </h2>
              <p className="text-lg text-black/70 max-w-3xl mx-auto">
                Get up and running with our {service.title.toLowerCase()} in just a few steps
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Consultation & Analysis',
                  description: 'Our experts analyze your current workflow and identify optimization opportunities'
                },
                {
                  step: '02',
                  title: 'Custom Configuration',
                  description: 'We tailor the solution to match your specific practice requirements and preferences'
                },
                {
                  step: '03',
                  title: 'Training & Deployment',
                  description: 'Comprehensive staff training ensures smooth adoption and immediate productivity gains'
                },
                {
                  step: '04',
                  title: 'Ongoing Support',
                  description: 'Continuous monitoring and support to maximize your return on investment'
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-verylight rounded-xl p-6 lg:p-8 border border-lavender">
                  <div className="bg-purple text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 md:mr-6">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-black mb-2">{item.title}</h3>
                    <p className="text-black/70 leading-relaxed">{item.description}</p>
                  </div>
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
              Join 500+ healthcare providers in Delhi NCR who trust RNA HealthTech for their digital transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-purple px-8 py-4 rounded-lg font-semibold hover:bg-grey transition-colors duration-300 shadow-lg">
                Get Free Consultation
              </button>
              {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Download Brochure
              </button> */}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-93116-66193</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@rnahealthtech.com</span>
              </div>
               <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-93116-66194</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HServiceTemplate;