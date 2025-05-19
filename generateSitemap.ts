import { writeFileSync, readdirSync } from "fs";
 import { SitemapStream, streamToPromise } from "sitemap";

const hostname = "https://rnahealthtech.com";

function getStaticRoutes() {
  return [
    "/",
    "/about-us",
    "/services",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/healthcare-analytics",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/patient-portal-engagement",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/medical-billing-revenue-cycle",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/telemedicine-platform",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/patient-lead-generation",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/clinic-management-system",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/electronic-medical-records",
    "/healthtech-services-best-healthtech-company-in-delhi-ncr/appointment-management-system", 
    "/projects",
    "/contact",
  ];
}

async function generateSitemap(){
    try {
        const staticRoutes = getStaticRoutes();
        
        const stream = new SitemapStream({ hostname });
        [...staticRoutes].forEach(route => {
            stream.write({ url: route })
        });
    
       stream.end();
    
       const data = await streamToPromise(stream);
       writeFileSync('./public/sitemap.xml', data.toString());
       console.log(`Sitemap generating for ${hostname}`)
    }
    catch(e){
        console.log('Error while generating sitemap : ', e);
    }
}

generateSitemap();