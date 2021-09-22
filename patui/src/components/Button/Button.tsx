import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  MouseEvent,
} from "react";
import genClassName from "../../utils/classNames";

//if the users of this library is using typescript,
//they are going to notice this type suggestion from their editor.
//easier for their referencing and better consistency
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Link = "link",
  Primary = "primary",
  Secondary = "secondary",
  Default = "default",
  Danger = "danger",
}

interface IButtonProps {
  buttonSize?: ButtonSize;
  buttonType?: ButtonType;
  disabled?: boolean;
}

type ButtonCombinedProps = IButtonProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Button: FC<ButtonCombinedProps> = ({
  children,
  buttonSize=ButtonSize.Small,
  buttonType=ButtonType.Default,
  disabled=false,
  className = "",
  ...rest
}) => {
  let classNameStr = genClassName("btn", className, {
    [`btn-${buttonSize}`]: !!buttonSize,
    [`btn-${buttonType}`]: !!buttonType,
  });

  const render = () => {
    if (buttonType === ButtonType.Link) {
      if (disabled) {
        rest.onClick = (e: MouseEvent) => {
          e.preventDefault();
        };
        classNameStr += " disabled";
      }
      return (
        <a className={classNameStr} {...rest}>
          {children}
        </a>
      );
    } else {
        return <button className={classNameStr} disabled={disabled} {...rest}>{children}</button>
    }
  };
  return render();
};

export default Button;
