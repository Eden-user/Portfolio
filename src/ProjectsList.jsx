const images = import.meta.glob('./assets/*.{jpg,png,jpeg,webp}', { eager: true });
export const ProjectsList = [
    {
        id: "Magellan",
        title: "Interactive app - Magellan",
        desc: "Tablet app consisting of an SVG map and a digital book that interact with each other. Curious?",
        img: ["./assets/Magellan1.webp", "./assets/Magellan2.webp"],
        link: "/Project/Magellan",
        longDesc: (
            <>
                <h2>The project's genesis</h2>
                <p>This project was commissioned by La Compagnie de la Lanterne magique, an association that creates shows combining stories and magic. They are located in Clermont-Ferrand (France). Find out more about them <a href="https://www.compagnie-lanterne-magique.fr/" target="_blank">here</a>.</p>
                <p>In this project, I had two main objectives. The first one was to design a world map that could be printed/projected on a large scale and that I could reuse later for the 2nd part of the project. I chose to do it in an SVG format for scalability.</p>
                <p>Here’s an (old) pic of me next to the print of the map used for the show :p</p>
                <img className="img-text" src={getImageUrl("./assets/Magellan3.webp")} alt="pic of me next to a big print of the map" loading="lazy"/>
                <br/>
                <h2>Let's talk tech</h2>
                <p>The goal was to have the app running offline on an Android tablet to be displayed during an exhibition about Magellan’s travel around the world so that the public could interact with it. </p>
                <p>The app consists of a digitalised version of the physical book (which is handwritten) you can leaf through thanks to the <a href="https://github.com/blasten/turn.js/" target="_blank">turn.js library</a>, and the SVG map, with the journey’s different landmarks linking to the related chapter in the book. There are different ways to access the book: from the beginning, by selecting a chapter, or by selecting a theme (an animal, a plant, a place, a character, etc.). </p>
                <p>In addition, I was asked to add a few documentation pages about Magellan, an embedded video made by a group of students in class, and games (which have not been deployed yet).</p>
                <p>To access it offline on the tablet, I simply put the files on the device’s hard drive and opened them using a local server app. If you wish to experience this project yourself, just run it through your local server (XAMPP, MAMP, …) and you’re all set.</p>
            </>),
        technologies: ["JavaScript", "jQuery", "HTML", "CSS", "SVG"],
        githubLink: "https://github.com/Eden-user/Portfolio-Bachelor/tree/comp%C3%A9tences/Projet_Magellan",
        featured: true
    },
    {
        id: "STORG",
        title: "End-of-year project - STORG",
        desc: "File compression/decompression & transfer software.",
        img: ["./assets/STORG1.webp", "./assets/STORG2.webp", "./assets/STORG3.webp"],
        link: "/Project/STORG",
        img2: "./assets/homepage_pic_me.webp",
        longDesc: (
            <>
                <h2>About this project</h2>
                <p>This is a project we're doing as part of our 2nd year of the bachelor's program at IPI (2025-2026). This project was started by my group in the 1st year, and I joined it when I arrived at this school in the 2nd year.</p>
                <p>The guideline was simple: you have two years to complete the project of your choice in groups of 3 to 4 students, and at the end of the 2nd year, you'll have to present it in front of a jury.</p>
                <p>I was welcomed into the group of <a href="https://github.com/Lublyx" target="_blank">Lucas S.</a>, <a href="https://github.com/aslikerzz" target="_blank">Augustin F.</a>, and <a href="https://github.com/Neo-cell-droid" target="_blank">Issam L.</a> who were working on STORG, a software initially designed to compress and decompress files. The interesting part was that, to do so, they decided that the compression algorithm would compress the files into an image, and each pixel of that image would have a different hexadecimal color based on the binary data it contains.</p>
                <p>This way, users can compress large files and share the image, and the recipient can decompress the image to retrieve the original file.</p>
                <p>To complement the software, they also developed a mobile app and a website for this fictitious (for now) organization. And as the project grew steadily, they also decided to add a transfer feature to share files between different devices.</p>
                <p>The main program was written in C#, and the graphic interface uses Avalonia; both run through .NET. The mobile app is designed with ReactNative and the website with HTML, Tailwind CSS, and JavaScript vanilla. I contributed to making the software cross-platform, especially for macOS, and also heavily contributed to the UI/UX design using Figma (cf. the 3rd screenshot). I intend to implement it using Avalonia.</p>
            </>),
        technologies: ["C#", ".NET", "Avalonia", "ReactNative", "Figma", "HTML", "Tailwind CSS", "JS"],
        githubLink: "https://github.com/Storg-Team",
        featured: true
    },
];
export function getImageUrl(path) {
    return images[path]?.default;
}