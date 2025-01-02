# Launcher

Launcher is a simple Node.js application that serves files from an AWS S3 bucket using Express.

## Prerequisites

- Node.js
- AWS S3 bucket
- AWS credentials

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/DRJayaswal/Launcher.git
    cd Launcher
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add your AWS and server configuration:

    ```env
    PORT=3000
    AWS_ACCESS_KEY_ID=your_aws_access_key_id
    AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
    AWS_ENDPOINT=your_aws_endpoint
    AWS_REGION=your_aws_region
    SQS_QUEUE_URL=your_sqs_queue_url
    AWS_BUCKET_NAME=your_s3_bucket_name
    GITHUB_TOKEN=your_github_token
    ```

## Usage

1. Build the project:

    ```sh
    npm run build
    ```

2. Start the server:

    ```sh
    npm start
    ```

3. The server will be running on `http://localhost:3001`. It will serve files from the S3 bucket based on the request path.

## Project Structure

- [index.ts](http://_vscodecontentref_/1): Main server file that handles incoming requests and serves files from the S3 bucket.
- [getFiles.ts](http://_vscodecontentref_/2): Utility function to get files from a specified directory.
- [tsconfig.json](http://_vscodecontentref_/3): TypeScript configuration file.
- [package.json](http://_vscodecontentref_/4): Project configuration and dependencies.

## License

This project is licensed under the ISC License.