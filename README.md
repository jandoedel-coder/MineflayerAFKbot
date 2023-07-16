# Mineflayer Bot API

Welcome to the Mineflayer Bot API! This API allows you to create mineflayer bots with different authentication methods and configurations. Let's get started!

## Installation

Before running the API, make sure you have Node.js installed on your system. Then, follow these steps:

1. Clone the repository: `$ git clone https://github.com/your/repo.git`
2. Install dependencies: `$ npm install`
3. Configure the necessary environment variables or update the code with your desired configurations.
4. Start the API: `$ npm start`

## API Usage

### Add Bot

To add a mineflayer bot, make a GET request to `/addbot`. The following headers are required:

- `ip`: The server IP address
- `username`: Bot's desired username
- `password`: Bot's password (Premium authentication only)
- `port`: The server port (Premium authentication only)
- `version`: Minecraft version
- `auth`: Authentication method ('premium' or 'cracked')

Example Request:
```plaintext
GET /addbot
Host: localhost:3000
ip: example.com
username: bot123
password: secret
port: 25565
version: 1.17.1
auth: premium
```

### Response

The API will respond with a success message if the bot was created successfully. If any errors occur during bot creation or event handling, appropriate error messages will be logged to the console.

## Error Handling

The API includes error handling to catch exceptions and provide meaningful error responses. If an error occurs during bot creation or if an invalid authentication method is provided, an error
