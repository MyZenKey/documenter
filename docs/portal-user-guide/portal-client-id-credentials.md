# Client Id credentials

ZenKey offers two options for securing a client ID based on OAuth 2.0 specifications.  

  * Generating client secrets for each client id with Trust Services disabled or server-initiated options in the project stepper. The client secret option automatically generates a client ID and client secret and displays them on the “Client Secret” screen. It is your responsibility to secure your client secret. Client IDs are always available when viewing projects and clients on the portal page.
  * Generating JSON web keysets for each client id when enabling Trust Services or server-initiated options in the project stepper. JSON web keysets are more secure than client secrets. Existing clients with client secrets cannot change to JSON web keysets. ZenKey generates JSON web keysets in user's browsers. The ZenKey server does not save the private key.

Projects can include clients with client secrets and JSON web keysets.

The client view in the ZenKey developer portal shows clients as having client secrets or JSON web keysets.

## Choose how to authenticate a client.
1. Log in to the ZenKey developer portal: https://portal.myzenkey.com/. 
2. Select or create a project.
3. Create a new client by clicking **Add a New Client**.
4. In the **Security Method** section, choose one of the following options:
    -   Choose **Client Assertion** to use JSON web keysets to authenticate with the authorization server. Clients using the server-initiated flow or Trust Services must use JSON web keysets.
    -    Choose **Client Secret** to use a client secret to authenticate with the authorization server. 
5. Click **Next**.
6. If you chose to use JSON web keysets, the ZenKey developer portal displays the **JSON Web Key Set** page. Select the "I understand..' box and download the keyset files. Afterward, you can use the files with your application.
7. Click **Finish**.