# getFood()
Kris, Koko, Kritika, Rodrigo, Zac
'The Food Waste Reducer'

Digital Wireframe:
https://whimsical.com/getfood-JfoEWmZzgLJTabRX5iejtA

Deployed?! (cheeeeeeers Kris!):
https://getfoodeda.herokuapp.com/

// ------------------------------------------------
// ------------------------------------------------
Wednesday 21/07/2021 

No major changes in roles, finishing touches.
Rodrigo:
- The website is responsive now!
- Image upload as stretch
- Edit Item start

Kritika:
- Main homepage images create for both corners

Koko:
- Testing on server side

Kris:
- Image upload as stretch
- Testing
- (Might have missed something here I can't remember lol)
- Edit Item start

Zac:
- Finish off form. Found Rodrigo's additem form looks way better, to make it look same
- Images of cohort
- Edit Item start

// ------------------------------------------------
// ------------------------------------------------
Tuesday 20/07/2021 

Morning stand-up.
Kritika:
- Styling changes with background and to make it look trendy

Kris:
- Auth0 progress, refreshing on any page to keep auth info
- Help on Claim and Delete function. 
    - Claim function to get logged in user's id (linked with auth0id)

Rodrigo:
- More styling has been done
- Functionality to finish - help with Claim and delete

Koko:
- Finish some styling
- Jump on writing testing in preparation for presentation

Zac:
- Finish Claim functionality
- Help on styling

Afternoon standup:
MVP DONE!!!
Kris:
- Finished Auth0 refresh issue
- Image upload function?
- Testing

Rodrigo:
- Small changes for design
- Improve design and styling

Kritika:
- Updates on responsiveness, fixes for styling

Koko:
- Testing improvements, more testing

Zac:
- Finished Claim function
- Images for users (from Slack)
- Form styling improvement, add responsiveness
- Stretch Edit item. Need to create component + form
- Address input form - ADDRESSFINDER (but only for one line, not seperated into address, suburb, city etc)

Personal note for Zac, styling to do:
- Form (card) to refer to Profile.jsx
- Need all classNames to be unique - copy and paste, rename to use for each _module.scss
- Label to be purple.
- Responsiveness for ProfileSetUp


Backup plans:
- (Zac - hasn't shared yet) myItems to show only items that are isClaimed=true, not by logged in user's id?
// ------------------------------------------------
// ------------------------------------------------
Monday 19/07/2021

Not all notes written here, but main changes to do:
Orders table obsolete, modify items table for createdById, claimedById to use for hiding items when claimed, and to show on myItems component.

Styling updates - main priorify

Functionality, a lot to do by Rodrigo.

Zac - table routes dbfunction, and then frontend with kris? For reducers etc

Discussion with Don for Auth0
Remove Hashrouter and use BrowserRouter, modify server.js to have the star which sends json. This should be all. Refer to Gardenz

(Also, we have been utilising the kanban board on github for keeping track of our ticket/issues. Thanks for the setup Koko!)

// ------------------------------------------------
// ------------------------------------------------
Friday 16/07/2021

Things done yesterday: 
- Digitla Wireframe (yay Kritika!!)
- Basic component layouts done
- Redux actions for MVP done
- Server side for MVP done

Note:
- Keep pushing whatever is working to your branch first!

Today:
- Koko: files for images. When done, to check for next
- Kris: Routes finished, a few more to write. Now we can access db. 
    Start working on Auth0
    Also Deployment. If not Heroku or AWS, Netlify(?) 
- Goal by end of today. Server finished, working Dev branch.
- Kritika: Setup folders for SASS. Folders currently 80% empty. Reference for Gardenz. Need to make sections. To check with Prue for correct way.
        HTML structures.
- Rodrigo: Post images check, pacakage? Redux is working. Getting data is working. Not tested Post yet. Logics are there, but need to test/make it work
- Zac: component re-render on refresh page issue, then work on HTML/CSS

// ------------------------------------------------
// ------------------------------------------------
Thursday 15/07/2021

Planning: 
- Wireframe setup
    - Wimsicle / Sketch or AdobeXD
- Clean up / setup server side


Redux - Rodrigo - presentation?
What actions are needed?

Zac - basic components
Rodrigo - initial setup of Redux with toolkit. Then maybe a quick update on others / tutorial
Kritika - finish digital wireframing by lunch. Then we need to discuss styling. Leave off until next week or start this week?
Kris - finish server side cleaning by lunch? Get basic database setup. Routes, database functions All that done today maybe


// ------------------------------------------------
// ------------------------------------------------
Wednesday 14/07/2021

https://files.slack.com/files-pri/T02SQPVAC-F028CNTF1BK/20210714_174808.jpg
https://files.slack.com/files-pri/T02SQPVAC-F027X2VDTSR/20210714_174816.jpg
https://files.slack.com/files-pri/T02SQPVAC-F028CNTJJ2D/20210714_174757.jpg
https://files.slack.com/files-pri/T02SQPVAC-F0286AN93B6/image_from_ios.jpg
https://files.slack.com/files-pri/T02SQPVAC-F02804NQC4A/image_from_ios.jpg
https://files.slack.com/files-pri/T02SQPVAC-F027KCU48LX/image_from_ios.jpg
https://files.slack.com/files-pri/T02SQPVAC-F0286ANFB8C/image_from_ios.jpg

What do we want out of this?
- Fun 
- Learn & practice
- Something "working" 
- Presentable Product 
- Practice Agile method during the project - standups
- Everyone is on the same page, try to minimise any confusion. 
- Keep on communicating.

Roles:
Decision maker?
Guider of group: Kris
Git Master: Zac
Frontend: Kritika, Rodrigo, Zac
Backend: Koko, Kris 
Floater: Rodrigo

Conflicts:
- If tech: democracy, voting.
- If actual conflict: take a 10-min break. Communicate. stop and talk. and utilise standups.  Respect everyon'es space.

Hours:
- Weekdays same for everyone. If working on weekends, prefer to work remotely (commute time is too much)
    Focus on finishing by Friday night, try not to work on the weekends.
    Have a clear plan how far we CAN go or WANT to go.
    Have Sprints everyday.

Communication:
- Slack. Update everyone! especially working in weekends. 

Backlog board:
- Utilise it like the multiday.

When stressed:
- Kris: when he knows what he's doing, quiet time, quiet head space to do work alone. But if blocked, need someone's eyes.
- Zac: Just work alone, quietly. No distractions.
    Note: we could say to everyone "I'm having a time-out" etc.
    Note2: if we need to pair-up, tell everyone/someone and pairup.
- Kritika: Usually go for walk, space, and eat, instrumental music - focus on work alone.
- Rodrigo: Manage it well generally, takes a break in the middle. 
- Koko: Taking a break. Gets stressed when there is nothing to do, needs to be occupied.
    If waiting, to ask if she can help or check backlog.

Standup agenda: 
- Maybe check in like Carolyn - emotions, of how you're feeling
- 3 times a day:
    Once in the morning, and once after lunch time, and before going home.

How will we survive? 
- Eating - be free - mingle with everyone in the cohort.

If you're stuck on something:
- Keep track on how long you're stuck on it. Utilise toggl?
- Usually 15 mins then ask

To do today: 
- Draw out diagrams and components on how its gonna look like.
- Backlog tickets for down/idletime.

Stretch:
- Learn React-native - build on react
- Deploy CICD
- Testing - think about the tests! when writing anything!


FEATURES
Assumption: 
- everyone has good intention
- any food goes. Ingredients, cooked food, frozen food etc.
- Free service
Users:
    Receivers, 
    Givers:
    - Restaurant 
    - Individual Persons
    - Charities
    - Government
    - ..
    - Anyone
Timeout system:
   - Giver 
   - User 'claims it'.
   - Timer starts, say 2 hours or custom every time.
   - If 'claim confirmed' is not activated within 2 hours, reset timer and someone else can claim it.
Rating/Feedback type system:
   - If food given out is bad quality etc, feedback for the user 
Preference/wanted items:
   - Receivers can post requests - something like, "need item X, Y kgs."
   - Givers can see the list of requests and let receiver know.
Live Feed / DM system:
   - "Has item X?"
           "Yes!" -
Profile:
   - Usually Receiver or Giver?
   - Preference: vegan/vegetarian - search results filter out meat etc
Search:
   - Filter tickboxes:
        Gluten Free, vegetarian, vegan etc 

Giver user story:
Upload post for "Food DOnate Form" 
Once dispatched, In the Food Donate Form, Submit button becomes: ReEdit / Dispatched

Receiver user story:
See items posted by Giver on the list. Just claim it as MVP.
Stretch maybe to claim only some of the available item.

Profile history of what was given / claimed



MVP (best to refer to the board for this)
Home page, Welcome, click Sign in
Claim it - no timer, nothing, just claim and greys out.
Profile - only one profile (Receiver and Giver). Button 
Utilise static page - info about us, or health & safety.
Add, Edit, Delete Products
MVP - No map but address
Profile - edit profile (for location)

Tables:
User
Product
Orders

Stretch:
Swiping (like Kei's project) - swiping food left and right in Feed page
Nutrition value - GoogleAPI??
Map
Scrollbar (styling) - check 'overflow'
Receiver - list of items received/claimed

To do's:
read up on redux toolkit
market research?
repo setup
wireframe

App for reference:
OLIO


// ------------------------------------------------
// Lache's guideline
// ------------------------------------------------

A quick reminder of some of the things you should discuss today :v:
Things to discuss BEFORE planning your project:
- Check in (how are you? How do you feel about working on this larger project?)
- Wellbeing (when I’m stressed ... I need...) (general needs eg. kids, illness, sleep etc)
- Expectation setting and agreements (what hours will we keep (factoring in needing to sustain this for a whole week!), what do we do when conflict arises (create your conflict resolution plan for Human Skills!), how will we communicate)
- How will we work (what roles and what agile rituals will we use etc)
- How will you survive (Will you eat together? How will you break the tension? What is your fun times plan?)
- How will you, individually and as a team, get the help you need both technically and non-technically
Things to think of WHILE planning your project and AFTER discussing the things above:
- What is your MVP? How much work do you think it will take to achieve it?
- What tech will you be using? Is there anything you need to research? Will you use Redux?
- GitFlow. How will you arrange your work?
- Roles. Which will you use? Who will be accountable for which areas?
- What might a day look like? What agile rituals will happen? When will you do the hard tech? Will you go outside as a team?
- Documentation. Set up a repo and a readme, start adding things to it
- Set up a kanban board (To Do, Up Next, In Progress, Done)
- Draw your wireframes, make some user stories
Things to remember in general:
To have fun!



