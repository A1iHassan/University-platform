import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  EyeIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return (
    <section className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="mt-3 text-5xl font-bold text-slate-900">
	  {t('message')}
          </h1>

          <div className="mt-5 w-24 h-1 bg-[#d67528] rounded-full mx-auto" />

        </div>

        {/* Cards */}
        <div className="space-y-10">
          {/* Message */}
          <div className="bg-white rounded shadow-md hover:shadow-xl transition duration-300 p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d67528]/10">
                <ChatBubbleLeftRightIcon className="h-7 w-7 text-[#d67528]" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
	      {t('message')}
              </h2>
            </div>

            <p className="text-slate-600 leading-8 md:w-3/4">
	    {t('message_text')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded shadow-md hover:shadow-xl transition duration-300 p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d67528]/10">
                <EyeIcon className="h-7 w-7 text-[#d67528]" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
	      {t('Vision')}
              </h2>
            </div>

            <p className="text-slate-600 leading-8 md:w-3/4">
	    {t('Vision_text')}
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white rounded shadow-md hover:shadow-xl transition duration-300 p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d67528]/10">
                <FlagIcon className="h-7 w-7 text-[#d67528]" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
	      {t('Goals')}
              </h2>
            </div>

            <p className="text-slate-600 text-xl leading-8 md:w-3/4">
	    {t('Goals_text_title')}
            </p>
	    <ul className="text-slate-600 text-lg flex flex-col gap-3 mt-10">
	      <li className="">
	        {t('Goals_point_1')}
	      </li>
	      <li className="">
	        {t('Goals_point_2')}
	      </li>
	      <li className="">
	        {t('Goals_point_3')}
	      </li>
	      <li className="">
	        {t('Goals_point_4')}
	      </li>
	      <li className="">
	        {t('Goals_point_5')}
	      </li>
	    </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
