# getFood()
Kris, Koko, Kritika, Rodrigo, Zac
'The Food Waste Reducer'

https://whimsical.com/getfood-JfoEWmZzgLJTabRX5iejtA
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



