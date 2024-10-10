import { HeaderMenuItemProps } from './HeaderMenuItem.type'

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  return (
    <button className={`py-2 px-20 ${props.isActive ? 'border-b-[0.3rem]' : ''}`}>
      <h1 className="text-background uppercase">{props.title}</h1>
    </button>
  );
};

export default HeaderMenuItem;
