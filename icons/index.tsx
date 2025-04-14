import { cn } from "@/lib/utils";

export const HamburgerMenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );


  export const NotificationsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  export const UserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.563.439-.713 1.162-1.087a15 15 0 0 1 3.15-1.163A13.7 13.7 0 0 1 12 13q1.65 0 3.25.388a15 15 0 0 1 3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
      ></path>
    </svg>
  );
  
export const CalendarIcon = ({className}: {className?: string}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={cn("", className)}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M7.7 1.6a.8.8 0 0 1 .8.8v.8h8v-.8a.8.8 0 0 1 1.6 0v.8h2.4a2.4 2.4 0 0 1 2.4 2.4V20a2.4 2.4 0 0 1-2.4 2.4h-16A2.4 2.4 0 0 1 2.1 20V5.6a2.4 2.4 0 0 1 2.4-2.4h2.4v-.8a.8.8 0 0 1 .8-.8m8.8 3.2v.8a.8.8 0 0 0 1.6 0v-.8h2.4a.8.8 0 0 1 .8.8V8H3.7V5.6a.8.8 0 0 1 .8-.8h2.4v.8a.8.8 0 1 0 1.6 0v-.8zM3.7 9.6V20a.8.8 0 0 0 .8.8h16a.8.8 0 0 0 .8-.8V9.6zm8 2.4a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0m4-.8a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m2.4.8a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0m.8 2.4a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m-4 .8a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0m-2.4-.8a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m-4 .8a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0m-2.4-.8a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m-.8 4a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0m4-.8a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m2.4.8a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0m4-.8a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6"
        clipRule="evenodd"
      ></path>
    </svg>
  );


  export const HomeIcon = ({className}: {className?: string}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={cn("", className)}
      viewBox="0 0 24 24"
    >
      <path  d="M4.5 21V9l8-6 8 6v12h-6v-7h-4v7z"></path>
    </svg>
  );
  

  export const ChatIcon = ({className}: {className?: string}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <g clipPath="url(#clip0_1_281)">
        <path
          className={cn("", className)}
          d="M4.517 17.841a1.5 1.5 0 0 1 .43 1.201 16.5 16.5 0 0 1-.596 3c2.092-.484 3.37-1.045 3.95-1.339a1.5 1.5 0 0 1 1.066-.111c1.022.273 2.075.41 3.133.408 5.994 0 10.5-4.21 10.5-9 0-4.788-4.506-9-10.5-9S2 7.212 2 12c0 2.202.926 4.245 2.517 5.841m-.74 5.857q-.532.107-1.069.194c-.3.048-.528-.264-.41-.543q.201-.471.366-.956l.005-.015c.372-1.08.675-2.322.786-3.478C1.615 17.055.5 14.64.5 12c0-5.799 5.373-10.5 12-10.5s12 4.701 12 10.5-5.373 10.5-12 10.5a13.6 13.6 0 0 1-3.52-.459c-.78.395-2.459 1.113-5.203 1.657"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_281">
          <path className={cn("", className)} d="M.5 0h24v24H.5z"></path>
        </clipPath>
      </defs>
    </svg>
  );


  export const AddressIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2"
      ></path>
      <path
        fill="#fff"
        d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6"
      ></path>
    </svg>
  );


  export const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"
      ></path>
    </svg>
  );


  export const ArrowBackIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11z"
      ></path>
    </svg>
  );
  

  export const AlertIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        fill="#DD6B20"
        d="M12.5 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-1-7v2h2v-2zm0-8v6h2V7z"
      ></path>
    </svg>
  );