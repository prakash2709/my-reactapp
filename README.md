# my-reactapp

QuickSell_FrontEnd_Project
Kanban Board Application with React JS
This project is an interactive Kanban board application built using React JS. It allows users to fetch and display data from the provided API https://api.quicksell.co/v1/internal/fronten and dynamically adjust the view based on the user's preferences.

Functionality

![image](https://github.com/prakash2709/my-reactapp/assets/96177649/23b1aadd-a01d-4bd2-a0f3-6e02702c604d)



The application provides the following features:

Display Options: Users can click the "Display" button and choose from three distinct ways to group the data:

By Status: Group tickets based on their current status.
By User: Arrange tickets according to the assigned user.
By Priority: Group tickets based on their priority level.
Sorting: Users can sort the displayed tickets in two ways:

By Priority: Arrange tickets in descending order of priority.
By Title: Sort tickets in ascending order based on their title.

![image](https://github.com/prakash2709/my-reactapp/assets/96177649/39c6e062-f46d-4b08-848a-10ef4558753e)

Priority Levels: The priority levels for the tickets are defined as follows:

Urgent (Priority level 4)
High (Priority level 3)
Medium (Priority level 2)
Low (Priority level 1)
No priority (Priority level 0)
Visual Design
The UI of the application is designed to match the provided screenshots and is visually appealing. It includes a responsive Kanban board with a card design for each ticket.

State Persistence
The application saves the user's view state even after a page reload. This ensures that the user's preferences for grouping and sorting options are retained.
![image](https://github.com/prakash2709/my-reactapp/assets/96177649/93e466ca-086d-4b43-9f83-7458f83cab33)


Implementation Details
React JS: The application is built using pure React JS without the use of any CSS library, framework, or UI components like Tailwind, Vite, Material UI, or Chakra.

API Integration: Data is fetched from the provided API https://api.quicksell.co/v1/internal/frontend-assignment to populate the Kanban board.

Component Structuring: Components are structured in a way that promotes reusability and maintainability. The codebase is organized to make it easy to understand and extend.

Icons
For icons, you can use any library or pick icons from Google.

Evaluation Criteria
Your work will be evaluated based on the following criteria:

Functionality: The application should effectively fetch data from the provided API and allow users to group and sort tickets based on the given options.

Visual Design: The UI should match the provided design, including the layout, card design, and overall aesthetics.

Business Logic Optimization: The code should be optimized for efficient business logic, ensuring smooth performance.

Component Structuring: Components should be appropriately structured, promoting reusability and maintainability.

How to Run the Application
To run the Kanban board application, follow these steps:

Clone the repository to your local machine.

Navigate to the project directory.

Install the required dependencies using the following command:

npm install
Start the development server:

npm start
Open a web browser and access the application at http://localhost:3000.

Author
Sai Prakah Marikanti
