const domain = "http://google.com"
const domain2 = "https://youtube.com"
const domain3 = 'www.wp.pl'

//Challenge descriptiom - Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


function domainName(url){

    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
}

domainName(domain)
domainName(domain2)
domainName(domain3)
        
