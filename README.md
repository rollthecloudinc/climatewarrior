![climatewarrior_banner_v1](https://github.com/rollthecloudinc/climatewarrior/assets/73197190/adcb7b46-3102-4bb9-8482-bec0aff1e8b3)

## Summary

Welcome to ClimateWarrior, an innovative, eco-conscious GitHub App that's currently in Alpha stage. ClimateWarrior isn't just a data storage solution. It's part of the global movement towards green software—software designed, developed, used, and disposed of with minimal environmental impact. ClimateWarrior enables you to use GitHub as a free database with automatic versioning and carbon tracking, helping you contribute to the fight against climate change.

Our focus on green software means we're committed to reducing the energy consumption of software, minimizing the resources needed to run software, and promoting reusability and recyclability in software design and development. We also track your Software Carbon Intensity (SCI)—the amount of carbon dioxide equivalent (CO2e) emissions produced per unit of software service provided. This helps you understand your software's environmental impact and provides a benchmark for improvement.

## Current Features
 
### Eco-Friendly Data Storage

ClimateWarrior transforms GitHub repositories into an eco-friendly database. This approach allows you to leverage the existing infrastructure of GitHub, saving costs and energy. Plus, you get the added advantage of Git's robust version control system, which provides automatic versioning for your data. By using GitHub as your database, you're not only taking advantage of a free platform but also minimizing your carbon footprint.

### Climate-Aware Distribution

Our REST API is spread across multiple geographies that have a low carbon footprint. This means that your data storage is distributed in a way that is as green as possible. It's a bit like choosing to use renewable energy for your home - you're still getting the power you need, but in a way that is much kinder to the planet.

### JSON Support

In its current Alpha stage, ClimateWarrior supports JSON, a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. This means that you can store your data in a format that is universally understood and widely used. As we continue to develop and improve ClimateWarrior, we plan to extend our support to other media types, including images, videos, PDFs, and more.

### Automatic Versioning

One of the key features of ClimateWarrior is the use of Git's powerful version control feature. This allows you to keep track of the changes made to your data over time. By maintaining a historical record of your data, you can revert back to a previous version if needed, compare changes over time, and have a clear audit trail of data modifications.

### Edge Proxies

ClimateWarrior uses edge proxies to handle your API requests. These proxies are located near you, which reduces latency and improves performance. Plus, they delegate compute to the data center within the geography with the lowest electricity grid carbon intensity, making the process more energy-efficient.

### Software Carbon Intensity (SCI) Tracking

ClimateWarrior helps you monitor your carbon footprint with each API request. The amount of carbon produced by every request is logged in AWS Opensearch and can be queried or viewed on a user-friendly dashboard. By tracking your Software Carbon Intensity (SCI), you can gain valuable insights into the environmental impact of your software and look for ways to reduce it.

### Carbon Metrics Export

ClimateWarrior allows you to export and publish your logged carbon metrics. This feature gives you the opportunity to share your green initiatives with stakeholders, investors, customers, and the wider community. It also serves as a valuable marketing tool, demonstrating your commitment to sustainability and eco-friendly practices.

## Future Features

### Data Validation
 
In our upcoming updates, we aim to empower repository owners with the ability to use JSON schema files for data validation before committing. If an entity fails to meet the validation criteria, it will not be committed, and an error message will be generated instead.

### Enhanced Search Capabilities
 
We're working on making JSON documents searchable using the Open Search API and dashboards. Installers of the Climate Warrior App will gain access to both Open Search API and their personalized dashboards. Further, we're developing customizable index schemas, allowing users to define the schema documents for data indexing.

### Interactive Documentation
 
Our roadmap includes the introduction of interactive Swagger documentation for each organization's database. This feature will streamline the user experience by providing dynamic and user-friendly access to database documentation.

### Real-Time Notifications
 
We're developing a system where clients can subscribe to various push notifications during the data saving process. This proactive approach will keep users informed about the progress and status of their data operations.

### Customizable Webhooks
 
To give developers greater control over their data, we plan to allow the modification of incoming and outgoing data using customizable webhooks. This feature will also enable developers to implement their own validation strategy when the provided JSON Schema doesn't meet their specific needs.

## Installation
 
### Initiate Transactional Emails

We use AWS Simple Email Service (SES) for transactional emails. As our account is in sandbox mode, it requires us to manually verify email addresses for the recipients of the emails. Before you start with the installation, please email [hi@rollthecloud.com](mailto:hi@rollthecloud.com) with your primary email address associated with your GitHub account so we can add you to the verified list. Once done, we will notify you that your email address is ready to receive transactional emails.

### Create New Repository

Next, you'll need to create a new repository. We have a specific template for this to ensure consistency and ease of use. Visit [this link](https://github.com/rollthecloudinc/spearhead-objects-prod) to create a new repository using the provided template. This will guide you through the process and ensure that the repository is set up correctly.

<img width="1440" alt="Screen Shot 2023-07-04 at 10 56 41 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/7320528b-7c4f-45e8-a0db-0257e8c484f8">

### Install Climate Warrior GitHub App

Now it's time to install the Climate Warrior GitHub App. Visit the [Climate Warrior GitHub App installation page]() and click the 'Install App' button. During this step, you'll need to configure the app's access permissions. You can choose to allow the app to write to all repositories under your account or only to specific ones such as the one created in the first step for maximum security.

### Complete Installation

After a successful installation, you will be provided with user info and a new user ID. These are important credentials, so make sure to save them in a secure location. You will need them for future interactions with the Climate Warrior app.

<img width="1440" alt="Screen Shot 2023-07-04 at 11 32 52 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/59be9d57-a13b-44f4-b00d-4ff90f0be4e5">

### Check Your Email

Following the installation, you'll receive an email from sso@climateaware.eco with the subject line "Greetings, [Your Username]". This email will contain a temporary password that you will use to log in to the Climate Warrior app for the first time.

<img width="1440" alt="Screen Shot 2023-07-04 at 11 35 49 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/f8ce953d-85b3-4cd4-8d18-b707d855fafa">

### Visit the URL

With your temporary password in hand, visit [this URL](https://oai.azure.com/portal/15de48fc89c64b0eaed5282bdfe2c9a8/URL). Click the menu icon in the top left corner of the page to reveal a login button.

<img width="1440" alt="Screen Shot 2023-07-04 at 11 39 01 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/1e50c6ee-bca0-44b7-a396-14b993337b8e">
<img width="1440" alt="Screen Shot 2023-07-04 at 11 39 20 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/2a41902c-2da8-4cab-9fb4-dd089e545107">

### Login to Climate Warrior App

Click the login button and enter your GitHub username and the temporary password you received via email. This will log you into the Climate Warrior app.

<img width="1440" alt="Screen Shot 2023-07-04 at 11 39 31 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/d291efd3-26f4-4478-9ea0-90a4c014410c">
<img width="1440" alt="Screen Shot 2023-07-04 at 11 39 31 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/278d9324-3ecc-4ea1-a29f-7ed20ac3c020">

### Reset Password

After logging in with the temporary password, you'll be prompted to reset your password. Follow the instructions on the screen. You will be asked to check your email for a verification code. Use this code to reset your password to something more secure and memorable.

<img width="1440" alt="Screen Shot 2023-07-04 at 11 41 15 AM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/b9d84b63-7df4-4af5-a8d1-7d3f0f0198b7">

### Test JSON API

To ensure the installation was successful, we recommend testing The API by using [Insomnia](https://insomnia.rest/). Insomnia is a free and open-source tool that makes it easy to test HTTP/REST-based APIs.

### Obtain id_token

Log in to the Climate Warrior app again to obtain an id_token. You can copy this token from the browser's developer tools (usually accessed by pressing F12).

<img width="1440" alt="Screen Shot 2023-07-04 at 12 13 00 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/b9d82f76-9f29-49b3-bb9d-713fe33fb96e">

### Create a New POST Request

After installing Insomnia, create a new POST request using the id_token you obtained. In the URL for the request, replace {user} and {repo} with your GitHub username and the name of the repository you granted the Climate Warrior GitHub app access to.

url: https://proxy.climateaware.eco/db/{user}/{repo}/shapeshifter/test/one
body:
```json
{
	"id": "one",
	"title": "tracxxxxxxxxe"
}
```

<img width="1440" alt="Screen Shot 2023-07-04 at 12 50 28 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/94368990-8499-4b5c-bd7f-21a39731a8c7">
<img width="1428" alt="Screen Shot 2023-07-04 at 12 52 20 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/1bdcab63-c901-4be4-b5c1-4f02c4acba9f">

### Set Up the Repo as a GitHub Pages Website

Now, set up the repository as a GitHub Pages website. Go to the settings of the repository, and under the 'GitHub Pages' section, select 'master' for the 'Branch' and click 'Save'.

<img width="1440" alt="Screen Shot 2023-07-04 at 1 01 14 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/58518a64-a190-41f3-956e-e90cf6ec911a">
<img width="1440" alt="Screen Shot 2023-07-04 at 1 02 32 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/b8201aab-76eb-4485-be86-3237be201a9c">
<img width="1440" alt="Screen Shot 2023-07-04 at 1 03 41 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/c2ad8b40-47bd-4b4e-839b-d6fcf8b007d4">
<img width="1439" alt="Screen Shot 2023-07-04 at 1 05 10 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/5aef8474-761a-4624-be46-79ba75107d19">

### Verify the Website

After saving the changes, refresh the page after a minute. A banner at the top should display the URL

* https://thenetzero.github.io/spearhead-objects-prod/test/one.json

<img width="1440" alt="Screen Shot 2023-07-04 at 1 12 00 PM" src="https://github.com/rollthecloudinc/spearhead/assets/73197190/4ea5bda3-d609-4819-92cd-06aac82b5b72">

## User Guide

### How to Use the JSON API
 
Our JSON API lets you store JSON data in the most energy-efficient manner. Here's how you can access it:

| Method | URL |
| ------------- | ------------- |
| GET  | https://proxy.climateaware.eco/db/owner/repo/shapeshifter/path/id  |
| PUT  | https://proxy.climateaware.eco/db/owner/repo/shapeshifter/path/id  |
| POST  | https://proxy.climateaware.eco/db/owner/repo/shapeshifter/path/id  |

When creating a POST request, your JSON body should contain any valid JSON with an 'id' property. This 'id' is used to distinguish unique JSON documents within the provided path. It's important to ensure that the 'id' in the parameter matches the 'id' inside the JSON document body.

Here's an example of how your JSON document should look:

```javascript
{
  "id": "6f39a72a-6af3-4348-9158-7f111a6d0352"
  "title": "My first document"
}
```

Please note that JSON Documents committed via the shapeshifter API will automatically include the user id of the authenticated user that initiated the change.

The response would look like this:

```javascript
{
  "id": "6f39a72a-6af3-4348-9158-7f111a6d0352"
  "title": "My first document",
  "userId": "cc149bd7-83ef-47c5-a397-eb0eb0068e0d"
}
```

## Practical Applications
 
Below are some practical scenarios showcasing how the Climate Warrior App can be utilized in different projects:

### Listing a New Home on Astral.eco
 
> Astral is a sustainable e-commerce platform that serves as a free marketplace for a wide array of goods, services, and products. It's an ideal platform for entrepreneurs aiming to contribute to planetary growth.

Scenario: You want to add a new home listing to the real estate section of Astral using the Climate Warrior App.

Here's an example of a JSON request for creating a new home listing:

```json
 {  
  "listing": {  
    "property": {  
      "area": "Downtown, NY",  
      "bedrooms": 3,  
      "bathrooms": 2,  
      "propertyType": "Apartment",  
      "yearBuilt": 2015,  
      "squareFeet": 1500,  
      "price": 500000  
    },  
    "seller": {  
      "sellerId": "seller456",  
      "name": "John Doe",  
      "contact": "john@example.com"  
    },  
    "listingStatus": "Available",  
    "description": "A luxurious 3 BHK apartment located in the heart of the city, equipped with modern amenities. Great view of the downtown skyline.",  
    "photos": [  
      "image1_url",  
      "image2_url"  
    ]  
  }  
}  
```

This JSON request includes listing with property details and seller information. property provides information such as the area, number of bedrooms and bathrooms, property type, year built, square footage, and price. seller details include the seller's ID, name, and contact information. listingStatus indicates the current status of the listing, and description provides a brief overview of the property. photos is an array that includes URLs to images of the property.

```javascript
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer TOKEN'
  },
  body: '{"id":"123e4567-e89b-12d3-a456-426614174000","listing":{"property":{"area":"Downtown, NY","bedrooms":3,"bathrooms":2,"propertyType":"Apartment","yearBuilt":2015,"squareFeet":1500,"price":500000},"seller":{"sellerId":"123e4sde-e89b-12d3-a456-426614174f34","name":"John Doe","contact":"john@example.com"},"listingStatus":"Available","description":"A luxurious 3 BHK apartment located in the heart of the city, equipped with modern amenities. Great view of the downtown skyline.","photos":["image1_url","image2_url"]}}'
};

fetch('https://proxy.climateaware.eco/db/rollthecloudinc/vertigoapp-objects-prod/shapeshifter/examples/astral/realestate/123e4567-e89b-12d3-a456-426614174000', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

### Posting on the Public Forum of Zing.eco
 
> Zing is a dynamic platform on the sustainable web, offering a limitless exchange of media, ideas, and commentary. It's a space for unrestricted creative expression, free from the constraints of censorship.

Scenario: You're interested in posting a new message on the Zing public forum using the Climate Warrior App.

Here's an example of a JSON request for creating a new post:

```json
{  
  "post": {  
    "id": "123e4567-e89b-12d3-a456-426614174000",  
    "username": "JohnDoe",  
    "content": "This is a discussion about the impact of climate change on our planet and what we can do to mitigate it. #ClimateChange #Environment #Sustainability",  
    "media": [  
      {  
        "type": "image",  
        "url": "attachment1_url"  
      },  
      {  
        "type": "video",  
        "url": "attachment2_url"  
      }  
    ],  
    "location": "New York, NY",  
    "language": "en",  
    "hashtags": [  
      {  
        "id": "1b671a64-40d5-491e-99b0-da01ff1f3341",  
        "text": "ClimateChange"  
      },  
      {  
        "id": "6ecd8c99-4036-403d-bf84-cf571e9126d9",  
        "text": "Environment"  
      },  
      {  
        "id": "7e7172a8-b2b8-44a0-a613-466d2d26fd2d",  
        "text": "Sustainability"  
      }  
    ],  
    "mentions": [  
      {  
        "id": "eb1b5b1e-b37b-4174-a8b8-1e9ea1a1d74f",  
        "username": "JaneDoe",  
        "date": "2022-09-13T14:30:00Z"  
      },  
      {  
        "id": "fa7b1b2e-c37c-4175-a9b9-2e9ea2a2d75f",  
        "username": "BobSmith",  
        "date": "2022-09-13T14:35:00Z"  
      }  
    ],  
    "replyTo": [  
      {  
        "id": "cb2b3b2d-d37d-4176-a8b8-3e9ea3a3d76f",  
        "username": "AliceJohnson",  
        "date": "2022-09-13T14:28:00Z"  
      }  
    ],  
    "scheduled": false,  
    "scheduledAt": null,  
    "reviewStatus": {  
      "state": "reviewed",  
      "reviewedBy": "moderator123",  
      "decision": "approved",  
      "reason": null  
    }  
  }  
}  
```

In this JSON request, post contains the userId, title, content, tags, and attachments. userId is the unique identifier for the user. title and content provide the title and body of the post respectively. tags is an array of tags relevant to the post. attachments is an array that includes URLs to any attachments for the post.

```javascript
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer TOKEN'
  },
  body: '{"id":"3123e4567-e89b-12d3-a456-426614175000","post":{"username":"JohnDoe","content":"This is a discussion about the impact of climate change on our planet and what we can do to mitigate it. #ClimateChange #Environment #Sustainability","media":[{"type":"image","url":"attachment1_url"},{"type":"video","url":"attachment2_url"}],"location":"New York, NY","language":"en","hashtags":[{"id":"1b671a64-40d5-491e-99b0-da01ff1f3341","text":"ClimateChange"},{"id":"6ecd8c99-4036-403d-bf84-cf571e9126d9","text":"Environment"},{"id":"7e7172a8-b2b8-44a0-a613-466d2d26fd2d","text":"Sustainability"}],"mentions":[{"id":"eb1b5b1e-b37b-4174-a8b8-1e9ea1a1d74f","username":"JaneDoe","date":"2022-09-13T14:30:00Z"},{"id":"fa7b1b2e-c37c-4175-a9b9-2e9ea2a2d75f","username":"BobSmith","date":"2022-09-13T14:35:00Z"}],"replyTo":[{"id":"cb2b3b2d-d37d-4176-a8b8-3e9ea3a3d76f","username":"AliceJohnson","date":"2022-09-13T14:28:00Z"}],"scheduled":false,"scheduledAt":null,"reviewStatus":{"state":"reviewed","reviewedBy":"moderator123","decision":"approved","reason":null}}}'
};

fetch('https://proxy.climateaware.eco/db/rollthecloudinc/vertigoapp-objects-prod/shapeshifter/examples/zing/post/3123e4567-e89b-12d3-a456-426614175000', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

### Creating a Web Page on ClimateAware.eco
 
> ClimateAware is an advanced cloud environment designed for creating and distributing sustainable, low-energy web experiences. It provides an optimized platform for rapid green website development, reaching audiences worldwide.

Scenario: You're planning to create a web page for an existing site on Climate Aware using the Climate Warrior App.
You can consult the relevant request snippet and screen capture from Insomnia for comprehensive instructions.

Here's an example of a JSON request for creating a new web page using the ClimateAware, low code page builder.

```json
{  
    "contexts": [],  
    "cssFile": "",  
    "derivativeId": "",  
    "displayType": "page",  
    "entityPermissions": {  
        "deleteUserIds": [  
            "163035ae-b39b-4580-989c-169ffa05e110"  
        ],  
        "readUserIds": [  
            "*"  
        ],  
        "writeUserIds": [  
            "163035ae-b39b-4580-989c-169ffa05e110"  
        ]  
    },  
    "gridItems": [],  
    "id": "f4c36261-0886-4a6a-8883-7ccf530da319",  
    "layoutSetting": {  
        "settings": []  
    },  
    "layoutType": "gridless",  
    "name": "index",  
    "panels": [  
        {  
            "columnSetting": {  
                "settings": []  
            },  
            "label": "",  
            "name": "",  
            "panes": [  
                {  
                    "contentPlugin": "snippet",  
                    "label": "made_up_label",  
                    "linkedPageId": "",  
                    "locked": false,  
                    "name": "made_up_name",  
                    "rule": {  
                        "condition": "",  
                        "field": "",  
                        "operator": "",  
                        "rules": [],  
                        "value": ""  
                    },  
                    "settings": [  
                        {  
                            "attributes": [],  
                            "computedValue": "This is a made-up sentence for demonstration purposes.",  
                            "displayName": "Made-up Attribute",  
                            "floatValue": 0,  
                            "intValue": 0,  
                            "name": "made_up_attribute",  
                            "type": 1,  
                            "value": "This is a made-up sentence for demonstration purposes."  
                        }  
                    ]  
                }  
            ]  
        }  
    ],  
    "path": "/index",  
    "persistence": {  
        "dataduct": {  
            "plugin": "",  
            "settings": []  
        }  
    },  
    "rowSettings": [  
        {  
            "settings": []  
        }  
    ],  
    "site": "astral",  
    "title": "Index",  
    "userId": "163035ae-b39b-4580-989c-169ffa05e110"  
}
```

This JSON data represents the configuration of a webpage named 'index' for the site 'astral'. It contains information about the user permissions, layout settings, and the path for the webpage. The webpage is structured with a 'gridless' layout type and has a single panel. This panel contains a single pane element labeled as 'made_up_label' and named as 'made_up_name', which is of the content plugin type 'snippet'. This pane has a rule and settings associated with it. The settings include a made-up attribute with the value "This is a made-up sentence for demonstration purposes.". The JSON also includes information about the persistence plugin used and the unique ID of the user who has permissions to modify the webpage.

> Please refer to the associated request snippet and screen capture from Insomnia for step-by-step instructions.

## How it works
 
ClimateWarrior transforms your GitHub repository into a green, climate-aware database. It allows you to perform CRUD (Create, Read, Update, Delete) operations directly onto your repository using its REST API. All changes to your data are tracked by Git's powerful versioning system, providing an automatic historical record of your data.

In an effort to minimize the carbon footprint of software operations, each API request you make is handled by an edge proxy located near you. This edge proxy then delegates the compute work to a data center within the geography with the lowest electricity grid carbon intensity. This could be any one of our globally distributed services located in Montreal, Ashburn VA, San Francisco, Dublin, London, Frankfurt, Stockholm, or Norway East.

This system not only reduces latency and improves performance but also significantly reduces the carbon emissions associated with data storage and retrieval. By using ClimateWarrior, you're not just taking advantage of a powerful data storage solution, but also contributing to the fight against climate change.

## Security
 
Your data's security is our topmost priority. Our API uses secure HTTPS connections and requires JSON Web Tokens (JWT) for all requests. This ensures that your data is always protected. Besides, by using GitHub, you can leverage their in-built security features.

## Contribute
 
ClimateWarrior is a pioneering GitHub App, dedicated to creating eco-friendly software and combating climate change. We transform GitHub repositories into an environmentally responsible database, minimizing the carbon footprint of software operations. Beyond software development, we are committed to a charitable cause, supporting initiatives that fight climate change and promote sustainability. We welcome contributions in many forms. Aside from submitting pull requests to enhance ClimateWarrior, we are also grateful for your financial support to our charity cause. You can donate through the following avenues:

* [GoFundMe Campaign](https://www.gofundme.com/f/climateawareeco-ecofriendly-web-apps-for-all): Help us reach our funding goals by donating to our GoFundMe campaign. Your contribution will go a long way in supporting our mission.
* [PayPal Donations](https://www.paypal.com/fundraiser/charity/4587641): PayPal is a quick and secure way to contribute. You can choose to make a one-time donation or set up a recurring donation to support us on an ongoing basis.
* [Bonfire Apparel Shop](https://www.bonfire.com/store/climatewarrior/): Show your support and raise awareness by wearing ClimateWarrior gear. Visit our Bonfire shop to view our collection of eco-friendly t-shirts, hoodies, and more.
* ArtWork Donations: Moreover, we invite artists to submit their artwork for our Bonfire apparel line.

Remember, every contribution, no matter how small, helps us in our fight against climate change. Thank you for your support!

## Contact
 
For queries, suggestions, or just to say hello, please reach us at [hello@rollthecloud.com](mailto:hello@rollthecloud.com)
