const images = import.meta.glob('./assets/*.{jpg,png,jpeg,webp}', { eager: true });
export const ProjectsList = [
    {
        id: "Magellan",
        title: "Interactive app - Magellan",
        desc: "Tablet app consisting of an svg map and a digital book that interact with each other. Curious ?",
        img: "./assets/Magellan1.png",
        link: "/Project/Magellan",
        img2: "./assets/Magellan2.png",
        longDesc: (
            <>
                <h2>The project's genesis</h2>
                <p>This project was commissioned by La Compagnie de la Lanterne magique, an association that creates shows combining stories and magic. They are located in Clermont-Ferrand (France). Find out more about them <a href="https://www.compagnie-lanterne-magique.fr/" target="_blank">here</a></p>
                <p>In this projects, I have two main objectives. The first one was to design a world map that could be printed/projected on a big scale and that I could reuse later for the 2nd part of the project. I chose to do it in an SVG format for scalability.</p>
                <p>Here’s a pic of me next to the print of the map used for the show :p</p>
                <br/>
                <h2>Let's talk tech</h2>
                <p>The goal was to have the app running offline on an android tablet to be displayed during an exhibition about Magellan’s travel around the world, so that the public could interact with it. </p>
                <p>The app consists of a digitalised version of the physical book (which is handwritten) you can leaf through thanks to the <a href="https://github.com/blasten/turn.js/" target="_blank">turn.js library</a>, and the SVG map, with the journey’s different landmarks linking to the related chapter in the book. There’s different ways to access the book : from the beginning, by selecting a chapter, or by selecting a theme (an animal, a plant, a place, a character, etc.). </p>
                <p>In addition, I was asked to add a few documentation pages about Magellan, an embedded video made by a group of students in class, and games (which have not been deployed yet).</p>
                <p>To access it offline on the tablet I simply put the files on the device’s hard drive and open them using a local server app. If you wish to experience this project yourself, just run it through your local server (xampp, mamp, …) and you’re all set.</p>
            </>),
        technologies: ["JavaScript", "JQuery", "HTML", "CSS", "SVG"],
        githubLink: "https://github.com/Eden-user/Portfolio-Bachelor/tree/comp%C3%A9tences/Projet_Magellan",
        featured: true
    },
    {
        id: "Magellan2",
        title: "Application interactive - Magellan3",
        desc: "ceci est une description3",
        img: "./assets/homepage_pic_me.jpg",
        link: "/Project/Magellan2",
        img2: "./assets/homepage_pic_me.jpg",
        longDesc: (
            <>
                <p>blablabla</p>
                <h2>sous-titre ?</h2>
            </>),
        technologies: ["React", "TypeScript", "Python"],
        githubLink: "https://github.com/eden/magellan",
        featured: false
    },
];
export function getImageUrl(path) {
    return images[path]?.default;
}