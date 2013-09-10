# Honeypot #
Do you like entrapment? I know I do. 

This tool is used to keep a server running that, if accessed, will send you a [pushover](https://pushover.net) notification.

Put a link to it in your toolbar and catch privacy hating friends left and right. 

![toolbar with a honeypot](http://i.imgur.com/Jxqataa.png "toolbar with a link to the honeypot for an unsuspecting 'friend'")
***Who could resist it?***

Use it as a ficticious image host for an invisible pixel for your admin view, and *boom*: reusable honeypot.

## How to get started ##
Add your pushover information in ``lib/push.js``

    $ npm install
    $ node .
    
Visit ``http://localhost:8099`` 

**DONE**

Keep it running with [forever](https://github.com/nodejitsu/forever) if you want to.

*Keep your friends scared and yourself paranoid.*
