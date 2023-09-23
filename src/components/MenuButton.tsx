type MenuButton = {
    color: string;
    isMenuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuButton({ color, isMenuOpen, setMenuOpen }: MenuButton) {
    return (
        <button
            onClick={() => {
                !isMenuOpen ? setMenuOpen(true) : setMenuOpen(false);
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
