# AdoptMe

Pet Finder - Application to find and adopt pets in your. Search parameters to narrow down your search example: breed, color, health, etc. Option to pin/favorite animals and store them in a database for easy access in the future.

User Story: As a user, I'm looking for an application that will give me animals up for adoption based on the location I entered. After I search I am presented with basic information about the pet such as name and distance from me and a link to view more details on the pet. Each pet will have a favorites button for me to check and save that pet to view later.

- Live Demo
  https://desolate-waters-99049.herokuapp.com/

![Picture](public/assets/images/adoptme_site.PNG)

## Troubleshooting diaries

Revisiting this project which is from my bootcamp as you may know. It initially was functioning as expected on deployment, but upon testing it before deploying my portfolio I found that it had gone down on heroku. Gave it a try on Netlify, and my build was failing. I decided to check the docs and it said to make sure the web application would build on a local machine. At this moment I decided I would just go down the "signal chain" and figure out the point at which it was failing. After testing the build on my machine, I did a basic npm start to find that was broken as well. Worked on the the error it gave me, couldn't find a file, turns out what was functioning as a server for me was named express.js instead of server.js. Did another run build, which led to my terminal continuously exectuing a run build command and then getting stuck. At this point I'm working on the branch I originally worked on because I'm not sure what might've happened to the master branch. I didn't see any pull requests that messed it up at this point, but at least if I'm working in my own branch, I'll be able to understand what my thinking at the time might've been. Now my server is actually starting, but the connection was refused with after some googling seems to be MySQL. This makes sense because I don't have it installed on my mac yet, so once that is installed and ready to go I'll either download the file from the original project or recreate it myself to see if I can connect to it.

This must be related to why I have so many objects undefined in my config and controllers directories. It also must be bleeding down to the rest of the project, because if I can't get the data from the API, database, and SQL, the software has nothing it can do with undefined data.

This is a big time first draft of my findings with this project. Will clean it up at some point. Just wanted to get my ideas down pretty much.
