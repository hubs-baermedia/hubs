# Changelog

All the changed features from the default Hubs application.

- **General:**
    1. Created Custom-Theme: [custom-theme.scss](./src/react-components/styles/custom-theme.scss)

- **Loading View:**
    1. Disabled Whats New on Loading Screen:
        - [LoadingScreenContainer.js](./src/react-components/room/LoadingScreenContainer.js)
        - [LoadingScreen.js](./src/react-components/room/LoadingScreen.js)
    2. New Loading Animation:
        - [Spinner.scss](./src/react-components/misc/Spinner.scss)
        - [Spinner.svg](./src/react-components/misc/Spinner.svg)

- **Landing View:**
    1. Disabled Embed iFrame Invitation: [InvitePopover.js](./src/react-components/room/InvitePopover.js)
    2. Disabled Close Room Menu Entry: [ui-root.js](src\react-components\ui-root.js)
    3. Disabled Community Menu Entry: [ui-root.js](src\react-components\ui-root.js)
    4. Disabled Report Issue Menu Entry: [ui-root.js](src\react-components\ui-root.js)
    5. Disabled Help Menu Entry: [ui-root.js](src\react-components\ui-root.js)
    6. Disabled Controls Menu Entry: [ui-root.js](src\react-components\ui-root.js)
    7. Disabled Terms of Service Menu Entry: [ui-root.js](src\react-components\ui-root.js)
    8. Disabled Privacy Notice Menu Entry: [ui-root.js](src\react-components\ui-root.js)

- **Scene:**
    1. Hard-coded FOV to 55°: [camera-system.js](./src/systems/camera-system.js)