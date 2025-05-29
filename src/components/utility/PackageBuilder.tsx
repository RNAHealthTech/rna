import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Lock } from 'lucide-react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast, Toaster } from 'react-hot-toast';



interface UserData {
  userType: string;
  otherText?: string;
  email: string;
  whatsappNumber: string;
  selectedServices: string[];
  services: {
    website?: {
      type: string;
      price: number;
    };
    seo?: {
      locations: string;
      price: number;
    };
    socialMedia?: {
      platforms: string[];
      price: number;
    };
  };
}

const LoadingOverlay = ({ status }: { status: 'loading' | 'success' | 'error' }) => {
  const getContent = () => {
    switch (status) {
      case 'loading':
        return {
          icon: (
            <div className='animate-spin'>
              <svg
                className="w-20 h-20 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ),
          title: "Creating Your Package...",
          subtitle: "Please wait while we process your request",
          bgColor: "bg-gradient-to-br from-purple-50 to-blue-50",
          textColor: "text-gray-800"
        };
      case 'success':
        return {
          icon: (
            <div className="animate-bounce">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          ),
          title: "Package Created Successfully! 🎉",
          subtitle: "Your Package will be sent to your registered email address within 24 hours!",
          bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
          textColor: "text-gray-800"
        };
      case 'error':
        return {
          icon: (
            <div className="animate-pulse">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          ),
          title: "Something went wrong 😔",
          subtitle: "Don't fret! Please try again later or contact support.",
          bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
          textColor: "text-gray-800"
        };
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm">
      <div className={`${content.bgColor} p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-white/20`}>
        <div className="flex flex-col items-center text-center">
          {content.icon}
          <h2 className={`mt-6 text-2xl font-bold ${content.textColor}`}>
            {content.title}
          </h2>
          <p className={`mt-3 text-base ${content.textColor} opacity-80 leading-relaxed`}>
            {content.subtitle}
          </p>

          {status === 'success' && (
            <button
              onClick={() => {
                // Reset the form or navigate
                window.location.reload(); // or your preferred reset logic
              }}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Create Another Package
            </button>
          )}

          {status === 'error' && (
            <button
              onClick={() => {
                // Retry logic or close overlay
                window.location.reload(); // or your preferred retry logic
              }}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const TypeformFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [userData, setUserData] = useState<UserData>({
    userType: '',
    selectedServices: [],
    services: {},
    email: '',
    whatsappNumber: ''
  });


  const [otherText, setOtherText] = useState<string>('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [currentServiceIndex, setCurrentServiceIndex] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState(false);


  const [submissionStatus, setSubmissionStatus] = useState<'loading' | 'success' | 'error' | null>(null);


  const handleSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setSubmissionStatus('loading');
    try {
      // calculating total price here again for submitting in the firebase/firestore
      const totalPrice = calculateTotal();

      const finalLead = {
        userType: userData.userType,
        otherText: otherText,
        email: userData.email || email,
        whatsappNumber: userData.whatsappNumber || whatsappNumber, 
        selectedServices: userData.selectedServices,
        services: {
          website: userData.services.website || null,
          seo: userData.services.seo || null,
          socialMedia: userData.services.socialMedia || null,
        },
        selectedPlatforms: selectedPlatforms,
        currentServiceIndex: currentServiceIndex,
        totalPrice: totalPrice,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "query"), finalLead);
      setSubmissionStatus('success');
    } catch (error) {
      toast.error(`Something went wrong.\n 
        Don't fret! \n
        Please try again later`);
      console.error(error);
      setSubmissionStatus('error')
    } finally {
      setIsGenerating(false);
    }
  }

  // Available services
  const availableServices = [
    { id: 'website', name: 'Website Development', icon: '🚀' },
    { id: 'seo', name: 'SEO Optimization', icon: '📈' },
    { id: 'socialMedia', name: 'Social Media Management', icon: '💬' }
  ];

  const calculateSocialMediaPrice = (platforms: string[]) => {
    return platforms.reduce((total, platform) => {
      const userPricing = pricing[userData.userType as keyof typeof pricing];
      const platformKey = platform.toLowerCase() as keyof typeof userPricing.socialMedia;
      const platformPrice = userPricing?.socialMedia?.[platformKey] || 0;
      return total + Number(platformPrice);
    }, 0);
  };


  // Pricing structure
  const pricing = {
    doctor: {
      website: {
        'Portfolio Website': 10000,
        'Multipage Website': 25000,
        'Customised Website': 50000
      },
      seo: {
        '4-6 Locations': 5000,
        '10-12 Locations': 10000,
        '18-20 Locations': 15000,
        '20+ Locations': 20000
      },
      socialMedia: {
        'linkedin': 3000,
        'facebook': 5000,
        'instagram': 10000
      }
    },

    'mental health professional': {
      website: {
        'Portfolio Website': 10000,
        'Multipage Website': 25000,
        'Customised Website': 50000
      },
      seo: {
        '4-6 Locations': 5000,
        '10-12 Locations': 10000,
        '18-20 Locations': 15000,
        '20+ Locations': 20000
      },
      socialMedia: {
        'linkedin': 3000,
        'facebook': 5000,
        'instagram': 10000
      }
    },
    hospital: {
      website: {
        'Multipage Website': 25000,
        'Customised Website': 50000
      },
      seo: {
        '10-12 Locations': 10000,
        '18-20 Locations': 15000,
        '20+ Locations': 20000
      },
      socialMedia: {
        'linkedin': 3000,
        'facebook': 5000,
        'instagram': 10000
      }
    },
    'diagnostics lab': {
      website: {
        'Multipage Website': 25000,
        'Customised Website': 50000
      },
      seo: {

        '10-12 Locations': 10000,
        '18-20 Locations': 15000,
        '20+ Locations': 20000
      },
      socialMedia: {
        'linkedin': 3000,
        'facebook': 5000,
        'instagram': 10000
      }
    },
    other: {
      website: {
        'Portfolio Website': 899,
        'Multipage Website': 1599,
        'Customised Website': 2499
      },
      seo: {
        '4-6 Locations': 5000,
        '10-12 Locations': 10000,
        '18-20 Locations': 15000,
        '20+ Locations': 20000
      },
      socialMedia: {
        'linkedin': 3000,
        'facebook': 5000,
        'instagram': 10000
      }
    }
  };

  const userPricing = pricing[userData.userType as keyof typeof pricing];


  const getWebsiteOptions = () => {
    const entityTypesWithoutPortfolio = [
      'hospital',
      'diagnostics lab',
      'medical equipment supplier',
      'telemedicine platform',
      'health insurance company',
      'medical training institute'
    ];

    if (entityTypesWithoutPortfolio.includes(userData.userType)) {
      return ['Multipage Website', 'Customised Website'];
    }
    return ['Portfolio Website', 'Multipage Website', 'Customised Website'];
  };

  const getSeoOptions = () => {
    const entityTypesWithLimitedSEO = ['hospital', 'health insurance company'];

    if (entityTypesWithLimitedSEO.includes(userData.userType)) {
      return ['10-12 Locations', '18-20 Locations', '20+ Locations'];
    }
    if (userData.services.website?.type === 'Portfolio Website') {
      return ['4-6 Locations']
    }
    return ['4-6 Locations', '10-12 Locations', '18-20 Locations', '20+ Locations'];
  };

  const socialMediaPlatforms = ['LinkedIn', 'Facebook', 'Instagram'];

  const handleUserTypeSelect = (type: string) => {
    setUserData(prev => ({ ...prev, userType: type.toLowerCase() }));
    setCurrentStep(1);
  };

  const handleOtherSubmit = () => {
    if (otherText.trim()) {
      setUserData(prev => ({ ...prev, userType: 'other', otherText: otherText }));
      setCurrentStep(1);
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setUserData(prev => {
      const currentServices = prev.selectedServices;
      const isSelected = currentServices.includes(serviceId);

      let newServices;
      if (isSelected) {
        newServices = currentServices.filter(s => s !== serviceId);
      } else {
        if (currentServices.length < 3) {
          newServices = [...currentServices, serviceId];
        } else {
          return prev; // Don't allow more than 3 services
        }
      }

      return { ...prev, selectedServices: newServices };
    });
  };

  const proceedToServices = () => {
    if (userData.selectedServices.length > 0) {
      setCurrentServiceIndex(0);
      setCurrentStep(2); // Go to first service configuration
    }
  };

  const getCurrentService = () => {
    return userData.selectedServices[currentServiceIndex];
  };

  const proceedToNextService = () => {
    if (currentServiceIndex < userData.selectedServices.length - 1) {
      setCurrentServiceIndex(currentServiceIndex + 1);
      // Stay on step 2 but show next service
    } else {
      // All services configured, go to final quote
      setCurrentStep(3);
    }
  };

  const handleWebsiteSelection = (websiteType: string) => {
    const userPricing = pricing[userData.userType as keyof typeof pricing];
    const price = userPricing?.website[websiteType as keyof typeof userPricing.website] || 0;
    setUserData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        website: { type: websiteType, price }
      }
    }));
    proceedToNextService();
  };

  const handleSeoSelection = (locations: string) => {
    const userPricing = pricing[userData.userType as keyof typeof pricing];
    const price = userPricing?.seo[locations as keyof typeof userPricing.seo] || 0;
    setUserData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        seo: { locations, price }
      }
    }));
    proceedToNextService();
  };

  const handlePersonalInfoSubmit = () => {
    if (email.trim() && whatsappNumber.trim()) {
      setUserData(prev => ({
        ...prev,
        email: email.trim(),
        whatsappNumber: whatsappNumber.trim()
      }));
      setCurrentStep(4); // Now go to final quote
    } else {
      // Show error or validation message
      alert('Please fill in both email and WhatsApp number');
    }
  };

  const handleSocialMediaSelection = (platforms: string[]) => {
    const userPricing = pricing[userData.userType as keyof typeof pricing];

    // Calculate total price based on selected platforms
    const totalPrice = platforms.reduce((total, platform) => {
      const platformKey = platform.toLowerCase() as keyof typeof userPricing.socialMedia;
      const platformPrice = userPricing?.socialMedia?.[platformKey] || 0;
      return total + Number(platformPrice); // Convert to number in case of string values
    }, 0);

    setUserData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        socialMedia: { platforms, price: totalPrice }
      }
    }));
    proceedToNextService();
  };




  const calculateTotal = () => {
    let total = 0;
    if (userData.services.website) total += userData.services.website?.price;
    if (userData.services.seo) total += userData.services.seo.price;
    if (userData.services.socialMedia) total += userData.services.socialMedia.price;
    return total;
  };

  const goBack = () => {
    if (currentStep === 2 && currentServiceIndex > 0) {
      setCurrentServiceIndex(currentServiceIndex - 1);
    } else if (currentStep === 3) {
      setCurrentServiceIndex(userData.selectedServices.length);
      setCurrentStep(2);
    }
    else if (currentStep > 0) {
      if (currentStep === 2) {
        setCurrentServiceIndex(0);
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleContinue = () => {
    if (selectedPlatforms.length > 0) {
      handleSocialMediaSelection(selectedPlatforms);
    } else {
      proceedToNextService();
    }
  };

  // Step 0: User Type Selection
  const renderUserTypeStep = () => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome! 👋
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Let's start by understanding your business
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8">
            What describes you the best?
          </h2>

          <div className="space-y-3">
            {[
              'Doctor',
              'Hospital',
              'Mental Health Professional',
              'Diagnostics Lab',
            ].map((type) => (
              <button
                key={type}
                onClick={() => handleUserTypeSelect(type)}
                className="w-full p-4 sm:p-6 text-left border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-medium text-gray-800">
                    {type}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple" />
                </div>
              </button>
            ))}

            <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-base sm:text-lg font-medium text-gray-800">Other</span>
              </div>
              <input
                type="text"
                placeholder="Please specify your business type..."
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple/100 focus:border-transparent text-sm sm:text-base"
                onKeyPress={(e) => e.key === 'Enter' && handleOtherSubmit()}
              />
              {otherText.trim() && (
                <button
                  onClick={handleOtherSubmit}
                  className="mt-3 bg-purple text-white px-6 py-2 rounded-lg hover:bg-purple transition-colors text-sm sm:text-base"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Step 1: Service Selection
  const renderServiceSelectionStep = () => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-purple/10 text-purple px-3 py-1 rounded-full font-medium">
              Step 1 of 2
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What services do you need? 🎯
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Choose the services that best fit your {userData.userType === 'other' ? userData.otherText : userData.userType} business
          </p>
          <p className="text-sm text-gray-500">
            Select minimum 1 and maximum 3 services ({userData.selectedServices.length}/3 selected)
          </p>
        </div>

        <div className="space-y-4">
          {availableServices.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceToggle(service.id)}
              disabled={!userData.selectedServices.includes(service.id) && userData.selectedServices.length >= 3}
              className={`w-full p-4 sm:p-6 text-left border rounded-lg transition-all duration-200 group ${userData.selectedServices.includes(service.id)
                ? 'border-purple/100 bg-purple/10'
                : userData.selectedServices.length >= 3
                  ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-base sm:text-lg font-medium text-gray-800">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {userData.selectedServices.includes(service.id) && (
                    <Check className="w-5 h-5 text-purple" />
                  )}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple" />
                </div>
              </div>
            </button>
          ))}

          {userData.selectedServices.length > 0 && (
            <div className="bg-purple/10 border border-purple rounded-lg p-4">
              <p className="text-sm text-purple">
                Selected services: {userData.selectedServices.map(id =>
                  availableServices.find(s => s.id === id)?.name
                ).join(', ')}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 space-y-4 sm:space-y-0">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={proceedToServices}
              disabled={userData.selectedServices.length === 0}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center space-x-2 ${userData.selectedServices.length > 0
                ? 'bg-purple text-white hover:bg-purple'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Service Configuration Steps
  const renderServiceConfigStep = () => {
    const currentService = getCurrentService();
    const serviceIndex = userData.selectedServices.indexOf(currentService);
    const totalServices = userData.selectedServices.length;

    if (currentService === 'website') {
      return renderWebsiteStep(serviceIndex, totalServices);
    } else if (currentService === 'seo') {
      return renderSeoStep(serviceIndex, totalServices);
    } else if (currentService === 'socialMedia') {
      return renderSocialMediaStep(serviceIndex, totalServices);
    }

    return null;
  };

  // Website Development Step
  const renderWebsiteStep = (serviceIndex: number, totalServices: number) => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-purple/10 text-purple px-3 py-1 rounded-full font-medium">
              Service {serviceIndex + 1} of {totalServices}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's build your website 🚀
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Choose the type of website that best fits your {userData.userType === 'other' ? userData.otherText : userData.userType} business
          </p>
        </div>

        <div className="space-y-4">
          {getWebsiteOptions().map((option) => {
            const optionPrice = userPricing?.website?.[option as keyof typeof userPricing.website] || 0;
            return (
              <button
                key={option}
                onClick={() => handleWebsiteSelection(option)}
                className="w-full p-4 sm:p-6 text-left border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-medium text-gray-800">
                    {option}
                  </span>

                  <span className="font-bold text-gray-800 text-lg blur-md">₹{optionPrice}</span>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple" />
                </div>
              </button>
            );
          })}

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 space-y-4 sm:space-y-0">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // SEO Step
  const renderSeoStep = (serviceIndex: number, totalServices: number) => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-purple/10 text-purple px-3 py-1 rounded-full font-medium">
              Service {serviceIndex + 1} of {totalServices}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Boost your visibility 📈
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            How many locations do you want to optimize for search engines?
          </p>
        </div>

        <div className="space-y-4">
          {getSeoOptions().map((option, index) => {
            const optionPrice = userPricing?.seo?.[option as keyof typeof userPricing.seo] || 0;
            return (
              <button
                key={option}
                onClick={() => handleSeoSelection(option)}
                className="w-full p-4 sm:p-6 text-left border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-gray-400">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-gray-800">
                      {option}
                    </span>

                  </div>
                  <span className="font-bold text-gray-800 text-lg blur-md">₹{optionPrice}</span>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple" />
                </div>
              </button>
            )
          })}

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 space-y-4 sm:space-y-0">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Social Media Step
  const renderSocialMediaStep = (serviceIndex: number, totalServices: number) => {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-2xl w-full mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-purple/10 text-purple px-3 py-1 rounded-full font-medium">
                Service {serviceIndex + 1} of {totalServices}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Connect with patients 💬
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Which social media platforms would you like us to manage?
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Select multiple platforms
            </p>
          </div>

          <div className="space-y-4">
            {socialMediaPlatforms.map((platform) => {

              const optionPrice = userPricing?.socialMedia?.[platform.toLowerCase() as keyof typeof userPricing.socialMedia] || 0;

              return (

                <button
                  key={platform}
                  onClick={() => togglePlatform(platform)}
                  className={`w-full p-4 sm:p-6 text-left border rounded-lg transition-all duration-200 group ${selectedPlatforms.includes(platform)
                    ? 'border-purple/100 bg-purple/10'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base sm:text-lg font-medium text-gray-800 block">
                        {platform}
                      </span>
                      <span className="text-sm text-gray-500">
                        Professional management and content creation
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {selectedPlatforms.includes(platform) && (
                        <Check className="w-5 h-5 text-purple" />
                      )}
                      <span className="font-bold text-gray-800 text-lg blur-md">₹{optionPrice}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple" />
                    </div>
                  </div>
                </button>
              )
            })}

            {/* {selectedPlatforms.length > 0 && (
              <div className='bg-purple/10 border border-purple rounded-lg p-4'>
                <p className='text-sm text-purple'>
                  Selected : {selectedPlatforms.join(', ')} - ₹{calculateSocialMediaPrice(selectedPlatforms)}
                </p>
              </div>
            )} */}


            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 space-y-4 sm:space-y-0">
              <button
                onClick={goBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={handleContinue}
                className="bg-purple text-white px-6 py-3 rounded-lg hover:bg-purple transition-colors flex items-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPersonalInfo = () => (
    <div className='min-h-screen flex items-center justify-center px-4 sm:px-6'>
      <div className='max-w-2xl w-full mx-auto'>
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-3xl font-bold mb-8'>Contact Information</h2>

          <div className='mb-6'>
            <label className='block text-xl mb-3 text-left'>
              Email Address
            </label>
            <input
              placeholder='Enter your email address'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none'
              required
            />
          </div>

          <div className='mb-6'>
            <label className='block text-xl mb-3 text-left'>
              WhatsApp Number
            </label>
            <input
              placeholder='Enter your WhatsApp number'
              type='tel'
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className='w-full p-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none'
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 space-y-4 sm:space-y-0">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            onClick={handlePersonalInfoSubmit}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <span>Get My Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );


  // Final Quote
  const renderFinalQuote = () => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Custom Package 🎉
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Here's what we've prepared for your {userData.userType === 'other' ? userData.otherText : userData.userType} business
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="space-y-6">
            {userData.services.website && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-gray-100 pb-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="font-semibold text-gray-800">Website Development</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{userData.services.website.type}</p>
                </div>
                <span className="font-bold  text-gray-800 text-lg blur-sm">₹{userData.services.website.price}</span>
              </div>
            )}

            {userData.services.seo && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-gray-100 pb-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="font-semibold text-gray-800">SEO Optimization</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{userData.services.seo.locations}</p>
                </div>
                <span className="font-bold  text-gray-800 text-lg blur-md">₹{userData.services.seo.price}</span>
              </div>
            )}

            {userData.services.socialMedia && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-gray-100 pb-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="font-semibold text-gray-800">Social Media Management</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{userData.services.socialMedia.platforms.join(', ')}</p>
                </div>
                <span className="font-bold text-gray-800 text-lg blur-md">₹{userData.services.socialMedia.price}</span>
              </div>
            )}

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <span className="text-lg sm:text-xl font-bold text-gray-800">Total Package Price</span>
                <span className="text-2xl sm:text-3xl font-bold text-purple blur-md">₹{calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => {
              setCurrentStep(0);
              setUserData({ userType: '', selectedServices: [], services: {}, email: '', whatsappNumber: '' });
              setOtherText('');
              setSelectedPlatforms([]);
              setCurrentServiceIndex(0);
            }}
            className="flex-1 border border-gray-300 text-gray-700 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            Start Over
          </button>
          <button
            className="flex-1 bg-purple text-white py-3 sm:py-4 rounded-lg hover:bg-purple transition-colors font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
            onClick={handleSubmission}
          >
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            {isGenerating ? <span>Creating Your Package</span> : <span>Unlock Package</span>}
          </button>
          {submissionStatus && <LoadingOverlay status={submissionStatus} />}
        </div>

      </div>
    </div>
  );

  return (
    <div className='bg-white min-h-screen'>
      <div className='w-full'>
        {currentStep === 0 && renderUserTypeStep()}
        {currentStep === 1 && renderServiceSelectionStep()}
        {currentStep === 2 && renderServiceConfigStep()}
        {currentStep === 3 && renderPersonalInfo()}
        {currentStep === 4 && renderFinalQuote()}
        <Toaster />
      </div>
    </div>
  );
};

export default TypeformFlow;

