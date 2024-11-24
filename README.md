# Readery

Readery is an innovative platform where users can buy and sell books and posters. It combines intuitive design with powerful features, making it easy to explore, showcase, and expand collections. Whether users are searching for captivating reads or eye-catching decor, Readery provides a seamless experience tailored for book lovers and art enthusiasts.

The project emphasizes scalability, modularity, and user-centric design, ensuring both developers and users can benefit from its thoughtful implementation.

## (Getting Started)

Follow these instructions to clone, set up, and run Readery on your local machine for development and testing.

## Prerequisites

List things needed to install the software and how to install them
Ensure you have the following installed:
* Node.js
* Firebase CLI
* Git

Clone the Repository:
Start by cloning the project repository to your local machine:

```
git clone https://github.com/Atharvasaraiya/Readery.git  
cd Readery  
```

Install Dependencies:
Ensure you have Node.js installed. Run the following command to install the required packages:

```
npm install 
```

Configure Environment Variables:
Create a `.env` file in the root directory.
Add relevant API keys, database connection strings, or backend URLs as required by the application.

Set up Firebase:
Initialize Firebase using your credentials.
```
firebase init
```

Start the Application:
Run the development server:
```
npm start
```

Open your browser and visit http://localhost:3000 to access the app.

## RBAC (Role-Based Access Control) in Readery:
Readery implements RBAC to manage user access based on roles:

* Admin: Full control over listings, user accounts, and platform analytics.
* Seller: Can manage their own listings, view transaction history, and update product details.
* Buyer: Can browse, search, and make purchases, but cannot modify listings.
* Guest: Limited access to view content, requiring sign-up to perform actions like adding items to the cart.
  
Implementation:

* Firebase Authentication for role-based sign-in.
* Firestore Security Rules restrict data access based on user roles.
* Conditional UI rendering ensures only authorized users can access specific features.

## Technical Details
* `Frontend:` React.js
* `Backend:` Integrated with Firebase for backend functionality
* `Database:` Firebase Firestore for real-time data management and storage
* `Authentication:` Firebase Authentication for secure user sign-up and login
* `Hosting:` Firebase Hosting for reliable and scalable deployment
* `State Management:` Context API or Redux
* `Styling:` Tailwind CSS for a responsive and aesthetic user interface


## Usage
* Register as a user and log in to explore features.
* Create listings for books or posters by filling out details like title, description, and price.
* Browse the marketplace, filter results, and purchase items of interest.
* Manage your listings and track purchases/sales from the user dashboard.


## Testing

Explain how to run the automated tests for this system

### Run tests using the following command:

```
npm test
```

## Coding style cheeks:
Lint the code for style consistency:

```
npm run lint
```

## Deployment

To deploy Readery using Firebase Hosting:

* Build the project:

```
npm run build
```
* Deploy to Firebase:

```
firebase deploy
```
The live project will be accessible via your Firebase hosting URL.


## Built With

* React.js - Frontend framework
* Firebase - Database, Authentication, and Hosting
* Tailwind CSS - Styling

### Source Control

We use the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) for managing the source code. So if you want to contribute, follow these steps:

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request and be prepared to discuss your additions! :)

## Contributing

Contributions are welcome!

Fork the repository.
Create a feature branch:

```
git checkout -b feature/new-feature
```
 Commit changes:

```
git commit -m "Add new feature"
```
Push and submit a pull request.

## Authors

* Relevant author information and links

See also the list of [contributors](https://github.com/Atharvasaraiya/project/contributors) who participated in this project.

## License

his project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Thanks to Firebase for seamless integration.
* Inspiration from book-lovers worldwide.
