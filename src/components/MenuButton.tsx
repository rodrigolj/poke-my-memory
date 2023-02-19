const MenuButton = ({ color }: { color: string }) => {
    return (
        <button onClick={() => { alert('Hello World!') }}>
                <svg viewBox="0 0 100 80" width="28" height="28">
                    <rect width="100" height="15" fill={color}></rect>
                    <rect y="30" width="100" height="15" fill={color}></rect>
                    <rect y="60" width="100" height="15" fill={color}></rect>
                </svg>
        </button>
    )
}

export default MenuButton;
