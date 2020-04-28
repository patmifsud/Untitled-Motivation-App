// const exampleTemplate = {
//     title:"name",
//     desc: "name",
//     video: "url",
//     image: "NOT IN V1",
//     quote: "NOT IN V1",
//     link: "url",
// }

// to do
// insert a youtube url in, it automatically strips out excess 
// image and quotes

let library =[
        {
            quote:"our work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
            key:13456344
        },
        {
            title:"Navy Seal Commander explains why you should wake up at 4am",
            video: `C-Cvl3_CH2A`,
            link: "https://www.youtube.com/watch?v=C-Cvl3_CH2A",
            key:23642462
        },
        {
            title:"NO EXCUSES",
            video: `g3s0--LcgQw`,
            link: "https://www.youtube.com/watch?v=g3s0--LcgQw",
            key:34563456
        },
        {
            title:"WORK HARDER | a motivational video ft. CASEY NEISTAT",
            video: `YMYgjVstBy0`,
            link: "https://www.youtube.com/watch?v=YMYgjVstBy0",
            key:345645643
        },
        {
            title:"NEVER TAKE NO FOR AN ANSWER",
            video: `Sy3Sghe5NPM`,
            link: "https://www.youtube.com/watch?v=Sy3Sghe5NPM",
            key:4356768688
        },        
        {
            title:"DO MORE",
            video: `ZwYy4scOJi8`,
            link: "https://www.youtube.com/watch?v=ZwYy4scOJi8",
            key:3456453634
        },
        {
            title:"Fat and Lazy",
            video: `ZexvTZ1sV8U`,
            link: "https://www.youtube.com/watch?v=ZexvTZ1sV8U",
            key:245747477
        },
        {
            title:"How To SMASH DAYS When You Don't Feel Like It - Jocko Willink",
            video: `67Vp7fTgQ3g`,
            link: "https://www.youtube.com/watch?v=67Vp7fTgQ3g",
            key:564754576
        },
        {
            title:"Another Jocko Willink video",
            video: `4d-P9baha-w`,
            link: "https://www.youtube.com/watch?v=4d-P9baha-w",
            key:564753564
        },
        {
            title:"Even With a Short Attention Span. This is How You Get Big Tasks Done",
            video: `JIHTEYrFl_A`,
            link: "https://www.youtube.com/watch?v=JIHTEYrFl_A",
            key:5697977964
        },
        {
            title:"Why Discipline Must Come From Within",
            video: `9OF06n1jNkM`,
            link: "https://www.youtube.com/watch?v=9OF06n1jNkM",
            key:345754737
        },
        {
            title:"Burnout by Lauren Dickens",
            image: 'https://cdn.dribbble.com/users/50292/screenshots/6282968/burnout_4x.png?compress=1&resize=1200x900',
            link: "https://dribbble.com/shots/6282968-Burnout",
            key:5697457537964
        },
        {
            title:"Elon Musk - MULLIGAN BROTHERS INTERVIEWS",
            video: `00cizszd4z0`,
            link: "https://www.youtube.com/watch?v=00cizszd4z0",
            key:345754737
        },
        {
            title:"work harder by sofya",
            image: 'https://cdn.dribbble.com/users/1860143/screenshots/8559770/media/5df87fe706ad2fdb140acfb768c8cbcd.gif',
            link: "https://dribbble.com/shots/8559770-work-harder",
            key:2345645754
        },
        {
            title:"work harder by sofya",
            image: 'https://cdn.dribbble.com/users/1860143/screenshots/8559770/media/5df87fe706ad2fdb140acfb768c8cbcd.gif',
            link: "https://dribbble.com/shots/8559770-work-harder",
            key:2345645754
        },

    ]


function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
        return a;
    }
  

export default shuffleArray(library);