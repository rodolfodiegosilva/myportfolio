import { Project } from './project';
import { Role } from './role';
import { Qualification } from './qualification';
import { Skill } from './skill';


export interface Profile {
    name: string; // Your name.
    title: string; // Your current job title.
    location?: string; // Your current location.
    projects?: Project[]; // A list of your own projects outside of employment.
    roles?: Role[]; // A list of companies that you have been employed at.
    qualifications?: Qualification[]; // A list of your qualifications.
    skills?: Skill[]; // A list of skills and/ore technologies that you have worked with.
    linkedin?: string; // Your LinkedIn user name. If set this will show in the footer.
    twitter?: string; // Your Twitter user name. If set this will show in the footer.
    facebook?: string; // Your Facebook user name. If set this will show in the footer.
    instagram?: string; // Your Instagram user name. If set this will show in the footer.
    github?: string; // Your GitHub profile user name. If set this will show in the footer.
    stackoverflow?: string; // Your Stack Overflow profile user id. If set this will show in the footer.
    email?: string; // Your contact email address. This will show in the footer if set.
    mailto?: string; // Email Address where the contact button will send to.
    about?: string; // More information about you. This will show in the About section. Accepts html.
}
