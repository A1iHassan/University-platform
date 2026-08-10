import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const PresidentPage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);
  return (
    <section className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#d67528]">
            Leadership
          </span>

          <h1 className="mt-3 text-5xl font-bold text-slate-900">
            President
          </h1>

          <div className="mt-5 w-24 h-1 bg-[#d67528] rounded-full mx-auto" />
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-lg p-10 text-slate-700 leading-8 text-lg">
          <img
            src="/path-to-your-photo.jpg"
            alt="President"
            className="float-right ml-10 mb-6 w-72 h-96 rounded-2xl object-cover shadow-xl border-4 border-slate-50"
          />

          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            malesuada, justo at dignissim faucibus, sapien neque ultricies
            lorem, ut fermentum ipsum mauris vitae nisl. Sed vitae enim ac
            neque luctus dignissim. Donec tincidunt, mauris sed malesuada
            aliquet, velit justo consequat risus, sed feugiat justo lorem quis
            elit. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Duis finibus mi non sapien
            hendrerit, quis pellentesque mauris aliquet.
          </p>

          <p className="mb-6">
            Praesent vitae eros sit amet sapien feugiat sollicitudin. Integer
            gravida, lacus ac feugiat posuere, magna nulla tincidunt tortor,
            eget consequat elit lacus vel turpis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam erat volutpat. Cras et tristique metus. Vivamus id velit
            vel purus faucibus facilisis. Fusce tincidunt massa vel nisi
            pharetra, vel volutpat nibh luctus.
          </p>

          <p className="mb-6">
            Suspendisse potenti. Quisque nec sem ut lectus bibendum commodo.
            Nulla facilisi. Vivamus sed tincidunt mauris. Integer vulputate
            magna non mauris cursus, sed interdum massa luctus. Mauris sed
            lectus vitae neque feugiat feugiat. Donec elementum tincidunt
            ligula, quis viverra turpis consequat sed. Morbi condimentum,
            sapien vitae consectetur consequat, nibh lorem pretium lorem, nec
            commodo nisi mauris eget odio.
          </p>

          <p className="mb-6">
            Aenean consequat, magna eget pulvinar porta, neque orci tristique
            massa, et laoreet nisl nunc eget turpis. Sed aliquam orci vitae
            risus eleifend, sit amet volutpat orci hendrerit. Nulla facilisi.
            Sed et erat ac libero feugiat malesuada. Donec vel tortor sed neque
            efficitur tristique. Integer ut velit vel lorem consequat
            scelerisque. Donec vulputate dictum augue, vitae ultrices lacus
            fermentum vel.
          </p>

          <p>
            Nam interdum, ligula sed gravida tincidunt, odio nulla posuere
            felis, vitae scelerisque lorem neque vel ipsum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Morbi eget tortor vel neque sollicitudin tempor.
            Phasellus faucibus purus at nunc viverra, at convallis nisl
            malesuada. Integer in risus vel lorem laoreet consectetur. Sed
            aliquet libero sed nunc aliquam, vitae facilisis magna cursus.
          </p>

          {/* Clears the float */}
          <div className="clear-both" />
        </div>
      </div>
    </section>
  );
};

export default PresidentPage;
