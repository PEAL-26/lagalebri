interface RadioProps {
  opcao: string;
  value: string;
}

export function OpcoesRadio(props: RadioProps) {
  const { value, opcao } = props;

  return (
    <input
      id={value}
      type="radio"
      name="opcoes"
      value={value}
      className="sr-only"
      // checked={opcao === value}
      defaultChecked={opcao === value}
    />
  );
}
