import { Project } from './project';

export interface Role {
    title: string; // Your job title.
    company: string; // The name of the company.
    location?: string; // Your place of work.
    url?: string; // A link to the companies website. The companies name on the timeline becomes a link if set.
    startdate: Date; // When you started employment. Must have either 'enddate' set or 'current' === true.
    enddate?: Date; // When you finished employment.
    current?: boolean; // Whether you are still employed.
    positions?: Role[]; // A list of positions held at the company included start and end dates.
    projects?: Project[]; // A list of projects worked on at the company.
    info?: string; // Additional details. Accepts html.
}
