import { createContext, useContext, useReducer } from 'react';

const GamesContext = createContext<GamesState>({ game: 1 });

const GamesDispatchContext = createContext<React.Dispatch<GamesAction>>(
    () => null
);

export function GamesProvider({ children }: { children: React.ReactNode }) {
    const [games, dispatch] = useReducer(gamesReducer, { game: 1 });

    return (
        <GamesContext.Provider value={games}>
            <GamesDispatchContext.Provider value={dispatch}>
                {children}
            </GamesDispatchContext.Provider>
        </GamesContext.Provider>
    );
}

export function useGames() {
    const context = useContext(GamesContext);

    if (context === undefined) {
        throw new Error('useGames must be used within a GamesProvider');
    }

    return context;
}

export function useGamesDispatch() {
    const context = useContext(GamesDispatchContext);

    if (context === undefined) {
        throw new Error('useGamesDispatch must be used within a GamesProvider');
    }

    return context;
}

type GamesState = {
    game: number;
};

type GamesAction = {
    type: string;
    game: number;
};

function gamesReducer(state: GamesState, action: GamesAction) {
    switch (action.type) {
        case 'CHANGE_GAME':
            if (state.game != action.game) {
                return { ...state, game: action.game };
            }
            return state;
        case 'RESET_GAME':
            return { ...state, game: state.game };
        default:
            return state;
    }
}
