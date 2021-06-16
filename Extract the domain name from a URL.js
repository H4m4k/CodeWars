const domain = "http://google.com"
const domain2 = "https://youtube.com"
const domain3 = 'www.wp.pl'

//Challenge descriptiom - Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


function domainName(url){

    if (url.startsWith('https')) {
        return url.substring(8,url.indexOf('.'))
    } else if (url.startsWith('http')) {
        return url.substring(7,url.indexOf('.'))
    } else if (url.startsWith('www')) {
        return url.substring(4,url.indexOf('.',5))
    }
}

domainName(domain)
domainName(domain2)
domainName(domain3)
        
