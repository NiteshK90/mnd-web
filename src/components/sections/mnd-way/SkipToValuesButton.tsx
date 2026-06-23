import ArrowRight from "@/components/icons/ArrowRight";

interface SkipToValuesButtonProps {
  onClick?: () => void;
}

export const SkipToValuesButton = ({ onClick }: SkipToValuesButtonProps) => (
  <button
    onClick={onClick}
    className="w-fit py-2 px-6 rounded-full bg-mnd-button text-white inline-flex items-center gap-4 cursor-pointer border-0 transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(6,58,90,0.4)] active:scale-[0.96] active:shadow-none"
  >
    <div className="text-sm font-semibold">Skip to Our Values</div>
    <ArrowRight color="white" size={24} />
  </button>
);
