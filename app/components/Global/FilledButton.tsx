interface Props {
  label: string;
}

const FilledButton = ({ label = "Filled Button" }: Props) => {
  return (
    <button className="px-6 py-2 bg-koraal hover:bg-oker active:bg-matGroen disabled:bg-secondaryWhite border border-koraal hover:border-oker active:border-matGroen disabled:border-secondaryWhite  text-sm font-bold  text-white disabled:text-grafiet">
      {label}
    </button>
  );
};

export default FilledButton;
