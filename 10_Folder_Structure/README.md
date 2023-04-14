30 Days Of React: React Project Folder Structure
https://github.com/Asabeneh/30-Days-Of-React/blob/master/10_React_Project_Folder_Structure/10_react_project_folder_structure.md

Folder structure

example 1:

src
App.js
index.js
components
-auth
-Signup.js
-Signin.js
-Forgotpassword.js
-Resetpassord.js
header
-Header.js
footer
-Footer.js
assets
-images
-icnons

-   fonts
    styles
    -button.js
    -button.scss
    utils
    -random-id.js
    -display-time.js
    -generate-color.js
    shared
    -Button.js
    -InputField.js
    -TextAreaField.js

example 2:
src/
|-- components/
| |-- Avatar/
| | |-- Avatar.ts
| | |-- Avatar.test.ts
| |-- Button/
| | |-- Button.ts
| | |-- Button.test.ts
| |-- TextField/
| | |-- TextField.ts
| | |-- TextField.test.ts
|-- contexts/
| |-- UserContext/
| | |-- UserContext.ts
|-- hooks/
| |-- useMediaQuery/
| | |-- useMediaQuery.ts
|-- pages/
| |-- UserProfile/
| | |-- Components/
| | | |-- SomeUserProfileComponent/
| | | | |-- SomeUserProfileComponent.ts
| | | | |-- SomeUserProfileComponent.test.ts
| | |-- UserProfile.ts
| | |-- UserProfile.test.ts
| |-- index.ts
|-- utils/
| |-- some-common-util/
| | |-- index.ts/
| | |-- index.test.ts
|-- App.ts
|-- AuthenticatedApp.ts
|-- index.ts
|-- UnauthenticatedApp.ts

https://github.com/Asabeneh/30-Days-Of-React/blob/master/10_React_Project_Folder_Structure/10_react_project_folder_structure.md
