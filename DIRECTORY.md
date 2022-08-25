# Directory

Lists the contents of this repository.
Files/Folders displayed bold are created by baermedia.

Symbol Explanation:
:white_check_mark: Relevant and needed.
:eight_spoked_asterisk: Not relevant but needed.

## :eight_spoked_asterisk: .old

Contains old or deleted files from the default Mozilla Hubs codebase.

## :eight_spoked_asterisk: admin

Contains the react app for the admin console.

## :eight_spoked_asterisk: certs

Contains the certificate and key to allow https to work locally. Will be created for each local device upon development.

## :eight_spoked_asterisk: doc

Contains docs created by the Mozilla Hubs development team.

## :eight_spoked_asterisk: habitat

Contains the habitat system for running services in prod.

## scripts

Unknown

## :white_check_mark: src

- [ ] **/components**
  - [ ] :white_check_mark: [`media-loader.scss`](src\components\media-loader.js)
         Contains the code for 3D Object Loading Animation of `loading_object_animation.glb`.

- [ ] **/react-components**

  - [ ] **/misc**
  Contains miscellaneous elements.
    - [x] :white_check_mark: [`Spinner.js`](src\react-components\misc\Spinner.js) , [`Spinner.svg`](src\react-components\misc\Spinner.svg)
       Loading animation used through the app.
  - [x] **/styles**
        Contains the global styles and theme of the client application.
    - [x] **/fonts**
          Contains the fonts used in the client application, defined in `fonts.scss`.
    - [x] :white_check_mark: [*`custom-theme.scss`*](src\react-components\styles\global.scss)
           Injected stylesheet after `global.scss` to override the global styles with branding styles.
    - [x] :white_check_mark: [`global.scss`](src\react-components\styles\global.scss)
           Global variables, uses `theme.scss` and `custom-theme.scss` for exact values.
    - [x] :eight_spoked_asterisk: [`style-utils.scss`](src\react-components\styles\style-utils.scss)
           Utilities for styling.
    - [x] :eight_spoked_asterisk: [`theme.js`](src\react-components\styles\theme.js)
           Loads theme and handles dark mode.
    - [x] :eight_spoked_asterisk: [`theme.scss`](src\react-components\styles\theme.scss)
           Default values of breakpoints, colors, screen sizes, font styles, spacing styles.

  - [ ] **/room**
    - [ ] [`LoadingScreenContainer.js`](src\react-components\room\LoadingScreenContainer.js)
    - [x] :eight_spoked_asterisk: [`RoomLayoutContainer.js`](src\react-components\room\RoomLayoutContainer.js)
           Container wrapping the RoomLayout, used in `ui-root.js` by passing all arguments to `RoomLayout.js` and handling the viewport resizing. Not relevant because the actual room layout implementation is done in `RoomLayout.js`.

  - [ ] :white_check_mark: [`ui-root.js`](src\react-components\ui-root.js)
         React Component is the root of the UI components.

- [x] :white_check_mark: [`index.html`](src\index.html)
       Index of the react app, contains the home view.
- [x] :white_check_mark: [`index.js`](src\index.js)
       Creates the Root react component and renders it in `index.html`.
- [x] :warning: [`support.js`](src\support.js)
       Needed for support and polyfill, renders `<support-root>` in `index.html`.
- [ ] `hub.js`

## :eight_spoked_asterisk: test

Contains some tests created by the Mozilla Hubs development team.

## :white_check_mark: Config Files

Contains some tests created by the Mozilla Hubs development team.
