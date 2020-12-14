import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: '#233'
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0
        },
       '&:after': {
           content: "''",
           display: 'table',
           clear: 'both'
       },
       [theme.breakpoints.up('md')]: {
           padding: '2rem',
           '&:before': {
               left: 'calc(50% - 1px)',
               right: 'auto'
           }
       }
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
<Navbar />
<Box component='header' className={classes.mainContainer}>
    <Typography variant='h4' align='center' className={classes.heading}>
        working experience
    </Typography>
    <Box component='div' className={classes.timeLine}>
        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2020
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
            <Typography variant='h5' aligh='center' className={classes.subHeading}>
                Web Design - MERN Full Stack
            </Typography>
            <Typography variant='body1' aligh='center' style={{color: 'tomato'}}>
            UC Berkeley Coding Bootcamp
            </Typography>
            <Typography variant='subtitle1' aligh='center' style={{color: 'tan'}}>
                six month Coding Bootcamp focused on MERN stack (MongoDB, Express, React, Node). Other focus areas include base knowledge of Javascript, CSS, and HTML.  
            </Typography>
        </Box>
        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2018
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
            <Typography variant='h5' aligh='center' className={classes.subHeading}>
                SAFe Certified Scrum Master & Project Controller
            </Typography>
            <Typography variant='body1' aligh='center' style={{color: 'tomato'}}>
                Mi-GSO PCUBED 
            </Typography>
            <Typography variant='subtitle1' aligh='center' style={{color: 'tan'}}>
                Full Time Consultant for a Global Project Management Consulting firm. Placed within Infrormation Technology Center of a Fortune 500 Oil & Gas company. Focused methodologies include Waterfall and SAFe Agile. 
            </Typography>
        </Box>
        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2017
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
            <Typography variant='h5' aligh='center' className={classes.subHeading}>
                Small Business Consultant
            </Typography>
            <Typography variant='body1' aligh='center' style={{color: 'tomato'}}>
                Automatic Data Processing 
            </Typography>
            <Typography variant='subtitle1' aligh='center' style={{color: 'tan'}}>
                Full Time Small Business Consultant focused on providing variety of technology based solutions to increase efficiency and productivity of Small Businesses. 
            </Typography>
        </Box>
        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2016
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
            <Typography variant='h5' aligh='center' className={classes.subHeading}>
                Graduate BS in Business Administration 
            </Typography>
            <Typography variant='body1' aligh='center' style={{color: 'tomato'}}>
                California State University Chico 
            </Typography>
            <Typography variant='subtitle1' aligh='center' style={{color: 'tan'}}>
                Completed 4 year degree in Business Administration with focus on Marketing and Sales.  
            </Typography>
        </Box>
        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2005
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
            <Typography variant='h5' aligh='center' className={classes.subHeading}>
                Built my First Computer
            </Typography>
            <Typography variant='body1' aligh='center' style={{color: 'tomato'}}>
                  it ran FEAR. Biggest accomplishment. 
            </Typography>
            <Typography variant='subtitle1' aligh='center' style={{color: 'tan'}}>
            At 13 I built my first computer with the financial help of my dad. Used that computer until its fateful demise to Limewire my Sophmore year in HighSchool. 
            </Typography>
        </Box>
    </Box>
</Box>
        </>
    );
};

export default Resume
