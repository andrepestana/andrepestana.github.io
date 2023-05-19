---
author: Andre Pestana
updated: 2023-05-19 13:16:39
title: Testing connectivity between hosts
tags: networking, docker, devops, testing
giphy: https://giphy.com/embed/1qaUNnTLHyGIxRsS6x
giphyPaddingBottom: 100%
---

<!-- excerpt -->

Often, when ensuring the availability and accessibility of your services, you may find it necessary to perform a simple test to check if a particular endpoint is hosting a running service. It's akin to knocking on a door to see if anyone's home—a straightforward gesture. However, you may lack the means to perform this "knock" yourself. By means, I refer to applications like telnet, which serves as a metaphorical hand to carry out the knocking process. Presently, it's quite common for operating systems to operate within lean Docker containers, devoid of telnet, curl, or nc commands. Consequently, I have compiled a list of alternatives for you to ensure that the endpoint you are testing indeed accepts connections.

<!-- excerpt -->

## Using telnet

Telnet is a versatile application that can be used to test the availability and accessibility of an endpoint. By establishing a Telnet connection to a specific IP address and port, you can determine if a service is running and ready to accept connections.

To test an endpoint using Telnet, follow these steps:

1. Identify the IP address or hostname of the endpoint you want to test. This could be a web server, database server, or any other network-connected device.
2. Determine the port number associated with the service you wish to check. Common port numbers include 80 for HTTP, 443 for HTTPS, 22 for SSH, and 3306 for MySQL.
3. Open a command prompt or terminal on your system.
4. Enter the following command: telnet [IP address or hostname] [port number]. For example, telnet example.com 80.
5. Press Enter to initiate the Telnet connection.
6. If the connection is successful, you will see a message indicating that you have connected to the endpoint.
7. If the connection fails or you receive an error message, it suggests that the service might not be available or the endpoint is unreachable.
   Using Telnet, you can perform a basic connectivity test to determine if a service is running on a specific endpoint. However, please note that Telnet only checks if a connection can be established and does not provide any insights into the actual functionality or performance of the service.

## Using nc

The nc command, also known as netcat, is a powerful networking utility available on various operating systems, including Linux, macOS, and Windows (with the use of third-party implementations). It provides a wide range of functionalities for network communication.

To test an endpoint using the nc command, you can follow these steps:

1. Open a command prompt or terminal on your system.
2. Enter the following command: nc [IP address or hostname] [port number].
3. Replace [IP address or hostname] with the actual IP address or hostname of the endpoint you want to test.
4. Replace [port number] with the specific port associated with the service you wish to check.
5. Press Enter to initiate the connection.

Once the connection is established, you can interact with the endpoint. If the connection is successful, you'll see any response or output from the service running on that endpoint. If the connection fails or you receive an error message, it indicates that the service might not be available or the endpoint is unreachable.

The nc command is particularly useful for tasks like port scanning, network troubleshooting, transferring files, and setting up network connections. It provides a versatile and flexible approach to network communication and testing.

## Using curl

To test an endpoint using the curl command with the -vv option, follow these steps:

1. Open a command prompt or terminal on your system.
2. Enter the following command: curl -vv [URL].
3. Replace [URL] with the actual URL or IP address of the endpoint you want to test.
4. Press Enter to initiate the request.

The -vv option stands for "verbose" and enables verbose output, providing detailed information about the request and response. This includes the HTTP headers, status codes, and other relevant details.

After executing the command, curl will send a request to the specified endpoint and display the verbose output in the terminal. You will see the request being made, along with the response received from the endpoint. This allows you to examine the response headers, response body, and other information that can help diagnose issues or verify the availability and functionality of the endpoint.

By analyzing the verbose output, you can determine if the endpoint is reachable, if the request was successful, and if the expected data is returned. Additionally, any errors or connection issues will be highlighted in the output, providing insights into the health of the endpoint.

The curl command is a versatile tool commonly used for testing and interacting with web services, making HTTP requests, and retrieving data from various endpoints.

## Using Bash (or sh shell)

If the only thing that you have is a Bash or sh shell to check if a specific port is open or closed on an endpoint, you can use the following command:

```sh

(timeout 1 bash -c '</dev/tcp/127.0.0.1/PORT && echo PORT OPEN || echo PORT CLOSED') 2>/dev/null

```

Here's how it works:

1. Replace PORT in the command with the specific port number you want to test.
2. The timeout command sets a timeout of 1 second for the test. Adjust the timeout value as per your requirements.
3. The bash -c part executes the provided command in a new Bash shell.
   </dev/tcp/127.0.0.1/PORT attempts to open a connection to the specified IP address (127.0.0.1 for localhost) and port using input redirection. If the connection succeeds, it indicates that the port is open.
4. If the connection is successful, it echoes "PORT OPEN". Otherwise, it echoes "PORT CLOSED".
5. 2>/dev/null redirects any error output to null, suppressing it from being displayed.

By running this command, you will get a response indicating whether the specified port is open or closed on the given endpoint.
