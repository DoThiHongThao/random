import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  ChangeEvent,
} from 'react';
import { checkNumbers } from '~utils';
import { useDebounce } from '~hooks';

type InputProps = {
  clear?: boolean;
  disabled?: boolean;
  handleChange: (val: string | number) => void;
  min: number;
  name?: string;
  placeholder?: string;
  title?: string;
};

const Input: FunctionComponent<InputProps> = ({
  clear = false,
  disabled = false,
  handleChange,
  min = 0,
  name = '',
  placeholder = 'Input value',
  title,
}) => {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [validationText, setValidationText] = useState('');
  const validate = useDebounce((value: string) => {
    const val = Number(value);
    if (refInput?.current) {
      refInput.current.value = value;
    }

    if (value !== '' && !isNaN(val) && val >= min && Number.isInteger(val)) {
      handleChange(val);
      setValidationText('');
    } else {
      handleChange('');
      setValidationText(
        val >= min
          ? 'Only integers are allowed'
          : 'Should be more than start value'
      );
    }
  }, 800);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    validate(e.target.value);

  useEffect(() => {
    const node = refInput?.current;
    if (node && clear) {
      node.value = '';
    }
  }, [min, clear]);

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {name}
      </label>
      <input
        ref={refInput}
        className="form-input"
        disabled={disabled}
        id={name}
        min={min}
        onChange={onChange}
        onKeyDown={checkNumbers}
        placeholder={placeholder}
        required
        title={title}
        type="number"
      />
      {validationText && (
        <span className="validation-text">{validationText}</span>
      )}
    </div>
  );
};

export default Input;
