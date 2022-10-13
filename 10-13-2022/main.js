/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet */

//(url)- reutrn domain name, return as string, with special !

//"http://github.com/carbonfive/raygun") == "github" 
//"http://www.zombie-bites.com") == "zombie-bites"
//"https://www.cnet.com") == "cnet */

function domainName(url){
    //remove url using replace method
    // split to grab the domain name
    let result = url.replace('https://www.', '').replace('http://www.', '').replace('https://', '').split('.')
    console.log(result)
    return result[0]
    
  }
  console.log(domainName("https://www.cnet.com"))
  console.log(domainName("http://www.zombie-bites.com"))
  console.log(domainName("https://github.com/carbonfive/raygun"))