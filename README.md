# Angular Dev Portfolio

A simple portfolio or cv page aimed at developers, built with Angular (v9.1.9), Bootstrap and Font Awesome.

[Example: https://github.com/rodolfodiegosilva/myportfolio](https://github.com/rodolfodiegosilva/myportfolio)

## Contents

* [Usage and customisation](#usage-and-customisation)
  * [Data](#data)
    * [Profile properties](#profile-properties)
    * [Project properties](#project-properties)
    * [Role properties](#role-properties)
    * [Qualification properties](#qualification-properties)
    * [Skill properties](#skill-properties)
  * [Theme](#theme)
  * [Branding](#branding)
  * [Images](#images)
* [Development Server](#development-server)
* [Build](#build)
* [License](#license)

<br/>

## Usage and customisation

Select "Use this template" or Fork this repository to get started.

### Data

All content besides images and the page title resides in [data.ts](./src/app/data.ts). All you need to do is swap the example data with your own data.

[data.js](./src/app/data.ts) exports a [Profile](./src/app/_Classes/profile.ts) object, which has the following properties.


##### Profile properties

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    name | string  | true | Your name. |
|    title | string  | true | Your current job title. |
|    location  | string  | false | Your current location. |
|    projects  | Project[]  | false | A list of your own projects outside of employment. |
|    roles  | Role[]  | false | A list of companies that you have been employed at. |
|    qualifications | Qualification[]  | false | A list of your qualifications. |
|    skills  | Skill[]  | false | A list of skills and/ore technologies that you have worked with. |
|    linkedin  | string  | false | Your LinkedIn user name. If set this will show in the footer. |
|    twitter  | string  | false | Your Twitter user name. If set this will show in the footer. |
|    facebook  | string  | false | Your Facebook user name. If set this will show in the footer. |
|    instagram  | string  | false | Your Instagram user name. If set this will show in the footer. |
|    github  | string  | false | Your GitHub profile user name. If set this will show in the footer. |
|    stackoverflow  | string  | false | Your Stack Overflow profile user id. If set this will show in the footer. |
|    email  | string  |  false | Your contact email address. This will show in the footer if set. |
|    mailto  | string  |  false | Email Address where the contact button will send to. |
|    about  | string  | false | More information about you. This will show in the About section. Accepts html. |


<br/>

##### Project properties

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|   name | string | false | The name/title of the project. |
|    owner | string | true | The person or company who owns the project |
|    role | string | false | Enter the name of the company used in the 'company' property of the 'role' model if applicable. |
|    icon | object | false | A font awesome icon to show for this qualification. |
|    image | string | false | The url of an image to show instead of an icon. This can be the url of a public image or the path of a local asset. |
|    imagestyle | object | false | If image is set you can use this to apply custom styles to the image. |
|    images | string[] | false | This will show multiple images in a carousel on the modal screen instead of 'image'. |
|    url | string | false | A link to more information about the project. Will show on the modal screen. |
|    private | boolean | false | Whether the source code is public or private. |
|    startdate | Date | false | When you started working on the project. Must have either 'enddate' set or 'current' === true. |
|    enddate | Date | false | When you finished working on the project. If 'startdate' is not set only the enddate will show. |
|    current | boolean | false | Whether you are still working on this project. |
|    skills | Skill[] | false | A list of skills/technologies relating to the project. The project will then show in the skills section. |
|    info | string | false | Additional details. Shows on modal screen only. Accepts html. |

<br/>

##### Role properties

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    title |  string | true | Your job title. |
|    company |  string | true | The name of the company. |
|    location |  string | false | Your place of work. |
|    url |  string | false | A link to the companies website. The companies name on the timeline becomes a link if set. |
|    startdate | Date | false | When you started employment. Must have either 'enddate' set or 'current' === true. |
|    enddate |  Date | false | When you finished employment. |
|    current |  boolean | false | Whether you are still employed. |
|    positions |  Role[] | false | A list of positions held at the company included start and end dates. |
|    projects |  Project[] | false | A list of projects worked on at the company. |
|    info |  string | false | Additional details. Accepts html. |

<br/>

##### Qualification properties

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    name |  string | true | The name/title of the qualifcation. |
|    location |  string | false | The place of study. |
|    grade |  string | false | Grade obtained. |
|    icon |  object | false | A font awesome icon to show for this qualification. |
|    image |  string | false | The url of an image to show instead of an icon. This can be the url of a public image or the path of a local asset. |
|    imagestyle |  object | false | If image is set you can use this to apply custom styles to the image. |
|    startdate |  Date | false | When you started studying. Must have either 'enddate' set or 'current' === true. |
|    enddate |  Date | false | When you finished/gained the qualifcation. If 'startdate' is not set only the enddate will show. |
|    current |  boolean | false | Whether you are still studying for this qualification. |
|    info |  string | false | Additional details. Shows on modal screen only. Accepts html. |


<br/>

##### Skill properties

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    name |  string | true | Name of the skill. |
|    group |  string | true | What group to show the skill under. If empty string no group header will be shown. |
|    level |  number | false | A number ranging from 0-100 to determine your skill level. |

<br/>

### Theme

The template uses Bootstrap so is very easy to alter the colours.

The colour palette can be changed by altering the values in `$theme-colors` in [/src/theme.scss](./src/theme.scss).

### Branding

The "My Portfolio" on the navigation bar is an image which can be replaced in [/src/assets/images/logo.png](./src/assets/images/logo.png). This is rendered in [/src/app/nav-bar/nav-bar.component.html](./src/app/nav-bar/nav-bar.component.html) so the image format can be changed here or the image can be replaced with text.

The Profile Picture on the header is an image which can be replaced in [/src/assets/images/profile.png](./src/assets/images/profile.png). This is rendered in [/src/app/avatar/avatar.component.html](./src/app/avatar/avatar.component.html) so the image format can be changed here.

The page title can be altered in [/src/index.html](./src/index.html).

### Images

Add your own images of your projects or qualifications to the [/src/assets/images/](./src/assets/images/) directory. You can then reference these in data.js using `assets/images/yourimage.png`.

<br/>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<br/>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


<br/>

## License

MIT Licensed. Copyright (c) Daryl Buckle 2020.
