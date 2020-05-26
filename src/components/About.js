import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from "./Footer"

export default function About() {
    return (
     <div >
        <CssBaseline />
            <Container className= "about-container">
                    <Typography variant="h4" component="h1" gutterBottom>
                    <u>About the project</u>
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    {"When I thougt about my final project, I had some different ideas in mind that weren't related to my current company, Tiny House Coffee."} 
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    {"In one of the company's meetings, one of the topics discussed was the delay in production due to the lack of inventory management. It was then that I suggested using an app to track the inventory of our products in all departments, such as purchasing, roasting, brewing."}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    {"I feel like I could have made more improvements if I had more time to invest in continuing to practice and learn the skills and tools provided by all Austin Coding Academy professionals and colleagues, and that is something I will try to do as a next step to make this app 100% functional."}
                    </Typography>
            </Container>
            <Footer />
        </div>
    )
}
