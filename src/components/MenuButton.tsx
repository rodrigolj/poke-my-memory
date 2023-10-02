import { useMenuDispatch, useMenuContext } from '../utils/MenuContext';

type MenuButton = {
    color: string;
    onClick: () => void;
};

function MenuButton({ color }: MenuButton) {
    const menuContext = useMenuContext();
    const menuDispatch = useMenuDispatch();

    return (
        <button
            onClick={() => {
                menuContext.isMenuOpen
                    ? menuDispatch({ type: 'close' })
                    : menuDispatch({ type: 'open' });
            }}
        >
            <svg viewBox="0 0 100 80" width="24" height="24">
                <rect width="100" height="15" fill={color}></rect>
                <rect y="30" width="100" height="15" fill={color}></rect>
                <rect y="60" width="100" height="15" fill={color}></rect>
            </svg>
        </button>
    );
}

export default MenuButton;
