import ArrowRight from "@/components/icons/ArrowRight";

interface SkipToValuesButtonProps {
  onClick?: () => void;
}

export const SkipToValuesButton = ({ onClick }: SkipToValuesButtonProps) => (
  <button
    onClick={onClick}
    className="w-fit py-2 px-6 rounded-full bg-mnd-button text-white inline-flex items-center gap-4 cursor-pointer border-0"
  >
    <div className="text-sm font-semibold">Skip to Our Values</div>
    <ArrowRight color="white" size={24} />
  </button>
);
