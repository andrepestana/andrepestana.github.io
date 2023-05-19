import{_ as e,o as t,c as n,d as o}from"./app.3987c784.js";const g=JSON.parse('{"title":"Testing connectivity between hosts","description":"","frontmatter":{"author":"Andre Pestana","updated":"2023-05-19T13:16:39.000Z","title":"Testing connectivity between hosts","tags":"networking, docker, devops, testing","giphy":"https://giphy.com/embed/1qaUNnTLHyGIxRsS6x","giphyPaddingBottom":"100%"},"headers":[{"level":2,"title":"Using telnet","slug":"using-telnet","link":"#using-telnet","children":[]},{"level":2,"title":"Using nc","slug":"using-nc","link":"#using-nc","children":[]},{"level":2,"title":"Using curl","slug":"using-curl","link":"#using-curl","children":[]},{"level":2,"title":"Using Bash (or sh shell)","slug":"using-bash-or-sh-shell","link":"#using-bash-or-sh-shell","children":[]}],"relativePath":"sections/articles/posts/testing-connectiy-between-hosts.md","lastUpdated":null}'),i={name:"sections/articles/posts/testing-connectiy-between-hosts.md"},s=o(`<p>Often, when ensuring the availability and accessibility of your services, you may find it necessary to perform a simple test to check if a particular endpoint is hosting a running service. It&#39;s akin to knocking on a door to see if anyone&#39;s home\u2014a straightforward gesture. However, you may lack the means to perform this &quot;knock&quot; yourself. By means, I refer to applications like telnet, which serves as a metaphorical hand to carry out the knocking process. Presently, it&#39;s quite common for operating systems to operate within lean Docker containers, devoid of telnet, curl, or nc commands. Consequently, I have compiled a list of alternatives for you to ensure that the endpoint you are testing indeed accepts connections.</p><h2 id="using-telnet" tabindex="-1">Using telnet <a class="header-anchor" href="#using-telnet" aria-hidden="true">#</a></h2><p>Telnet is a versatile application that can be used to test the availability and accessibility of an endpoint. By establishing a Telnet connection to a specific IP address and port, you can determine if a service is running and ready to accept connections.</p><p>To test an endpoint using Telnet, follow these steps:</p><ol><li>Identify the IP address or hostname of the endpoint you want to test. This could be a web server, database server, or any other network-connected device.</li><li>Determine the port number associated with the service you wish to check. Common port numbers include 80 for HTTP, 443 for HTTPS, 22 for SSH, and 3306 for MySQL.</li><li>Open a command prompt or terminal on your system.</li><li>Enter the following command: telnet [IP address or hostname] [port number]. For example, telnet <a href="http://example.com" target="_blank" rel="noreferrer">example.com</a> 80.</li><li>Press Enter to initiate the Telnet connection.</li><li>If the connection is successful, you will see a message indicating that you have connected to the endpoint.</li><li>If the connection fails or you receive an error message, it suggests that the service might not be available or the endpoint is unreachable. Using Telnet, you can perform a basic connectivity test to determine if a service is running on a specific endpoint. However, please note that Telnet only checks if a connection can be established and does not provide any insights into the actual functionality or performance of the service.</li></ol><h2 id="using-nc" tabindex="-1">Using nc <a class="header-anchor" href="#using-nc" aria-hidden="true">#</a></h2><p>The nc command, also known as netcat, is a powerful networking utility available on various operating systems, including Linux, macOS, and Windows (with the use of third-party implementations). It provides a wide range of functionalities for network communication.</p><p>To test an endpoint using the nc command, you can follow these steps:</p><ol><li>Open a command prompt or terminal on your system.</li><li>Enter the following command: nc [IP address or hostname] [port number].</li><li>Replace [IP address or hostname] with the actual IP address or hostname of the endpoint you want to test.</li><li>Replace [port number] with the specific port associated with the service you wish to check.</li><li>Press Enter to initiate the connection.</li></ol><p>Once the connection is established, you can interact with the endpoint. If the connection is successful, you&#39;ll see any response or output from the service running on that endpoint. If the connection fails or you receive an error message, it indicates that the service might not be available or the endpoint is unreachable.</p><p>The nc command is particularly useful for tasks like port scanning, network troubleshooting, transferring files, and setting up network connections. It provides a versatile and flexible approach to network communication and testing.</p><h2 id="using-curl" tabindex="-1">Using curl <a class="header-anchor" href="#using-curl" aria-hidden="true">#</a></h2><p>To test an endpoint using the curl command with the -vv option, follow these steps:</p><ol><li>Open a command prompt or terminal on your system.</li><li>Enter the following command: curl -vv [URL].</li><li>Replace [URL] with the actual URL or IP address of the endpoint you want to test.</li><li>Press Enter to initiate the request.</li></ol><p>The -vv option stands for &quot;verbose&quot; and enables verbose output, providing detailed information about the request and response. This includes the HTTP headers, status codes, and other relevant details.</p><p>After executing the command, curl will send a request to the specified endpoint and display the verbose output in the terminal. You will see the request being made, along with the response received from the endpoint. This allows you to examine the response headers, response body, and other information that can help diagnose issues or verify the availability and functionality of the endpoint.</p><p>By analyzing the verbose output, you can determine if the endpoint is reachable, if the request was successful, and if the expected data is returned. Additionally, any errors or connection issues will be highlighted in the output, providing insights into the health of the endpoint.</p><p>The curl command is a versatile tool commonly used for testing and interacting with web services, making HTTP requests, and retrieving data from various endpoints.</p><h2 id="using-bash-or-sh-shell" tabindex="-1">Using Bash (or sh shell) <a class="header-anchor" href="#using-bash-or-sh-shell" aria-hidden="true">#</a></h2><p>If the only thing that you have is a Bash or sh shell to check if a specific port is open or closed on an endpoint, you can use the following command:</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">timeout 1 bash -c </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;/dev/tcp/127.0.0.1/PORT &amp;&amp; echo PORT OPEN || echo PORT CLOSED</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">2&gt;</span><span style="color:#A6ACCD;">/dev/null</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>Here&#39;s how it works:</p><ol><li>Replace PORT in the command with the specific port number you want to test.</li><li>The timeout command sets a timeout of 1 second for the test. Adjust the timeout value as per your requirements.</li><li>The bash -c part executes the provided command in a new Bash shell. &lt;/dev/tcp/127.0.0.1/PORT attempts to open a connection to the specified IP address (127.0.0.1 for localhost) and port using input redirection. If the connection succeeds, it indicates that the port is open.</li><li>If the connection is successful, it echoes &quot;PORT OPEN&quot;. Otherwise, it echoes &quot;PORT CLOSED&quot;.</li><li>2&gt;/dev/null redirects any error output to null, suppressing it from being displayed.</li></ol><p>By running this command, you will get a response indicating whether the specified port is open or closed on the given endpoint.</p>`,24),a=[s];function r(l,c,h,p,d,u){return t(),n("div",null,a)}const f=e(i,[["render",r]]);export{g as __pageData,f as default};
