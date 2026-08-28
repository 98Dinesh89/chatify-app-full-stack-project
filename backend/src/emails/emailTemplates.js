export const emailTemplate = (username, appUrl) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Welcome to Chatify</title>
        </head>

        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Welcome to Chatify, ${username}! 👋</h2>

            <p>
                We're excited to have you here.
                Your account has been successfully created.
            </p>

            <p>
                Start chatting with your friends and enjoy Chatify!
            </p>

            <a href="${appUrl}"
               style="
                   display: inline-block;
                   padding: 12px 20px;
                   background-color: #007bff;
                   color: white;
                   text-decoration: none;
                   border-radius: 5px;
               ">
                Open Chatify
            </a>

            <p>
                See you there!<br>
                <strong>The Chatify Team</strong>
            </p>
        </body>
        </html>
    `;
};