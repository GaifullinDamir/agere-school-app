import {MainPage, AuthPage, RegPage, NotFoundPage} from '../pages/index.tsx';
import {MAIN_PAGE, AUTH_PAGE, REG_PAGE, NOT_FOUND_PAGE} from "./utils/consts";

export const routes = [
    {
        path: MAIN_PAGE,
        Component: MainPage
    },
    {
        path: AUTH_PAGE,
        Component: AuthPage
    },
    {
        path: REG_PAGE,
        Component: RegPage
    },
    {
        path: NOT_FOUND_PAGE,
        Component: NotFoundPage
    }
];