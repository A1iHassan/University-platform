import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { 
  ChatBubbleLeftRightIcon, 
  EyeIcon, 
  FlagIcon 
} from '@heroicons/react/24/outline';

const AboutPage = () => {
	const { i18n } = useTranslation();
  	// Handle LTR/RTL document direction and language attribute based on the active locale
	useEffect(() => {
		document.dir = i18n.dir();
		document.documentElement.lang = i18n.language;
	}, [i18n, i18n.language]);
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-12">About us</h1>
      
      <div className="flex flex-col gap-12 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4 text-left">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold">Our Message</h2>
          </div>
          <p className="w-3/4 text-gray-600 leading-relaxed">
            Content for the message goes here. The paragraph wrapper handles the 75% width constraint.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4 text-left">
            <EyeIcon className="h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold">Our Vision</h2>
          </div>
          <p className="w-3/4 text-gray-600 leading-relaxed">
            Content for the vision goes here. The paragraph wrapper handles the 75% width constraint.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4 text-left">
            <FlagIcon className="h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold">Our Goals</h2>
          </div>
          <p className="w-3/4 text-gray-600 leading-relaxed">
            Content for the goals goes here. The paragraph wrapper handles the 75% width constraint.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
