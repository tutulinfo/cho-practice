interface Props {
  label: string;
}

const OutlineButton = ({ label = "Outline Button" }: Props) => {
  return (
    <button className="px-6 py-2 text-sm font-bold text-koraal hover:text-oker active:text-matGroen disabled:text-grafiet border border-koraal hover:border-oker active:border-matGroen disabled:border-secondaryWhite  ">
      {label}
    </button>
  );
};

export default OutlineButton;
