import { Skill } from './skill';

export interface Project {
    name?: string; // The name/title of the project.
    owner: string; // The person or company who owns the project
    role?: string; // Enter the name of the company used in the 'company' property of the 'role' model if applicable.
    icon?: object; // A font awesome icon to show for this qualification.
    image?: string; // The url of an image to show instead of an icon. This can be the url of a public image or the path of a local asset.
    imagestyle?: object; // If image is set you can use this to apply custom styles to the image.
    images?: string[]; // This will show multiple images in a carousel on the modal screen instead of 'image'.
    url?: string; // A link to more information about the project. Will show on the modal screen.
    private?: boolean; // Whether the source code is public or private.
    startdate?: Date; // When you started working on the project. Must have either 'enddate' set or 'current' === true.
    enddate?: Date; // When you finished working on the project. If 'startdate' is not set only the enddate will show.
    current?: boolean; // Whether you are still working on this project.
    skills?: Skill[]; // A list of skills/technologies relating to the project. The project will then show in the skills section.
    info?: string; // Additional details. Shows on modal screen only. Accepts html.
}
