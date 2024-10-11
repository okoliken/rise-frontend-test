import { IconApp, IconPlayStore } from "../icons";


type StoreType = 'apple' | 'google';

interface StoreButtonProps {
  storeType: StoreType;
  url: string;
  className?: string;
}

const storeInfo = {
  apple: {
    name: 'App Store',
    icon: (
      <IconApp />
    ),
  },
  google: {
    name: 'Google Play',
    icon: (
      <IconPlayStore />
    ),
  },
};

export const StoreButton: React.FC<StoreButtonProps> = ({ storeType, url, className = '' }) => {
  const { name, icon } = storeInfo[storeType];

  return (
    <a
      href={url}
      className={`
        inline-flex items-center justify-center px-1 py-2 
        bg-rise-black text-white rounded-[0.625rem] h-12
        transition-all duration-300 ease-in-out
        hover:bg-gray-800
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rise-black
        ${className}
      `}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Download on the ${name}`}
    >
      <span className="w-6 h-6 mr-2" aria-hidden="true">
        {icon}
      </span>
      <span className="flex flex-col text-left">
        <span className="text-[0.625rem]">Download on the</span>
        <span className="text-[0.813rem] font-semibold">{name}</span>
      </span>
    </a>
  );
};