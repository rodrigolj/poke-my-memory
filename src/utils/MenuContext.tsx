import { createContext, useContext, useReducer } from 'react';

const MenuContext = createContext<MenuState>({ isMenuOpen: false });

const MenuDispatchContext = createContext<React.Dispatch<MenuAction>>(
    () => null
);

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [menu, dispatch] = useReducer(menuReducer, { isMenuOpen: false });

    return (
        <MenuContext.Provider value={menu}>
            <MenuDispatchContext.Provider value={dispatch}>
                {children}
            </MenuDispatchContext.Provider>
        </MenuContext.Provider>
    );
}

export function useMenuContext() {
    const context = useContext(MenuContext);

    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider');
    }

    return context;
}

export function useMenuDispatch() {
    const context = useContext(MenuDispatchContext);

    if (context === undefined) {
        throw new Error('useMenuDispatch must be used within a MenuProvider');
    }

    return context;
}

type MenuState = {
    isMenuOpen: boolean;
};

type MenuAction =
    | {
          type: 'open';
      }
    | {
          type: 'close';
      };

function menuReducer(state: MenuState, action: MenuAction) {
    switch (action.type) {
        case 'open':
            return { ...state, isMenuOpen: true };
        case 'close':
            return { ...state, isMenuOpen: false };
        default:
            return state;
    }
}
