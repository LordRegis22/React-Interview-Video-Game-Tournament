## Videogame Tournament Scheduling

Build a videogame tournament scheduling app that will enable a user to find and select
up to three users of the same gaming console to invite them to play a game together.

Although this application only has 500 users in its database, assume that the database
contains thousands of users. Build for performance.

1. Fetch and display the users in the database using the provided `fetchPlayers` function.

- This function "calls an API" that is 93% dependable
- The function will handle converting Stream/Buffer to JS, you do not need to worry about parsing
- If the server responds with an error, display the error to the user

2. Users will select other players by clicking on their entry. Build a section to contain selected users.

- It should only display if at least one user has been selected
- Once a user is selected, additional users must have the same console in order to be selected.
- The user's entry in the "selected players" list should have a background of their favorite color
- If a user is added to the "selected players" list, they should be removed from the "all players" list.
  What are some of the performance concerns of this task?

3. If a user wishes to remove a player from the list, they can click on their entry in the "selected" list to remove them from the list.

- Re-add the deleted player to the "all players" list
