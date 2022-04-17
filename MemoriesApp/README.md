Memory Lane is a mobile application created in React Native by Mariel Anne Uykim (46129448). The Application allows users to upload photos and store them in a collection which they can view later on. 

This application was tested using an Android device with a 20:9 ratio. 

Features:
- Can sign up or sign in to an existing account
- Can view photos by collections
- Can delete an entire collection
- Can upload a photo and create a new collection
- Can view all photos available
- Can view an individual photo by clicking on it

Limitations:
- Users are fixed (signing up doesn't modify the user base)
- Images are shared between users (doesn't change based on user)
- Uploaded images and new categories only stay until the app is closed

Usage Instructions:
- To enter the home screen you can either sign up with random credentials or use an existing credential in the login page (username: qwerty, password: qwerty).

- To upload a photo click on the plus icon at the bottom right of the screen, select a collection or if you want to create a new collection click on the '+ new collection' at the drop down and enter the name at the text input field. After click on the plus button beside it. Then click on the upload image button which will allow you to browse on the gallery. Select a photo and click on the pink upload button.

- To delete items, click on collections and swipe left on the collection you want to delete. Press on the trash bin icon. Make sure to use the back arrow when you want to go back to the home screen to save any changes.

Screens:

1. Welcome Screen: The user is first greeted with the welcome screen which has a 'get started' button that directs them to the register screen when pressed.

2. Register Screen: The register screen contains a form that asks for registration details (username, email, password) and allows the user to submit it and will redirect them to the home screen after. Alternatvely, if the user already has an account they can choose to go to the login screen by pressing the login option below the register button.

3. Login Screen: The login screen contains two input fields that ask for the username and password of the user. It verifies whether the user exists or placed valid credentials based on the Users.js file after pressing the sign in button. Upon successful verification, the user is redirected to the home screen. If the user wants to register instead they can click on the Sign Up text below.

4. Home Screen: The home screen allows users to view their collections and photos. The latest six photos are displayed at the bottom half of the screen but there are two ways users can view their photos. First, by using the clicking on a collection below the 'collections' text or second, by clicking on the 'all photos' text. The first option displays images inside the collection while the second option displays all the images. Pressing the 'Collections' leads to the colletion list screen. The plus button at the bottom right of the screen leads to the upload page and the exit button at the top left allows user to logout.

5. Upload Screen (Add Image Screen): The upload screen allows users to upload images from their device and select an exisiting collection to place it in or create a new one. When the user selects a collection and adds uploads an image they can click on the upload button which would redirect them back to the home page.

6. Collection Screen: The collection screen is displays all the images in the collection the user clicks on. A back button is located at the top left corner of the screen which would redirect them back to the home page.

7. Collection List Screen: The collection list screen can be accessed by clicking on the 'collections' text at the home screen. This displays all the collections in a list manner and allows users to delete an entire collection by swiping left and clicking on the trash bin icon.

8. Gallery Screen: The gallery screen displays all the photos that the user has uploaded. A back button is located at the top left corner which leads back to the home screen.


