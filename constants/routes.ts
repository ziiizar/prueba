interface Routes {
    home: string;
    calendar: string;
    chat: string;
    brewery: string;
    login: string;
    signup: string;
}

export const routes: Routes = {
    home: "/",
    calendar: "/calendario",
    chat: "/chat",
    brewery: "/brewery",
    login: "/login",
    signup: "/signup"
}

const PUBLIC_ROUTES = [
    routes.home,
   
]

const AUTH_ROUTES = [
    routes.login,
    routes.signup
]

const PRIVATE_ROUTES = [
    routes.calendar,
    routes.chat
]

export { PUBLIC_ROUTES, PRIVATE_ROUTES, AUTH_ROUTES }



