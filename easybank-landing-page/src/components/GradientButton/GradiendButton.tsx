import Styles from './GradientButton.module.css';

interface Props {
  text: string;
}

export const GradientButton = ({ text }: Props) => {
  return <button className={Styles['gradient-button']}>{text}</button>;
};
