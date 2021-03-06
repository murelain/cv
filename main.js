var en = {
    "contacts": {
        "name": "Mariia Deviatykh",
        "email": "",
        "tagline": "",
        "skype": "murelain",
        "website": "http://mariadev.pro/",
        "linkedIn": "https://www.linkedin.com/in/mariadevyatykh/",
        "github": "https://github.com/murelain/"
    },
    "education": {
        "place": "University of the Water Communications (currently Admiral Makarov State University of Maritime and Inland Shipping), Saint-Petersburg, Russia",
        "period": "September 2007 – June 2012",
        "degree": "Mathematician, System Programmer"
    },
    "languages": [
        {
            "name": "English",
            "level": "Profecient"
        },
        {
            "name": "Russian",
            "level": "Native"
        },
        {
            "name": "German",
            "level": "Elementary"
        }

    ],
    "interests": [
        "Travel",
        "Music"
    ],
    "career_description": "I am a skilled developer with 5 years experience, recently specializing on front-end on  angular with previous experience in enterprise companies with a wide range of technologies as IBM Lotus Notes, C#, .Net and MS SQL. I like implementing beautiful designs, user-friendly forms and trying to make it at its best. I appreciate working in the company or a project where my work is valued and used by people. I am a committed team player.",
    "experiences": [
        {
            "company": "SharpDev, Russia",
            "position": "Front-end Developer, Remote",
            "period": "July 2019 – present time",
            "description": "In SharpDev we work at different projects. Tried my hand at crypto-currency wallet using .net and cyber games platform using Angular",
            "duties": []
        },
        {
            "company": "Appness JSC, Saint-Petersburg, Russia",
            "position": "Front-end Developer ",
            "period": "June 2016 – January 2019",
            "description": "At appness.com I was a significant part of the team of 5-6 developers in creating innovative web marketplace for Facebook advertisement with more than 100 users. I created components, designed user interface, analyzed user requirements and performed user support. ",
            "duties": []
        },
        {
            "company": "JSC «LENMORNIIPROEKT», Saint-Petersburg, Russia",
            "position": "Developer Programmer",
            "period": "March 2014 – June 2016",
            "description": "I was a developer programmer in the department of automatization. I maintained a number of applications in the IBM Lotus Notes and developed an application for geologist for them to enter, analyze and export large amounts of data. ",
            "duties": []
        },
        {
            "company": "JSC « TGC-1», Saint-Petersburg, Russia",
            "position": "Developer Programmer",
            "period": "December 2012 – February 2014",
            "description":  "In «TGC-1» I worked mostly as a system programmer with creating tools and apps for local system administrators.",
            "duties": [
                "Developed the application for system administrator for monitoring and managing computers in the network. Application was created using C#, MFC, PowerShell, ActiveDirectory, SCCM etc. Developed different scripts for system administration",
                "Developed, configured and support portal with SharePoint. Wrote end user documentation for the web portal",
                "Finding and debugging errors in programs flow"
            ]
        },
        {
            "company": "JSC «LENMORNIIPROEKT», Saint-Petersburg, Russia",
            "position": "Junior Developer Programmer",
            "period": "February 2011 – June 2012",
            "description":  "Support and development of applications on IBM Lotus Notes, user support.",
            "duties": []
        }

    ]
};
function initData() {
   console.log(en);
   Object.keys(en).forEach(function(key) {
       en[key]
   })

   document
}
window.onload = initData;